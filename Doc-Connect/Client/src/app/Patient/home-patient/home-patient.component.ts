import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {

  isLogin : boolean = false;
  
  constructor(private navbarService: NavbarService) {}
  
  ngOnInit() {
    this.navbarService.showNavbar();
  }
}
