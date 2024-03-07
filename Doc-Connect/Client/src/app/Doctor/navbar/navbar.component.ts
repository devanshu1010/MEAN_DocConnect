import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-navbar-doctor',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponentDoctor implements OnInit {

  hideNavbar: boolean = false;

  constructor(private navbarService: NavbarService) {}

  ngOnInit() {
    this.navbarService.hideNavbar$.subscribe((hide) => {
      this.hideNavbar = hide;
    });
  }

}
