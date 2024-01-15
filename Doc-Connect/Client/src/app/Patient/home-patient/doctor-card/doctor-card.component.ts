import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../services.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent  implements OnInit {
  doctorId?: number;
  doctor: any; // Adjust the type accordingly
  doctors: any;

  constructor(private route: ActivatedRoute,private services : ServicesService) {}

  async ngOnInit() : Promise<void> {
    try {
      // Read the doctorId from the route parameters
      console.log("hello");
      const params = await this.route.params.pipe(first()).toPromise();
      console.log(params);
      const id = params?.['id']; // Access the correct property name
    
    if (id !== undefined) {
      this.doctorId = id;
      console.log(this.doctorId);
      // Use the doctorId to fetch the corresponding doctor details
      // Fetch the data or use a service to get the details based on the id
      this.doctor = await this.services.getDoctor(this.doctorId).toPromise();
      
      console.log("Home Page");
      console.log(this.doctor);
    } else {
      console.error("Error: 'id' parameter is undefined.");
    }
    } catch (error) {
      console.error("error", error);
    }
  }

  loadDoctorData(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
  
      this.services.getDoctors().subscribe(
        data => {
          this.doctors = data;
          console.log("Home Page");
          console.log(this.doctors);
          
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
function resolve() {
  throw new Error('Function not implemented.');
}

function reject(error: any) {
  throw new Error('Function not implemented.');
}

