const asyncHandler = require("express-async-handler");
const Patient = require("../models/PatientSchema");
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config();
//const upload = multer({ dest: 'uploads/' });

//@dec Create new patient
//@route POST /api/patient/auth/signup
//@acsess public 
const createPatient = asyncHandler(async (req, res) => {
    try {
        console.log("The request body is : ", req.body);
        const { Email, Password } = req.body;

        if (!Email || !Password) {

            console.log("returnig ");
            res.status(400).json({ messag: "All fields are required" });
            return;
        }

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
                ...req.body,
            };

            patientData.Profile_picture = result.secure_url;

            console.log(patientData.Profile_picture);
            console.log(result.secure_url);

            const patient = await Patient.create(patientData);
            console.log("Patient created successfully");
            res.status(200).json(patient);
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//@dec get a patient
//@route POST /api/patient/auth/login
//@acsess public
const Patientlogin = asyncHandler(async (req, res) => {
    try {
        console.log("The request body is : ", req.body);
        console.log(req);
        const { Email, Password } = req.body;

        const patient = await Patient.findOne({ Email: Email, Password: Password });

        if (!patient) {
            res.status(404);
            throw new Error("patient not found.");
        } else {
            res.status(200).json(patient);
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({});
    }

});

//@dec get a doctor
//@route GET /api/patient/:id
//@acsess public
const getPatient = asyncHandler(async (req, res) => {
    try {
        console.log(req.params.id);

        const currentDate = new Date();
        console.log('Current Date:', currentDate);

        // Increase the date by one day
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);
        console.log('Next Day:', nextDay);

        const patient = await Patient.findById(req.params.id).populate({
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

module.exports = { createPatient, getPatient, Patientlogin };