import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-patient',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponentPatient  implements OnInit {

  public showNavbar: boolean = true;

  // Method to hide the navbar
  public hideNavbar(): void {
    this.showNavbar = false;
  }

  // Method to show the navbar
  public Navbar(): void {
    this.showNavbar = true;
  }

  constructor( private router: Router) { }
  
  ngOnInit() {
    this.showNavbar = true;
  }
}
