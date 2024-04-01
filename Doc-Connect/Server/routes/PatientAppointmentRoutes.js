const express = require("express");
const router = express.Router();
const {  isAuthPatient} = require('../Services/comman');

const {bookAppointment} = require('../controllers/AppointmentControllers');

router.route("/bookAppointment").post( isAuthPatient() ,bookAppointment);

module.exports = router;