const express = require("express");
const router = express.Router();
const passport = require('passport');
const { isAuthDoctor, isAuthPatient} = require('../Services/comman');

const {createPatient,getPatient,Patientlogin,updatePatient,checkPatient} = require('../controllers/PatientControllers');

router.route("/auth/signup").post(createPatient);

router.route("/auth/login").post(passport.authenticate('patient-local'),Patientlogin);

router.route("/auth/check").get(passport.authenticate('patient-jwt',{ session: false }), checkPatient );

router.route("/").get(isAuthPatient(),getPatient);

router.route("/").put(isAuthPatient(),updatePatient);

module.exports = router;