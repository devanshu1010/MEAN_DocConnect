import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-home-doctor',
  templateUrl: './home-doctor.component.html',
  styleUrls: ['./home-doctor.component.css']
})
export class HomeDoctorComponent implements OnInit{
  
  doctorId: any;
  doctor: any;

  constructor (public doctorServ:DoctorService,private navbarService: NavbarService){}

  ngOnInit(): void {
    this.navbarService.showNavbar();
    this.doctorId = localStorage.getItem('userId');
    console.log(this.doctorId);
    this.doctorServ.getDoctor(this.doctorId).subscribe(
      data =>{
        this.doctor = data;
        //console.log("Login successful");
        console.log(data);
      },
      error => {
        console.error("Doctor not avialable.", error);
        // Handle login error (e.g., display an error message)
      }
    );
  }
}
