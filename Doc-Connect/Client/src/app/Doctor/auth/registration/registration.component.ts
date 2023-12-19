import { Component, OnInit } from '@angular/core';

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

  selectedGender:any = 0;
  
  ngOnInit(): void{
    this.selectedGender = '0';
  }
}
