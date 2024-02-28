import { Time } from "@angular/common";

export interface Slot {
    Time: String;
    Booked: boolean;
    Canceled: boolean;
    Appointment_id?: string; // Assuming Appointment_id is optional
}

export interface Doctor{
    // _id: string;
    Email:string;
    Name:string;
    Password:string;
    DoB:any;
    Age:any;
    Gender:string;
    Profile_photo:any;
    Phone_no:any;
    Counselling_fee:number;
    Bio:any;
    About:any;
    Category:string;
    Specialist:string;
    Experiance:any;
    Cirtificate:any;
    Average_rating:number;
    Total_rating:number;
    Total_review:number;
    Starting_time_first:String[];
    Ending_time_first:String[];
    Starting_time_second:String[];
    Ending_time_second:String[];
    Slot_length:number;
    Slots: Slot[][];
    Appointment_id:any[];
    Review_id:any[];
}