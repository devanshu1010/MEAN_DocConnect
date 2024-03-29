import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientAuthService } from '../patientAuth.service';
import { NavbarComponentPatient } from '../../navbar/navbar.component';
import { NavbarService } from 'src/app/navbar.service';
import { Router } from '@angular/router';

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
  userId: any;
  isLogin: boolean = false;
  //private navbarComponentPatient: NavbarComponentPatient
  constructor (public patientServ:PatientAuthService,private navbarService: NavbarService,private router: Router){}
  
  public signin():void {
    console.log("clicked");
    //console.log(this.email);
    //console.log(this.password);

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
          
          this.userId = this.patient._id;
          console.log("userId");
          console.log(this.userId);
          localStorage.removeItem("userId");
          // localStorage.setItem('userId',this.patient._id);

          this.email='';
          this.password='';

          localStorage.setItem('isLogin',"true");
          this.isLogin = true;
          this.navbarService.setIsLogin(this.isLogin);
          localStorage.setItem('mode','Patient');
          this.navbarService.setMode('Patient');
          this.router.navigate(['/homepatient']);
        },
        error => {
          console.error("Login error", error);
          this.incorrect=true;
          // Handle login error (e.g., display an error message)
        }
      );
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
