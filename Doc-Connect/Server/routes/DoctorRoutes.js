const express = require("express");
const router = express.Router();

const {Doctorlogin,getDoctor,createDoctor,updateDoctor} = require('../controllers/DoctorControllers');

router.route("/auth/signup").post(createDoctor);

router.route("/auth/login").post(Doctorlogin);

router.route("/:id").get(getDoctor);

router.route("/:id").put(updateDoctor);

module.exports = router;