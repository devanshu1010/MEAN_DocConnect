import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor (private router: Router,private navbarService: NavbarService){}

  ngOnInit(): void {
    //this.navbarComponentPatient.hideNavbar();
    let login = localStorage.getItem('isLogin');
    localStorage.removeItem('isLogin');
    localStorage.removeItem('userId');
    let mode = localStorage.getItem('mode');

    if(mode == 'Doctor')
    {
      this.navbarService.setMode('Patient');
      localStorage.removeItem('mode');
      
    }else if( mode == 'Patient')
    {
      localStorage.removeItem('mode');
    }
    else{
      
    }
    this.navbarService.setIsLogin(false);
    this.navbarService.setMode('Patient');
    this.router.navigate(['/homepatient']);
  }

}
