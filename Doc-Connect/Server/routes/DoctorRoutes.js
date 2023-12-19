const express = require("express");
const router = express.Router();

const {getDoctor,createDoctor} = require('../controllers/DoctorControllers');

router.route("/auth/signup").post(createDoctor);

router.route("/auth/login").post(getDoctor);

module.exports = router;