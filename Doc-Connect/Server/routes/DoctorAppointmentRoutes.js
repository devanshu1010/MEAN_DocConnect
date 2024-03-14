const express = require("express");
const router = express.Router();
const { cancleAppointment } = require('../controllers/AppointmentControllers')

router.route("/cancleAppointment").post(cancleAppointment);

module.exports = router;