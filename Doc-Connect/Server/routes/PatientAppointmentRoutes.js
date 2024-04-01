const express = require("express");
const router = express.Router();
const {  isAuthPatient} = require('../Services/comman');

const {bookAppointment, cancelAppointmentPatient} = require('../controllers/AppointmentControllers');

router.route("/bookAppointment").post( isAuthPatient() ,bookAppointment);

router.route('/cancleappointment').put( isAuthPatient() ,cancelAppointmentPatient);

module.exports = router;