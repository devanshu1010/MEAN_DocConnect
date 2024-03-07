import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Client';
  mode = 'Patient';

  public isLogin : boolean = false;
  constructor (private router: Router,private navbarService: NavbarService){}

  public change_mode():void {

    // console.log(this.mode);
    this.router.navigate(['/signinDoctor']);
  }

  ngOnInit(): void {
    let log = localStorage.getItem('isLogin');
    //console.log("log in app",log);
    if(log == 'false' || log == null)
    {
      localStorage.removeItem("isLogin");
      localStorage.setItem('isLogin',"false");
    }

    let mode = localStorage.getItem('mode');

    if(mode == 'Doctor')
    {
      this.mode = 'Doctor';
      
    }else if( mode == 'Patient' || null)
    {
      this.mode = 'Patient';
    }
    
    this.navbarService.mode$.subscribe((mode: string) => {
      this.mode = mode;
      // console.log('mode', mode);
    });
    // console.log("mode",this.mode);

  }
}
