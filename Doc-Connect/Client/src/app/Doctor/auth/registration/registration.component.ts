import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';

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
    { label : '30 minute', value : '30' },
    { label : '60 minute', value : '60' }
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
  selectedSlotlen:string = '';
  certificate:any;
  
  doctor:Doctor | undefined;
  
  ngOnInit(): void{
    this.selectedGender = '0';
    this.selectedCategory = '0';
    this.selectedSpeciality = '0';
    this.selectedSlotlen = '0';
  }
}
