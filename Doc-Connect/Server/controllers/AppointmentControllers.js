const asyncHandler = require("express-async-handler");
const Appointment = require("../models/AppointmentSchema");
const Patient = require("../models/PatientSchema");
const Doctor = require("../models/DoctorSchema");
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

//@dec Book Appointment
//@route POST api/patient/appoitment/bookAppointment
//@access public
const bookAppointment = asyncHandler(async (req, res) => {
    try {
        //console.log(req.body);

        if(req.user.id != req.body.Patient_id)
        {
            res.status(401);
            throw new Error("UNAUTHORIZED ACCESS");
        }

        const appointment = await Appointment.create(req.body);
        console.log('saved');

        if (!appointment)
            res.send({ res: "Something went wrong. Failed to book Appointment." })

        let patient = await Patient.findByIdAndUpdate(req.body.Patient_id,
            {
                $push: { Appointment_id: appointment._id },
            },
            { new: true }
        );

        let doctor = await Doctor.findByIdAndUpdate(req.body.Doctor_id,
            {
                $push: { Appointment_id: appointment._id},
            },
            { new: true }
        );

        res.send(appointment);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//@dec Cancle Appointment
//@route PUT api/doctor/appoitment/cancelAppointment
//@access private
const cancelAppointment = asyncHandler(async(req, res) => {
    try {
        const { appointmentId } = req.body;
        
        const updateAppointment = await Appointment.findById(appointmentId);
        //console.log(updateAppointment);

        if (!updateAppointment) {
            res.status(404);
            throw new Error("Appointment not found.");
        }

        if(updateAppointment.Doctor_id != req.user.id)
        {
            res.status(401);
            throw new Error("UNAUTHORIZED ACCESS");
        }

        //res.status(200).json({ appointment : updateAppointment });
        updateAppointment.Status = "Canceled"

        const day = updateAppointment.Day;
        //console.log(day);
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const index = days.indexOf(day);

        const doctor = await Doctor.findById(updateAppointment.Doctor_id);

        const slotIndex = doctor.Slots[index].findIndex(obj => obj.Time === updateAppointment.Starting_time);

        console.log(slotIndex);

        if(doctor.Slots[index][slotIndex].Booked === true)
            doctor.Slots[index][slotIndex].Booked = false

        doctor.Slots[index][slotIndex].Canceled = true
        doctor.Slots[index][slotIndex].AppointmentId = null

        const patient = await Patient.findById(updateAppointment.Patient_id);
        console.log(patient.Email);

        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        let mailOptions = {
            from: `"DocConnect" <${process.env.EMAIL}>`, // sender address
            to: patient.Email, // list of receivers
            subject: "Cancel Appointment", // Subject line
            html: `
                    <html>
                    <head>
                        <title>Cancel Appointment</title>
                        <!-- Include Tailwind CSS from CDN -->
                        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                    </head>
                    <body class="bg-gray-400">
                        <div class="container mx-auto py-8">
                            <!-- Logo -->
                            <div class="text-center mb-8">
                                <img src="https://example.com/path/to/your/logo.png" alt="Company Logo" class="w-32 h-32 mx-auto mix-blend-color-burn">
                            </div>
                            <!-- Email Content -->
                            <h1 class="text-3xl text-center font-bold mb-4">Cancel Appointment</h1>
                            <p class="mb-4">Dear ${patient.Name},</p>
                            <p class="mb-2">We regret to inform you that your appointment on ${updateAppointment.Date} has been canceled by Dr. ${doctor.Name}.</p>
                            <p class="mb-6">We apologize for any inconvenience caused. We will refund you as soon as possible.</p>
                            <p class="mb-">Sincerely,</p>
                            <p class="mb-2">DocConnect Team</p>
                        </div>
                    </body>
                    </html>
            
                `
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return
            } else {
                console.log("Mail send sucessfully.");
            }
        });

        await updateAppointment.save();
        await doctor.save();

        //console.log(index);
        res.status(200).json({ mes : "Appointment cancel successfully." });

    } catch(err) {
        res.status(500).json({mes : "Internal server error."})
    }
});

module.exports = { bookAppointment, cancelAppointment };