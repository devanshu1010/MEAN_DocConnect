const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
    {
        Doctor_id : {
            type : [mongoose.Schema.Types.ObjectId],
            ref : "Doctor",
            required : true
        },
        Patient_id : {
            type : [mongoose.Schema.Types.ObjectId],
            ref : "Patient",
            required : true
        },
        Payable_amount : {
            type : Number,
            required : true
        },
        Status : {
            type : String,
            required : true,
            default : "Paid"
        }
    },
    {
        timestamps : true,
    }
);

module.exports = mongoose.model("Payment",PaymentSchema);