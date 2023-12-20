import { Component, OnInit } from '@angular/core';
import { DoctorAuthService } from '../doctor-auth.service';

@Component({
  selector: 'app-signin-doctor',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponentDoctor implements OnInit{

  email:any ='';
  password:string ='';

  cssclass:string = "failed";
  incorrect:boolean = false;
  disablesiginin:boolean = true;
  doctor: any;

  constructor (public doctorAuthServ:DoctorAuthService){}
  
  public signin():void {
    console.log("clicked");
    console.log(this.email);
    console.log(this.password);

    if(this.password && this.password )
    {
      console.log("In login");
      const doctorData: any = {
        Email: this.email,
        Password: this.password,
      };
      
      this.doctorAuthServ.loginDcotor(doctorData).subscribe(
        data =>{
          this.doctor = data;
          this.incorrect=false;
          console.log("Login successful");
          console.log(data);
        },
        error => {
          console.error("Login error", error);
          this.incorrect=true;
          // Handle login error (e.g., display an error message)
        }
      );

      this.email='';
      this.password='';
    }
    else{
      console.log("unsucessful not login");
      //console.log(this.patient);
      //this.value_border="red-500";
    }
    
  }
  ngOnInit(): void {
    
  }

}
