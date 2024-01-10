import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Client';
  mode = 'Patient';

  public isLogin : boolean = false;
  constructor (private router: Router){}

  public change_mode():void {

    this.mode='Doctor';
    console.log(this.mode);
    this.router.navigate(['/signinDoctor']);
  }

  ngOnInit(): void {
    localStorage.removeItem("isLogin");
    localStorage.setItem('isLogin',"false");
  }
}
