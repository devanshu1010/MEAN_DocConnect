const express = require("express");
const router = express.Router();
const { isAuthDoctor} = require('../Services/comman');

const { cancelAppointment } = require('../controllers/AppointmentControllers')

router.route("/cancelAppointment").put( isAuthDoctor(), cancelAppointment);

module.exports = router;