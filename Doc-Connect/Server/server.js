const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy;
const cookieParser = require('cookie-parser');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Razorpay = require('razorpay');
const dotenv = require('dotenv');
const Doctor = require("./models/DoctorSchema");
const Patient = require('./models/PatientSchema');
const { isAuthDoctor, sanitizeUser, cookieExtractor} = require('./Services/comman');


dotenv.config();
connectDB();

// JWT options

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.jwtFromRequest = cookieExtractor();
opts.secretOrKey = process.env.JWT_SECRET_KEY; 

app.use(bodyParser.json({ limit: '10mb' }));
//console.log("hello");
const corsOptions = {
    origin: 'http://localhost:4200', // Replace with your Angular app's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(session({
    secret: 'keyboard cat',
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
}));
app.use(cookieParser());
app.use(passport.authenticate('session'));



app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/patient',require('./routes/PatientRoutes'));

app.use('/api/doctor',require('./routes/DoctorRoutes'));

app.use('/api/patient/appointment', require('./routes/PatientAppointmentRoutes'));

app.use('/api/doctor/appointment', require('./routes/DoctorAppointmentRoutes'));

app.use('/api/patient/payment', require('./routes/PaymetRoutes'));


// Passport Strategies
//local for doctor
passport.use('doctor-local',
    new LocalStrategy({ usernameField: 'Email',passwordField : 'Password' }, async function (
      Email,
      Password,
      done
    ) {
      // by default passport uses username
      console.log({ Email, Password });
      try {
        const doctor = await Doctor.findOne({ Email: Email });
        if (!doctor) {
          console.log("hi");
          return done(null, false, { message: 'invalid credentials' }); // for safety
        }

        crypto.pbkdf2(
          Password,
          doctor.Salt,
          310000,
          32,
          'sha256',
          async function (err, hashedPassword) {
            
            console.log(Email, Password, doctor);
            
            if(!crypto.timingSafeEqual(doctor.Password, hashedPassword))
            {
              console.log( "hashedPassword", hashedPassword);
              console.log( "doctor.Password", doctor.Password);
              console.log("hi2");
              done(null, false, { message: 'invalid credentials' });  
            }
            else{
              const token = jwt.sign(
                      sanitizeUser(doctor),
                      process.env.JWT_SECRET_KEY
                    );
              done(null,{ id: doctor.id,  token });
            }
          });
      
      } catch (err) {
        done(err);
      }
    })
);

//jwt for doctor
passport.use('doctor-jwt',
  new JwtStrategy(opts, async function(jwt_payload, done) {

    try {
      const doctor = await Doctor.findOne({id: jwt_payload.sub}) 
        
        if (doctor) {
          done(null, doctor);
        } else {
          done(null, false);
            // or you could create a new account
        }
    
    } catch (err) {
      done(err);
    }
}));

//local for patient
passport.use('patient-local',
    new LocalStrategy({ usernameField: 'Email', passwordField : 'Password' }, async function (
      Email,
      Password,
      done
    ) {
      // by default passport uses username
      console.log({ Email, Password });
      try {
        const patient = await Patient.findOne({ Email: Email });
        if (!patient) {
          console.log("hi");
          return done(null, false, { message: 'invalid credentials' }); // for safety
        }

        crypto.pbkdf2(
          Password,
          patient.Salt,
          310000,
          32,
          'sha256',
          async function (err, hashedPassword) {
            
            console.log(Email, Password, patient);
            
            if(!crypto.timingSafeEqual(patient.Password, hashedPassword))
            {
              console.log( "hashedPassword", hashedPassword);
              console.log( "patient.Password", patient.Password);
              console.log("hi2");
              done(null, false, { message: 'invalid credentials' });  
            }
            else{
              const token = jwt.sign(
                      sanitizeUser(patient),
                      process.env.JWT_SECRET_KEY
                    );
              done(null,{ id: patient.id,  token });
            }
          });
      
      } catch (err) {
        done(err);
      }
    })
);

//jwt for patient
passport.use('patient-jwt',
  new JwtStrategy(opts, async function(jwt_payload, done) {

    try {
      const patient = await Patient.findOne({id: jwt_payload.sub}) 
        
        if (patient) {
          return done(null, patient);
        } else {
          return done(null, false);
            // or you could create a new account
        }
    
    } catch (err) {
      done(err);
    }
}));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      console.log("serializeUser call : ",user);
      return cb(null, {id : user.id});
    });
});

passport.deserializeUser(function(user, cb) {
    process.nextTick(function () {
        return cb(null, user);
      });
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));