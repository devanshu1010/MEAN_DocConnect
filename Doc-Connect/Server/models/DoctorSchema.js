const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema({
    Time: {
        type: String,
        required: true
    },
    Booked: {
        type: Boolean,
        required: true,
        default: false
    },
    Canceled: {
        type: Boolean,
        required: true,
        default: false
    },
    AppointmentId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment"
    }
});

const DoctorSchema = new mongoose.Schema({
        Email : {
            type : String,
            required : true,
            unique : true 
        },
        Password : {
            type : Buffer,
            required : true,
        },
        Name : {
            type : String,
            required : true
        },
        Age : {
            type : Number,
            required : true,
        },
        DoB: {
            type: Date,
            required: [true, " Please add your birthdate. "]
        },
        Profile_photo: {
            type: String,
        },
        Gender: {
            type: String,
            required: [true, " Please add mention your Gender. "]
        },
        Phone_no : {
            type : Number,
            required : true
        },
        Counselling_fee : {
            type : Number,
            required : true
        },
        Category : {
            type : String,
            required : true
        },
        Specialist : {
            type : String,
            required : true
        },
        Experiance : {
            type : Number,
            required : true
        },
        Bio: {
            type: String
        },
        About : {
            type: String
        },
        Average_rating : {
            type : Number,
            default : 0
        },
        Total_rating : {
            type : Number,
            default : 0
        },
        Total_review :{ 
            type : Number,
            default : 0
        },
        Starting_time_first : {
            type : Array
        },
        Ending_time_first : {
            type : Array
        },
        Starting_time_second : {
            type : Array
        },
        Ending_time_second : {
            type : Array
        },
        Slot_length : {
            type : Number,
            default : 30
        },
        Slots : [
            [SlotSchema] //There is 7 * no.of slot length array
        ],
        Appointment_id : {
            type : [mongoose.Schema.Types.ObjectId],
            ref : "Appointment",
        },
        Review_id : {
            type : [mongoose.Schema.Types.ObjectId],
            ref : "Review",
        },
        Cirtificate : {
            type : String
        },
        Salt: Buffer
    },
    {
        timestamps : true,
    }
);

module.exports = mongoose.model("Doctor",DoctorSchema);