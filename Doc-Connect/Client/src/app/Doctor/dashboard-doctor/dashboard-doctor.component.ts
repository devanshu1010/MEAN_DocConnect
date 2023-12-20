import { Component, OnInit } from '@angular/core';
import { DoctorDashboardService } from './doctor-dashboard.service';

@Component({
  selector: 'app-dashboard-doctor',
  templateUrl: './dashboard-doctor.component.html',
  styleUrls: ['./dashboard-doctor.component.css']
})
export class DashboardDoctorComponent implements OnInit {

  doctor: any;
  doctorId: any;

  constructor(public doctorDashboardServ:DoctorDashboardService) {}

  ngOnInit(): void {
    this.doctorDashboardServ.getDcotor(this.doctorId).subscribe(
      data =>{
        this.doctor = data;
        //this.incorrect=false;
        console.log("DashBoard");
        console.log(data);
      },
      error => {
        console.error("error", error);
        //this.incorrect=true;
        // Handle login error (e.g., display an error message)
      }
    );
  }
  
}
