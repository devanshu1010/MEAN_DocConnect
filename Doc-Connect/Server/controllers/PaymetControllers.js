const asyncHandler = require("express-async-handler");
const Payment = require("../models/PaymentSchema");
const Razorpay = require('razorpay');
const dotenv = require('dotenv').config();
const crypto = require("crypto");

const instance = new Razorpay({
    key_id: process.env.key_id,
    key_secret: process.env.key_secret,
});

//@dec Book Appointment
//@route POST api/patient/paymentcreatePayment
//@access public
const createPayment = asyncHandler(async (req, res) => {
    try{
        console.log("Create Payment Body : ", req.body);

        const payment = await Payment.create(req.body);
        console.log('saved');

        res.send({paymentId : payment._id});
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


//@dec Create Order for payment
//@route POST api/patient/payment/createOrderId
//@access public
const createOrder = asyncHandler(async(req, res) => {
    console.log('create orderId request',req.body);

    var options = {
        amount: req.body.amount,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_1"
    };

    instance.orders.create(options, function(err, order) {
        console.log(order);

        res.send({orderId : order.id});
    });
});

//@dec Verfiy Payment
//@route POST api/patient/payment/verify
//@access public
const verifyPayment = asyncHandler( async(req, res) =>{

    console.log(req.body);
    const { razorpay_payment_id,razorpay_order_id,razorpay_signature } = req.body;
    console.log(razorpay_payment_id)
    let body=req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;

    
    var expectedSignature = crypto.createHmac('SHA256', process.env.key_secret)
                                            .update(body.toString())
                                            .digest('hex');

    console.log("sig recived ", req.body.razorpay_signature);
    console.log("sig genrated ", expectedSignature);

    if (expectedSignature === req.body.razorpay_signature) {
        response = {"signatureIsValid": true};
    } else {
        response = {"signatureIsValid": false};
    }
    res.send(response);

});

module.exports = {createPayment,createOrder, verifyPayment}