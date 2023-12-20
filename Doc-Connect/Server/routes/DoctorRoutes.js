const express = require("express");
const router = express.Router();

const {Doctorlogin,getDoctor,createDoctor} = require('../controllers/DoctorControllers');

router.route("/auth/signup").post(createDoctor);

router.route("/auth/login").post(Doctorlogin);

module.exports = router;