const asyncHandler = require("express-async-handler");
const Payment = require("../models/PaymentSchema");

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

module.exports = {createPayment}