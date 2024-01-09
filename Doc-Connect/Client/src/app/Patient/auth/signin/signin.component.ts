import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientAuthService } from '../patientAuth.service';
import { NavbarComponentPatient } from '../../navbar/navbar.component';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-signin-patient',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponentPatient implements OnInit{

  email:any ='';
  password:string ='';

  cssclass:string = "failed";
  incorrect:boolean = false;
  patient: any;
  //private navbarComponentPatient: NavbarComponentPatient
  constructor (public patientServ:PatientAuthService,private navbarService: NavbarService){}
  
  public signin():void {
    console.log("clicked");
    console.log(this.email);
    console.log(this.password);

    if(this.password && this.email )
    {
      console.log("In login");
      const patientData: any = {
        Email: this.email,
        Password: this.password,
      };
      
      this.patientServ.loginPatient(patientData).subscribe(
        data =>{
          this.patient = data;
          console.log("Login successful");
          console.log(data);
        },
        error => {
          console.error("Login error", error);
          this.incorrect=true;
          // Handle login error (e.g., display an error message)
        }
      );

      //console.log("patient : ");
      //console.log(this.patient);
      //this.email='';
      this.password='';
    }
    else{
      console.log("unsucessful not login");
      //console.log(this.patient);
      //this.value_border="red-500";
    }
    
  }
  ngOnInit(): void {
    //this.navbarComponentPatient.hideNavbar();
    this.navbarService.setHideNavbar(true);
  }
}
