const express = require("express");
const router = express.Router();

const {createPatient,getPatient} = require('../controllers/PatientControllers');

router.route("/auth/signup").post(createPatient);

router.route("/auth/login").post(getPatient);

module.exports = router;