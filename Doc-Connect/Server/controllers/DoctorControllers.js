const asyncHandler = require("express-async-handler");
const Doctor = require("../models/DoctorSchema");

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
        let doctor1 =  await Doctor.findOne({Email:Email});
        if (doctor1)
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

//@dec get a doctor
//@route POST /api/doctor/auth/login
//@acsess public
const Doctorlogin = asyncHandler(async (req, res) => {
    try {
        console.log("The request body is : ", req.body);
        console.log(req);   
        const { Email, Password } = req.body;

        const doctor = await Doctor.findOne({Email:Email,Password:Password});

        if (!doctor) {
            res.status(404);
            throw new Error("doctor not found.");
        }else{
            res.status(200).json(doctor);
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({});
    }

});

//@dec get a doctor
//@route GET /api/doctor/:id
//@acsess public
const getDoctor = asyncHandler(async (req, res) => {
    try {
        console.log(req.params.id);
        const doctor = await Doctor.findById(req.params.id);//.populate('Appointment_id').populate('Review_id');
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
    catch(err){
        console.log(err);
    }
});

//@dec update a doctor
//@route PUT /api/doctor/:id
//@acsess public
const updateDoctor = asyncHandler(async (req, res) => {
    const CurrDoctId =  req.params.id; //req.user.id;
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

module.exports = {Doctorlogin,getDoctor,createDoctor,updateDoctor,getDoctors};