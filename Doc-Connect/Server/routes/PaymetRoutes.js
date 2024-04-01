const express = require("express");
const router = express.Router();
const { isAuthPatient} = require('../Services/comman');

const {createPayment, createOrder ,verifyPayment} = require('../controllers/PaymetControllers')

router.route("/createPayment").post( isAuthPatient(), createPayment);

router.route("/createOrderId").post( isAuthPatient(), createOrder);

router.route("/verify").post( isAuthPatient(), verifyPayment);

module.exports = router;