const express = require("express");
const router = express.Router();

const {createPatient,getPatient,Patientlogin} = require('../controllers/PatientControllers');

router.route("/auth/signup").post(createPatient);

router.route("/auth/login").post(Patientlogin);

router.route("/:id").get(getPatient);

module.exports = router;