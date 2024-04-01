const express = require("express");
const router = express.Router();
const passport = require('passport');
const { isAuthDoctor, isAuthPatient} = require('../Services/comman');

const {Doctorlogin,getDoctor,createDoctor,updateDoctor,getDoctors, updateDoctorSlot , checkDoctor} = require('../controllers/DoctorControllers');

router.route("/").get(getDoctors);

router.route("/auth/signup").post(createDoctor);

router.route("/auth/login").post( passport.authenticate('doctor-local'), Doctorlogin);

router.route("/auth/check").get(passport.authenticate('doctor-jwt',{ session: false }), checkDoctor );

router.route("/:id").get(getDoctor);

router.route("/").put(isAuthDoctor(),updateDoctor);

router.route('/:id/bookSlot').put(isAuthPatient(),updateDoctorSlot);

module.exports = router;