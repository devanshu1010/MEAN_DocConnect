import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  doctorId?: number;
  doctor: any; // Adjust the type accordingly

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
}
