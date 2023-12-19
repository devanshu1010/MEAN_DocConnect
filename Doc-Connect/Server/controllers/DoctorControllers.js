const asyncHandler = require("express-async-handler");
const Doctor = require("../models/DoctorSchema");

//@dec Create new patient
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
        let doctor1 =  await Doctor.findOne({Email:Email});
        if (!doctor1 )
        {
            console.log("returnig ");
            res.status(400).json({ messag: "Email is not available." });
            return;
        }

        const doctor = await Doctor.create(req.body);
        console.log("saved");
        res.status(201).json(doctor);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//@dec get a patient
//@route POST /api/patient/auth/login
//@acsess public
const getDoctor = asyncHandler(async (req, res) => {
    try {
        console.log("The request body is : ", req.body);
        console.log(req);   
        const { Email, Password } = req.body;

        const doctor = await Doctor.findOne({Email:Email,Password:Password});

        if (!doctor) {
            res.status(404);
            throw new Error("patient not found.");
        }else{
            res.status(200).json(doctor);
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({});
    }

});

module.exports = {getDoctor,createDoctor};