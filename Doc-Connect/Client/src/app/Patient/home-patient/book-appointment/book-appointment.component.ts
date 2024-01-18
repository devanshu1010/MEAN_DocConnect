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

  MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  showDatepicker = false;
  datepickerValue!: string;
  today!: string;
  minDate!: string;
  maxDate!: string;
  month!: number; // !: mean promis it will not be null, and it will definitely be assigned
  year!: number;
  day!: number;
  no_of_days = [] as number[];
  blankdays = [] as number[];

  initDate() {
    let today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
    this.day = today.getDate();
    this.datepickerValue = new Date(this.year, this.month, today.getDate()).toDateString();
    this.today = new Date(this.year, this.month, today.getDate()).toDateString();
    this.minDate = new Date(this.year, this.month, today.getDate() + 1).toDateString();
    this.maxDate = new Date(this.year, this.month, today.getDate() + 7).toDateString();

    console.log(this.minDate);
    console.log(this.maxDate);
  }

  isToday(date: any) {
    const today = new Date();
    const d = new Date(this.year, this.month, date);
    return today.toDateString() === d.toDateString() ? true : false;
  }

  getDateValue(date: any) {
    let selectedDate = new Date(this.year, this.month, date);
    this.datepickerValue = selectedDate.toDateString();
    this.showDatepicker = false;
  }

  getNoOfDays() {
    // Get the current date
    const today = new Date();
  
    // Calculate the date for tomorrow
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
  
    // Calculate the date for 7 days from tomorrow
    const nextWeek = new Date(tomorrow);
    nextWeek.setDate(tomorrow.getDate() + 6);
  
    // Get the total number of days in the current month
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    
    console.log(daysInMonth);
    // Find where to start the calendar day of the week
    let dayOfWeek = new Date(this.year, this.month, today.getDate() + 1).getDay(); // Start of the month
    
    console.log(dayOfWeek);

    let blankdaysArray = [];
    for (let i = 0; i < dayOfWeek; i++) {
      blankdaysArray.push(i);
    }
    
    console.log(blankdaysArray);
    // Array to store days within the next 7 days
    let daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(this.year, this.month, i);
  
      // Include only dates starting from tomorrow and within the next 7 days
      if (currentDate >= today && currentDate <= nextWeek) {
        daysArray.push(i);
      }
    }
    
    console.log(daysArray);
    // Update the component properties with the calculated arrays
    this.blankdays = blankdaysArray;
    this.no_of_days = daysArray;
  }
  

  trackByIdentity = (index: number, item: any) => item;

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
      this.initDate();
      this.getNoOfDays(); 
    } catch (error) {
      console.error("error", error);
    }
  }
}
