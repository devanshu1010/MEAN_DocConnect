import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientAuthService } from '../patientAuth.service';

@Component({
  selector: 'app-registration-patient',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponentPatient implements OnInit{
  
  email:any;
  password:any;
  confpassword:any;
  fullname:any;
  dob:any;
  age:any;
  profile_picture:any;
  phone_no:any;
  selectedBloodGroup:any = 0;
  selectedGender:any = 0;

  patient:Patient | undefined;

  genders = [
    { label: 'Select Your Gender', value: '0'},
    { label: 'Male', value: 'Male'},
    { label: 'Female', value: 'Female'},
  ];

  bloodGroups = [
    { label: 'Select Your Blood Group', value: '0' },
    { label: 'A+', value: 'A+' },
    { label: 'A-', value: 'A-' },
    { label: 'B+', value: 'B+' },
    { label: 'B-', value: 'B-' },
    { label: 'AB+', value: 'AB+' },
    { label: 'AB-', value: 'AB-' },
    { label: 'O+', value: 'O+' },
    { label: 'O-', value: 'O-' },
  ];
  
  value_border:any = "gray-400";
  
  constructor (public patientServ:PatientAuthService){}

  ngOnInit(): void{
    this.selectedGender = '0';
    this.selectedBloodGroup = '0';
  }

  
  signup(): void {

    if(this.password == this.confpassword )
    {
      console.log("Signed up");
      const patientData: Patient = {
        Email: this.email,
        Password: this.password,
        Name: this.fullname,
        DoB: this.dob,
        Age: this.age,
        Profile_picture: this.profile_picture,
        Gender: this.selectedGender,
        Phone_no: this.phone_no,
        BloodGroup: this.selectedBloodGroup,
      };
      this.email='';
      this.password='';
      this.patientServ.signupPatient(patientData).subscribe(data => this.patient = data);

      console.log("patient : ");
      console.log(this.patient);
      
    }
    else{
      this.value_border="red-500";
    }
  }
}
