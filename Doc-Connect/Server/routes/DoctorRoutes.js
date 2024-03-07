const express = require("express");
const router = express.Router();

const {Doctorlogin,getDoctor,createDoctor,updateDoctor,getDoctors, updateDoctorSlot} = require('../controllers/DoctorControllers');

router.route("/").get(getDoctors);

router.route("/auth/signup").post(createDoctor);

router.route("/auth/login").post(Doctorlogin);

router.route("/:id").get(getDoctor);

router.route("/:id").put(updateDoctor);

router.route('/:id/bookSlot').put(updateDoctorSlot);

module.exports = router;