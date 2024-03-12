const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const Razorpay = require('razorpay');
const dotenv = require('dotenv');
dotenv.config();
connectDB();

app.use(bodyParser.json());
//console.log("hello");
const corsOptions = {
    origin: 'http://localhost:4200', // Replace with your Angular app's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/patient',require('./routes/PatientRoutes'));

app.use('/api/doctor',require('./routes/DoctorRoutes'));

app.use('/api/patient/appointment', require('./routes/PatientAppointmentRoutes'));

app.use('/api/doctor/appointment', require('./routes/DoctorAppointmentRoutes'));

app.use('/api/patient/payment', require('./routes/PaymetRoutes'));

var instance = new Razorpay({
    key_id: process.env.key_id,
    key_secret: process.env.key_secret,
});

app.use('/api/create/orderId',(req,res) => {

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

app.post("/api/payment/verify", (req, res)=> {
    console.log(req.body);
    const { razorpay_payment_id,razorpay_order_id,razorpay_signature } = req.body;
    console.log(razorpay_payment_id)
    let body=req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;

    var crypto = require("crypto");
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

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));