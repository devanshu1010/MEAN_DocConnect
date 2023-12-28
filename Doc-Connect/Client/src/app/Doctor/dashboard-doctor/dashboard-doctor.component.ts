import { Component, OnInit } from '@angular/core';
import { DoctorDashboardService } from './doctor-dashboard.service';
import { DoctorService } from '../doctor.service';
import { Doctor } from 'src/app/models/doctor';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-doctor',
  templateUrl: './dashboard-doctor.component.html',
  styleUrls: ['./dashboard-doctor.component.css']
})
export class DashboardDoctorComponent implements OnInit {

  doctor: Doctor | undefined;
  doctorId: any;
  birthday: any | undefined;

  profile: any; 
  appointments: any; 
  slots: any; 

  isEditProfileModalOpen = false;

  currdate : Date = new Date();
  todaydate : any;
  today: any;
  
  timeSlots: { day: Date; startTime: string; endTime: string }[] = [];

  slotTiming = [
    { label : '30 minute', value : 30 },
    { label : '60 minute', value : 60 }
  ]

  openEditProfilePopup() {
    this.isEditProfileModalOpen = true;
  }

  closeModal() {
    this.isEditProfileModalOpen = false;
  }

  constructor(
    public doctorServ: DoctorService,
    private datePipe: DatePipe
  ) {}

  view_profile(): void {
    this.profile = true; 
    this.appointments = false; 
    this.slots = false;
  }

  view_appointments(): void {
    this.profile = false; 
    this.appointments = true; 
    this.slots = false;
  }

  view_slots(): void {
    this.profile = false; 
    this.appointments = false; 
    this.slots = true;
  }

  calculateTimeSlots() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1); // Get the date for tomorrow

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date();
      currentDate.setDate(tomorrow.getDate() + i);

      // Replace 'yourStartTime' and 'yourEndTime' with your actual time slot values
      const timeSlot = {
        day: currentDate,
        startTime: 'yourStartTime',
        endTime: 'yourEndTime',
      };

      this.timeSlots.push(timeSlot);
    }
  }

  updateDoctor(updatedDoctor: Doctor) {
    console.log(this.doctorId);
    // Use your DoctorService to update the doctor data
    this.doctorServ.updateDoctor(this.doctorId,updatedDoctor).subscribe(
      data => {
        // Handle successful update, maybe show a success message
        console.log('Doctor updated successfully');
        // Reload the doctor data after the update
        this.loadDoctorData();
      },
      error => {
        console.error('Error updating doctor', error);
        // Handle error, maybe show an error message
      }
    );
  }

  loadDoctorData() {
    this.doctorId = localStorage.getItem('userId');

    this.doctorServ.getDoctor(this.doctorId).subscribe(
      data => {
        this.doctor = data;
        console.log("DashBoard");
        console.log(this.doctor);

        // Convert UTC date to India time zone
        this.birthday = this.datePipe.transform(this.doctor?.DoB, 'd MMM, yyyy');
      },
      error => {
        console.error("error", error);
        // Handle login error (e.g., display an error message)
      }
    );
  }

  submitForm(){
    
  }

  ngOnInit(): void {
    this.view_profile();

    this.loadDoctorData();

    console.log(this.doctorId);
    //const formattedDate = this.datePipe.transform(this.currdate, 'EEEE, MMMM d');
    //console.log(formattedDate);
   // console.log(formattedDate);
    console.log(this.currdate);
    this.today= this.datePipe.transform(this.currdate,'EEEE');
    this.todaydate=this.datePipe.transform(this.currdate,'MMMM d');
    console.log(this.today);
    console.log(this.todaydate);
    this.calculateTimeSlots();
  }
}
