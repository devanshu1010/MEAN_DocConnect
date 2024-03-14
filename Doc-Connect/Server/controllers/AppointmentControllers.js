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
//@route POST api/doctor/appoitment/cancleAppointment
//@access private
const cancleAppointment = asyncHandler(async(req, res) => {
    try {
        const { appointmentId } = req.body;
        
        const updateAppointment = await Appointment.findById(appointmentId);
        //console.log(updateAppointment);

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
            subject: "Cancle Appointment", // Subject line
            text : "Cancle appointment due to some reason."
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

module.exports = { bookAppointment, cancleAppointment };