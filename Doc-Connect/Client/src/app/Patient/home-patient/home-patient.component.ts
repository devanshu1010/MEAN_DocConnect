import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';
import { ServicesService } from '../services.service';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {
  
  doctors: Doctor[] | undefined | any;
  
  constructor(private navbarService: NavbarService ,private services : ServicesService) {}
  
  async ngOnInit() : Promise<void> {
    
    this.navbarService.showNavbar();
    await this.loadDoctorData();
    // console.log(this.doctors)
  }

  loadDoctorData(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
  
      this.services.getDoctors().subscribe(
        data => {
          this.doctors = data;
          //console.log("Home Page");
          //console.log(this.doctors);
          
          resolve();
        },
        error => {
          console.error("error", error);
          reject(error);
        }
      );
    });
  }  
  
}
