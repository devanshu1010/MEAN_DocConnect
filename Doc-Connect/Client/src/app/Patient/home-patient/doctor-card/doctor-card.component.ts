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
  ratings = [2.4, 3.1, 5, 4.8, 1.2];
  starsArray: number[] = Array.from({ length: 5 }, (_, index) => index + 1);
  rating = 4.2;

  constructor(private route: ActivatedRoute,private services : ServicesService) {}

  async ngOnInit() : Promise<void> {
    try {
      // Read the doctorId from the route parameters
      // console.log("hello");
      const params = await this.route.params.pipe(first()).toPromise();
      // console.log(params);
      const id = params?.['id']; // Access the correct property name
    
    if (id !== undefined) {
      this.doctorId = id;
      // console.log(this.doctorId);
      // Use the doctorId to fetch the corresponding doctor details
      // Fetch the data or use a service to get the details based on the id
      this.doctor = await this.services.getDoctor(this.doctorId).toPromise();
      
      // console.log("Home Page");
      // console.log(this.doctor);
    } else {
        console.error("Error: 'id' parameter is undefined.");
      }
    } catch (error) {
      console.error("error", error);
    }
  }
}
