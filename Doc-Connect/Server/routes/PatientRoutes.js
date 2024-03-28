const express = require("express");
const router = express.Router();

const {createPatient,getPatient,Patientlogin,updatePatient} = require('../controllers/PatientControllers');

router.route("/auth/signup").post(createPatient);

router.route("/auth/login").post(Patientlogin);

router.route("/:id").get(getPatient);

router.route("/:id").put(updatePatient);

module.exports = router;