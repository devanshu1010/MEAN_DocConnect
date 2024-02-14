const express = require("express");
const router = express.Router();

const {createPayment} = require('../controllers/PaymetControllers')

router.route("/createPayment").post(createPayment);

module.exports = router;