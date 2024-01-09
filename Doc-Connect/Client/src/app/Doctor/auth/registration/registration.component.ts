import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { DoctorAuthService } from '../doctor-auth.service';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';

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
    { label : '30 minute', value : 30 },
    { label : '60 minute', value : 60 }
  ]

  email:string = '';
  name:string = '';
  password:string = '';
  conpassword:string = '';
  dob:any;
  age:any;
  selectedGender:string = '';
  profilepic:any;
  phnumber:any;
  bio:any;
  about:any;
  selectedCategory:string = '';
  selectedSpeciality:string = '';
  experience:any;
  selectedSlotlen:number = 0;
  certificate:any;
  
  constructor (public doctorAuthServ:DoctorAuthService,private router: Router,private navbarService: NavbarService){}
  
  doctor:Doctor | undefined;

  public signUp() : void{
    if(this.password == this.conpassword )
    {
      console.log("Signed up");
      const doctorData: Doctor = {
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
        Starting_time_first: [0, 0, 0, 0, 0, 0, 0],
        Ending_time_first: [0, 0, 0, 0, 0, 0, 0],
        Starting_time_second: [0, 0, 0, 0, 0, 0, 0],
        Ending_time_second: [0, 0, 0, 0, 0, 0, 0],
        Slot_length: this.selectedSlotlen,
        Slots: [[]],
        Appointment_id:[],
        Review_id: []
      };
      this.doctorAuthServ.signupDoctor(doctorData).subscribe(data => this.doctor = data);

      this.email='';
      this.password='';

      console.log("patient : ");
      console.log(this.doctor);
      
      this.router.navigate(['/signinpatient']);
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
