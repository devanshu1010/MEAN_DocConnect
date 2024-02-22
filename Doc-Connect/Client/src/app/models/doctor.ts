interface Slot {
    Time: Date;
    Booked: boolean;
    Canceled: boolean;
    Appointment_id?: string; // Assuming Appointment_id is optional
}

export interface Doctor{
    _id: string;
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
    Starting_time_first:number[];
    Ending_time_first:number[];
    Starting_time_second:number[];
    Ending_time_second:number[];
    Slot_length:number;
    Slots: { dayOfWeek: number; slots: Slot[] }[];
    Appointment_id:any[];
    Review_id:any[];
}