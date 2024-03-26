const express = require("express");
const router = express.Router();
const { cancleAppointment } = require('../controllers/AppointmentControllers')

router.route("/cancleAppointment").put(cancleAppointment);

module.exports = router;