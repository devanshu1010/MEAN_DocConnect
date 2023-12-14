import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  email:any ='';
  password:string ='';

  emaildata:any ='devanshuchhipani@gamil.com';
  passwordata:string ='Devanshu';

  cssclass:string = "failed";
  incorrect:boolean = false;
  
  public signin():void {
    console.log("clicked");
    console.log(this.email);
    console.log(this.password);

    if(this.email == this.emaildata && this.password == this.passwordata)
    {
      console.log("Logged in");
      this.email='';
      this.password='';
      this.incorrect=false;
    }
    else{
      this.incorrect=true;
    }
  }
  ngOnInit(): void {
    
  }

}
