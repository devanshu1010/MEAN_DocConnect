const asyncHandler = require("express-async-handler");
const Doctor = require("../models/DoctorSchema");
const Patient = require('../models/PatientSchema');  // Adjust the path accordingly
const Appointment = require('../models/AppointmentSchema');
const { sanitizeUser} = require('../Services/comman');
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config();

//@dec Create new doctor
//@route POST /api/doctor/auth/signup
//@acsess public 
const createDoctor = asyncHandler(async (req, res) => {
    try {
        console.log("The request body is : ", req.body);
        const { Email, Password } = req.body;

        if (!Email || !Password) {
            console.log("returnig ");
            res.status(400).json({ messag: "All fields are required" });
            return;
        }
        let doctor1 = await Doctor.findOne({ Email: Email });
        
        if (doctor1) {
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

            cloudinary.uploader.upload(req.body.Profile_photo, {
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
                const doctorData = new Doctor({
                    ...req.body,Password: hashedPassword, Salt:salt
                });
                console.log(doctorData)
                doctorData.Profile_photo = result.secure_url;

                console.log(doctorData.Profile_photo);
                console.log(result.secure_url);

                const doctor = await Doctor.create(doctorData);
                console.log("saved");
                /*req.login(sanitizeUser(doctor), (err) => {
                    // this also calls serializer and adds to session
                    if (err) {
                      res.status(400).json(err);
                    } else {
                      const token = jwt.sign(
                        sanitizeUser(doctor),
                        process.env.JWT_SECRET_KEY
                      );
                      res
                        .status(201)
                        .json({ id: doctor.id, token });
                    }
                  });*/
                const token = jwt.sign(
                sanitizeUser(doctor),
                process.env.JWT_SECRET_KEY
                );
                res
                    .cookie('jwt', token, { expires: new Date(Date.now() + 9000000), httpOnly: true })
                    .status(201)
                    .json({ id: doctor.id, token });
            });
          }
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//@dec get a doctor
//@route POST /api/doctor/auth/login
//@acsess public
const Doctorlogin = asyncHandler(async (req, res) => {
    
    res
        .cookie('jwt', req.user.token, { expires: new Date(Date.now() + 9000000), httpOnly: true })
        .status(201)
        .json(req.user);
    //res.json(req.user);
});

//@dec get a doctor
//@route POST /api/doctor/auth/login
//@acsess public
const checkDoctor = asyncHandler(async (req, res) => {
   
    res.json({status:'success',doctor: req.user});
});

//@dec get a doctor
//@route GET /api/doctor/:id
//@acsess public
const getDoctor = asyncHandler(async (req, res) => {
    try {
        console.log(req.params.id);

        const currentDate = new Date();
        console.log('Current Date:', currentDate);

        // Increase the date by one day
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);
        console.log('Next Day:', nextDay);
        const doctor = await Doctor.findById(req.params.id).populate({
            path: 'Appointment_id',
            populate: [
                { path: 'Patient_id' },
                { path: 'Payment_id' }
            ],
            options: {
                sort: {
                    'Date': -1  // Sort in descending order
                },
            }
        });

        // delete doctor.Password;
        // delete doctor.Salt;
        doctor.Appointment_id.sort((a, b) => {
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
        console.log(doctor);
        if (!doctor) {
            res.status(404);
            throw new Error("Doctor not found.");
        }

        res.status(200).json(doctor);

    } catch (error) {
        console.log(error);
        res.status(400).json({});
    }

});

//@dec Get all doctors
//@route GET /api/doctor
//@acsess public 
const getDoctors = asyncHandler(async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
    }
    catch (err) {
        console.log(err);
    }
});

//@dec update a doctor
//@route PUT /api/doctor/:id
//@acsess public
const updateDoctor = asyncHandler(async (req, res) => {
    const CurrDoctId = req.user.id;
    console.log(CurrDoctId)
    try {
        const doctor = await Doctor.findById(CurrDoctId.trim());
        console.log("in update doctor");
        console.log("doctor found : ")
        console.log(doctor)
        console.log("doctor found : ")

        if (!doctor) {
            res.status(404);
            throw new Error("Doctor not found.");
        }

        const updateDoctor = await Doctor.findByIdAndUpdate(
            CurrDoctId,
            req.body,
            { new: true },
        )
        console.log(updateDoctor);
        res.status(200).json(updateDoctor);

    } catch (error) {
        console.log("Doctor not found.");
        console.log(error);
    }

});

//@dec search a doctor
//@route GET /api/doctor/search
//@acsess public 
const searchDcotor = asyncHandler(async (req, res) => {
    const { query } = req.query;

    try {
        const doctor = await Doctor.find({
            $or: [
                { UserName: { $regex: query, $options: 'i' } },
                { Email: { $regex: query, $options: 'i' } },
                { Name: { $regex: query, $options: 'i' } }
            ]
        })
        res.status(200).json(doctor);
    } catch (error) {
        console.log(error);
    }
})

const updateDoctorSlot = asyncHandler(async (req, res) => {
    const { appointment_id, day, slotNo } = req.body;
    const CurrDoctId = req.params.id; //req.user.id;
    console.log(CurrDoctId)

    try {
        const doctor = await Doctor.findById(CurrDoctId.trim());

        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        console.log(doctor);

        delete doctor.Slots[day][slotNo]._id

        doctor.Slots[day][slotNo].Booked = true;
        doctor.Slots[day][slotNo].AppointmentId = appointment_id;

        console.log(doctor);

        await doctor.save();

        res.status(200).json({ mes: "Done" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mes: "Something wrong" })
    }
})

module.exports = { Doctorlogin, getDoctor, createDoctor, updateDoctor, getDoctors, updateDoctorSlot , checkDoctor };