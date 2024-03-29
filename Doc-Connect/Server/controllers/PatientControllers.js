const asyncHandler = require("express-async-handler");
const Patient = require("../models/PatientSchema");
const cloudinary = require('cloudinary').v2;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const {sanitizeUser} = require('../Services/comman');
const dotenv = require('dotenv');
dotenv.config();
//const upload = multer({ dest: 'uploads/' });

//@dec Create new patient
//@route POST /api/patient/auth/signup
//@acsess public 
const createPatient = asyncHandler(async (req, res) => {
    try {
        //console.log("The request body is : ", req.body);
        const { Email, Password } = req.body;

        if (!Email || !Password) {

            console.log("returnig ");
            res.status(400).json({ messag: "All fields are required" });
            return;
        }

        let patient1 = await Patient.findOne({ Email: Email });
        
        if (patient1) {
            console.log("returnig ");
            res.status(400).json({ messag: "Email is not available." });
            return;
        }

        const salt = crypto.randomBytes(16);
        crypto.pbkdf2(
          req.body.Password,
          salt,
          310000,
          32,
          'sha256',
          async function (err, hashedPassword) {
            console.log( "hashedPassword", hashedPassword);
            
            cloudinary.config({
                cloud_name: process.env.CLOUD_NAME,
                api_key: process.env.CLOUD_API_KEY,
                api_secret: process.env.CLOUD_API_SECRET
            });

            // Upload image to Cloudinary
            cloudinary.uploader.upload(req.body.Profile_picture, {
                public_id: 'profileImage of ' + req.body.Name
            }, async (error, result) => {

                if (error) {
                    console.error('Error uploading image to Cloudinary:', error);
                    return res.status(500).json({ message: 'Error uploading image to Cloudinary' });
                }

                if (!result || !result.secure_url) {
                    console.error('Invalid Cloudinary response:', result);
                    return res.status(500).json({ message: 'Invalid Cloudinary response' });
                }

                // Save user with Cloudinary URL
                const patientData = {
                    ...req.body,Password: hashedPassword, Salt:salt
                };

                patientData.Profile_picture = result.secure_url;

                console.log(patientData.Profile_picture);
                console.log(result.secure_url);

                const patient = await Patient.create(patientData);
                console.log("Patient created successfully");

                const token = jwt.sign(
                    sanitizeUser(patient),
                    process.env.JWT_SECRET_KEY
                    );
                res.status(201).json({ id: patient.id, token });
                // res.status(200).json(patient);
            });
          }
        );

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//@dec get a patient
//@route POST /api/patient/auth/login
//@acsess public
const Patientlogin = asyncHandler(async (req, res) => {
    
    res.json(req.user);
});

//@dec get a doctor
//@route POST /api/doctor/auth/login
//@acsess public
const checkPatient = asyncHandler(async (req, res) => {
   
    res.json({status:'success',patient: req.user});
});

//@dec get a doctor
//@route GET /api/patient/
//@acsess public
const getPatient = asyncHandler(async (req, res) => {
    try {
        //console.log(req.params.id);
        const patientId = req.user.id;

        const currentDate = new Date();
        console.log('Current Date:', currentDate);

        // Increase the date by one day
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);
        console.log('Next Day:', nextDay);

        const patient = await Patient.findById(patientId).populate({
            path: 'Appointment_id',
            populate: [
                { path: 'Doctor_id' },
                { path: 'Payment_id' }
            ],
            options: {
                sort: {
                    'Date': -1  // Sort in descending order
                },
            }
        });

        patient.Appointment_id.sort((a, b) => {
            const dateA = new Date(a.Date);
            const dateB = new Date(b.Date);

            if (dateA.toDateString() === nextDay.toDateString()) {
                return -1; // Move appointment A to the beginning
            } else if (dateB.toDateString() === nextDay.toDateString()) {
                return 1; // Move appointment B to the beginning
            } else {
                // Continue with regular sorting based on date
                return dateB - dateA;
            }
        });

        console.log(currentDate)

        //const patient = await Patient.findById(req.params.id);//.populate('Appointment_id').populate('Review_id');
        console.log(patient);
        if (!patient) {
            res.status(404);
            throw new Error("Patient not found.");
        }

        console.log(patient);
        res.status(200).json(patient);

    } catch (error) {
        console.log(error);
        res.status(400).json({});
    }

});

//@dec update a patient
//@route PUT /api/patient/
//@acsess public
const updatePatient = asyncHandler(async (req, res) => {
    const CurrPatientId = req.user.id;
    console.log(CurrPatientId)
    try {
        const patient = await Patient.findById(CurrPatientId.trim());
        console.log("in update patient");
        console.log("patient found : ")
        console.log(patient)

        if (!patient) {
            res.status(404);
            throw new Error("Patient not found.");
        }

        const updatePatient = await Patient.findByIdAndUpdate(
            CurrPatientId,
            req.body,
            { new: true },
        )
        console.log(updatePatient);
        res.status(200).json(updatePatient);

    } catch (error) {
        console.log("pateint not found.");
        console.log(error);
    }

});

module.exports = { createPatient, getPatient, Patientlogin, updatePatient, checkPatient };