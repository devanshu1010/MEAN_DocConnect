import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientAuthService } from '../patientAuth.service';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';
import { environment } from 'environment.prod';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

enum Tab {
  Profile = 'profile',
  Email = 'email',
  Verify = 'verify',
}

@Component({
  selector: 'app-registration-patient',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponentPatient implements OnInit {

  otpLength: number = 6;
  email: any;
  password: any;
  confpassword: any;
  fullname: any;
  dob: any;
  age: any;
  phone_no: any;
  selectedBloodGroup: any = 0;
  selectedGender: any = 0;
  entered_otp: any;
  actual_otp:any;
  profileImg: any = '../../../../assets/profile.jpeg';
  varifyEmail: boolean = false;
  patient: Patient | undefined;
  message:string = '';

  genders = [
    { label: 'Select Your Gender', value: '0' },
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
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

  value_border: any = "gray-400";

  activeTab: Tab = Tab.Email;

  constructor(public patientServ: PatientAuthService, private navbarService: NavbarService, private router: Router) { }

  async loadFile(event: any) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImg = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  genOTP() {
    this.actual_otp = Math.floor(100000 + Math.random() * 900000).toString();
    // console.log(this.actual_otp);
    // console.log("Inside genOTP");

    emailjs.send(environment.SERVICE_ID, environment.TEMPLATE_ID,{
      name: this.fullname,
      otp: this.actual_otp,
      to_email: this.email,
    }, environment.USER_ID)
    .then((response:any) => {
      // console.log('Email sent successfully!', response);
    })
    .catch((error:any) => {
      // console.error('Email could not be sent:', error);
    });
  }

  autoVerify(event: any) {
    const enteredOTP = event.target.value;
    this.entered_otp = enteredOTP;
    if (enteredOTP.length === 6) {
        this.varify_email(); // Automatically verify OTP when 6 digits are entered
    }
  }
  
  varify_email() {
    // console.log(this.actual_otp);
    // console.log(this.entered_otp);
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

  ngOnInit(): void {
    this.selectedGender = '0';
    this.selectedBloodGroup = '0';
    this.navbarService.setHideNavbar(true);
  }

  get Tab() {
    return Tab;
  }

  getshow(tab: string) {
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

  next_verify() {
    this.view_verify();
  }

  next_profile() {
    this.view_profile();
  }

  back_to_email() {
    this.view_email();
  }

  back_to_verify() {
    this.view_verify();
  }


  signup(): void {

    if (this.password == this.confpassword) {
      // console.log("Signed up");
      const patientData: Patient = {
        Email: this.email,
        Password: this.password,
        Name: this.fullname,
        DoB: this.dob,
        Age: this.age,
        Profile_picture: this.profileImg,
        Gender: this.selectedGender,
        Phone_no: this.phone_no,
        BloodGroup: this.selectedBloodGroup,
      };
      this.patientServ.signupPatient(patientData).subscribe(data => this.patient = data);

      this.email = '';
      this.password = '';

      // console.log("patient : ");
      // console.log(this.patient);
      this.router.navigate(['/signinPatient']);
    }
    else {
      this.value_border = "red-500";
    }
  }
}
