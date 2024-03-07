const express = require("express");
const router = express.Router();
const {bookAppointment} = require('../controllers/AppointmentControllers');

router.route("/bookAppointment").post(bookAppointment);

module.exports = router;