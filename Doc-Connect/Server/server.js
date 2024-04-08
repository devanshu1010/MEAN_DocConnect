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

app.use(express.static("./dist/client"));

app.use(bodyParser.json({ limit: '10mb' }));
//console.log("hello");
const corsOptions = {
    origin: 'https://mean-docconnet-3.onrender.com', // Replace with your Angular app's URL http://localhost:4200
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
      
      console.log("doctor - local");
      console.log("done",done);
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
              done(null,{ _id: doctor._id,  token });
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
      console.log("doctor - jwt");
      console.log("jwt_payload",jwt_payload);
      console.log("done",done);
      console.log("jwt_payload.id",jwt_payload._id);
      const doctor = await Doctor.findById(jwt_payload._id) //findOne({id: jwt_payload.sub}) 
        console.log("doctor : ", doctor);  
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
      
      console.log("patinet - local");
      console.log("done",done);
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
              done(null,{ _id: patient._id,  token });
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
      
      console.log("patient - jwt");
      console.log("jwt_payload",jwt_payload);
      console.log("done",done);
      console.log("jwt_payload.id",jwt_payload._id);
      const patient = await Patient.findById(jwt_payload._id); //.findOne({id: jwt_payload.sub}) 
      console.log("patient : ", patient);  
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
      return cb(null, {_id : user._id});
    });
});

passport.deserializeUser(function(user, cb) {
    process.nextTick(function () {
        return cb(null, user);
      });
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));