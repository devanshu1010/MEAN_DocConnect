import { Component, OnInit } from '@angular/core';
import { Doctor, Slot } from 'src/app/models/doctor';
import { DoctorAuthService } from '../doctor-auth.service';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';
import { Time } from "@angular/common";
import { environment } from 'src/environments/environment.prod';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

enum Tab {
  Profile = 'profile',
  Email = 'email',
  Verify = 'verify',
  Professional = 'professional'
}

@Component({
  selector: 'app-registration-doctor',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponentDoctor implements OnInit{
  genders = [
    { label: 'Select Your Gender', value: '0'},
    { label: 'Male', value: 'Male'},
    { label: 'Female', value: 'Female'},
  ];

  doctorCategories = [
    { label: 'Select Category', value: '0' },
    { label: 'xyz', value: 'Cardiologist' },
    { label: 'Dermatologist', value: 'Dermatologist' },
    { label: 'Orthopedic Surgeon', value: 'Orthopedic Surgeon' },
    { label: 'Pediatrician', value: 'Pediatrician' },
    { label: 'Pediatrician', value: 'Pediatrician' },
    { label: 'Pediatrician', value: 'Pediatrician' },
    { label: 'Pediatrician', value: 'Pediatrician' },
    // Add more categories as needed
  ];

  doctorSpeciality = [
    { label: 'Select Specialist', value: '0' },
    { label: 'xyz', value: 'Cardiologist' },
    { label: 'Dermatologist', value: 'Dermatologist' },
    { label: 'Orthopedic Surgeon', value: 'Orthopedic Surgeon' },
    { label: 'Pediatrician', value: 'Pediatrician' },
    { label: 'Pediatrician', value: 'Pediatrician' },
    { label: 'Pediatrician', value: 'Pediatrician' },
    { label: 'Pediatrician', value: 'Pediatrician' },
  ];

  slotTiming = [
    { label : '15 minute', value : 15 },
    { label : '30 minute', value : 30 },
    { label : '45 minute', value : 45 },
    { label : '60 minute', value : 60 },
  ]

  email:string = '';
  name:string = '';
  password:string = '';
  conpassword:string = '';
  dob:any;
  age:any;
  selectedGender:string = '';
  profilepic:any = '../../../../assets/profile.jpeg';
  phnumber:any;
  bio:any;
  about:any;
  selectedCategory:string = '';
  selectedSpeciality:string = '';
  experience:any;
  selectedSlotlen:number = 0;
  certificate:any;
  S_time_first: String[] = ['', '', '', '', '', '', ''];
  E_time_first: String[] = ['', '', '', '', '', '', ''];
  S_time_second: String[] = ['', '', '', '', '', '', ''];
  E_time_second: String[] = ['', '', '', '', '', '', ''];
  Slots = [[], [], [], [], [], [], []];
  activeTab: Tab = Tab.Email;
  entered_otp: any;
  actual_otp:string = '012934';
  message:string = '';
  varifyEmail: boolean = false;
  
  constructor (public doctorAuthServ:DoctorAuthService,private router: Router,private navbarService: NavbarService){}
  
  doctor:Doctor | undefined;

  genOTP() {
    this.actual_otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(this.actual_otp);
    console.log("Inside genOTP");

    emailjs.send(environment.SERVICE_ID, environment.TEMPLATE_ID,{
      name: this.name,
      otp: this.actual_otp,
      to_email: this.email,
    }, environment.USER_ID)
    .then((response:any) => {
      console.log('Email sent successfully!', response);
    })
    .catch((error:any) => {
      console.error('Email could not be sent:', error);
    });
  }

  varify_email() {
    console.log(this.actual_otp);
    console.log(this.entered_otp);
    if(this.actual_otp === this.entered_otp)
    {
      this.varifyEmail = true;
      this.message = '';
      this.next_profile();
    }
    else{
      this.message = "OTP is incorrect !!!";
    }
  }

  autoVerify(event: any) {
    const enteredOTP = event.target.value;
    this.entered_otp = enteredOTP;
    if (enteredOTP.length === 6) {
        this.varify_email(); // Automatically verify OTP when 6 digits are entered
    }
  }

  async loadFile(event: any) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilepic = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  getshow(tab: string)
  {
    return tab === this.activeTab ? 1 : 0;
  }

  view_profile(): void {
    this.activeTab = Tab.Profile;
  }

  // Change active tab to Appointments
  view_email(): void {
    this.activeTab = Tab.Email;
    
    //console.log('activeTab:', this.activeTab);
  }

  view_verify(): void {
    this.activeTab = Tab.Verify;
    
    //console.log('activeTab:', this.activeTab);
  }

  view_professional():void {
    this.activeTab = Tab.Professional;
  }

  next_verify(){
    this.view_verify();
  }

  next_profile(){
    this.view_profile();
  }

  next_professional(){
    this.view_professional();
  }

  back_to_profile(){
    this.view_profile();
  }

  back_to_email(){
    this.view_email();
  }

  back_to_verify(){
    this.view_verify();
  }

  public signUp() : void{
    if(this.password == this.conpassword )
    {
      console.log("Signed up");
      const doctorData: Doctor = {
        // _id : '',
        Email: this.email,
        Name: this.name,
        Password: this.password,
        DoB: this.dob,
        Age: this.age,
        Profile_photo: this.profilepic,
        Gender: this.selectedGender,
        Phone_no: this.phnumber,
        Counselling_fee: 0,
        Bio: this.bio,
        About: this.about,
        Category: this.selectedCategory, 
        Specialist: this.selectedSpeciality,
        Experiance: this.experience,
        Cirtificate: this.certificate,
        Average_rating: 0,
        Total_rating: 0,
        Total_review: 0,
        Starting_time_first: this.S_time_first,
        Ending_time_first: this.E_time_first,
        Starting_time_second: this.S_time_second,
        Ending_time_second: this.E_time_second,
        Slot_length : this.selectedSlotlen,
        Slots: this.Slots,
        Appointment_id:[],
        Review_id: []
      };
      this.doctorAuthServ.signupDoctor(doctorData).subscribe(data => this.doctor = data);

      this.email='';
      this.password='';

      console.log("patient : ");
      console.log(this.doctor);
      
      this.router.navigate(['/signinDoctor']);
    }
    else{
      console.log("Something Wrong.");
    }
  }
  
  ngOnInit(): void{
    this.selectedGender = '0';
    this.selectedCategory = '0';
    this.selectedSpeciality = '0';
    this.selectedSlotlen = 0;
    this.navbarService.setHideNavbar(true);
  }
}
