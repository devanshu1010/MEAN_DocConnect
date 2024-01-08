import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-home-doctor',
  templateUrl: './home-doctor.component.html',
  styleUrls: ['./home-doctor.component.css']
})
export class HomeDoctorComponent implements OnInit{
  
  doctorId: any;
  doctor: any;

  constructor (public doctorServ:DoctorService){}

  ngOnInit(): void {

    this.doctorId = localStorage.getItem('userId');

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
