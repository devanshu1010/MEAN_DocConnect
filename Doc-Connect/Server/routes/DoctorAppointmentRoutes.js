const express = require("express");
const router = express.Router();
const { isAuthDoctor} = require('../Services/comman');

const { cancelAppointment, doneAppointment } = require('../controllers/AppointmentControllers')

router.route("/cancelAppointment").put( isAuthDoctor(), cancelAppointment);

router.route("/doneAppointment").put(isAuthDoctor(), doneAppointment);

module.exports = router;