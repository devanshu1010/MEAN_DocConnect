import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-navbar-patient',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponentPatient  implements OnInit {
  @Output() onSignInDoctorClicked: EventEmitter<any> = new EventEmitter();

  public isLogin : boolean = false;

  public hideNavbar: boolean = false;

  signInDoctor() {
    // Any logic specific to signing in as a doctor
    console.log("clicked");
    this.onSignInDoctorClicked.emit();
  }

  constructor( private router: Router,private navbarService: NavbarService) { }
  
  ngOnInit() {
    console.log("hi");
    this.isLogin= false;
    this.navbarService.hideNavbar$.subscribe((hide) => {
      this.hideNavbar = hide;
    });

    this.navbarService.isLogin$.subscribe((value) => {
      this.isLogin = value;
    });    
  }
}
