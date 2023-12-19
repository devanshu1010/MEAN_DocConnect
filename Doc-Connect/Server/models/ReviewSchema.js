const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
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
        Review_text : {
            type : String,
            required : true
        },
        Ratings : {
            type : Number,
            required : true,
            min : 0,
            max : 5,
            default : 0
        }
    },
    {
        timestamps : true,
    }
);

module.exports = mongoose.model("Review",ReviewSchema);