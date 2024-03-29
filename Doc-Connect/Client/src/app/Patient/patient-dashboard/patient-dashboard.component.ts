import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Patient } from 'src/app/models/patient';
import { ServicesService } from '../services.service';

enum Tab {
  Profile = 'profile',
  Appointments = 'appointments',
  Slots = 'slots'
}

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css'],
  animations: [
    trigger('slideIndicator', [
      state('1', style({ transform: 'translateY(0px)' })),
      state('2', style({ transform: 'translateY(52px)' })),
      state('3', style({ transform: 'translateY(104px)' })),
      transition('* => *', animate('0.5s ease-out'))
    ]),
    trigger('slideA', [
      state('1', style({ transform: 'translateX(+30px)', color: '#68e8f7' })), 
      state('0', style({ transform: 'translateY(0px)', color: '#ffffff' })),
      transition('* => *', animate('0.3s ease-out'))
    ])
  ],
})
export class PatientDashboardComponent implements OnInit
{
  activeTab: Tab = Tab.Profile;

  profile: any; 
  appointments: any; 
  slots: any; 
  patient?:Patient|any;
  patientId?: number | any;

  isEditProfileModalOpen = false;

  allAppointments: any;
  datePipe: any;

  get Tab() {
    return Tab;
  }

  getshow(tab: string)
  {
    return tab === this.activeTab ? 1 : 0;
  }

  getTabIndex(tab: string): string {
    if (tab === 'profile') {
      return '1';  // Current tab, higher index
    } else if (tab === 'appointments') {
      return '2';  // Tab with label 'appointments'
    } else if (tab === 'slots') {
      return '3';  // Tab with label 'slots'
    } else {
      return '0';  // Other tabs, lower index
    }
  }
  view_profile(): void {
    this.activeTab = Tab.Profile;
    this.profile = true;
    this.appointments = false;
    this.slots = false;
  }

  // Change active tab to Appointments
  view_appointments(): void {
    this.activeTab = Tab.Appointments;
    this.profile = false;
    this.appointments = true;
    this.slots = false;
    console.log('activeTab:', this.activeTab);
  }

  // Change active tab to Slots
  view_slots(): void {
    this.activeTab = Tab.Slots;
    this.profile = false;
    this.appointments = false;
    this.slots = true;
  }

  openEditProfilePopup() {
    this.isEditProfileModalOpen = true;
  }

  closeModal() {
    this.isEditProfileModalOpen = false;
  }

  loadPatientData(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.patientId = '';
      //this.patientId = localStorage.getItem('userId');

      this.services.getPatient().subscribe(
        data => {
          this.patient = data;
          this.allAppointments = this.patient.Appointment_id;
          console.log(this.allAppointments);
          console.log("DashBoard");
          console.log(this.patient);
          
          //this.calculateTimeSlots();
          resolve();
        },
        error => {
          console.error("error", error);
          reject(error);
        }
      );
    });
  }

  updatePatient(updatedPatient: Patient): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      console.log(this.patientId);
      // Use your DoctorService to update the doctor data
      this.services.updatePatient( updatedPatient).subscribe(
        async data => {

          this.patient = data;
          // Handle successful update, maybe show a success message
          console.log('Patient updated successfully');
          // Reload the doctor data after the update
          //await this.loadPatientData();
          resolve();
        },
        error => {
          console.error('Error updating doctor', error);
          // Handle error, maybe show an error message
          reject(error);
        }
      );
    });
  }

  constructor(private route: ActivatedRoute,private services : ServicesService,private router: Router) {}

  async ngOnInit() : Promise<void> {

    try {
      let isLogin = localStorage.getItem('isLogin');

      if(isLogin == "false" || isLogin == null) 
      {
        //console.log(isLogin);
        // console.log("going to signin");
        await this.router.navigate(['/signinPatient'], { replaceUrl: true });
      }
      else{

        // this.patientId = localStorage.getItem('userId');
        this.view_profile();
          
        await this.loadPatientData();
        // this.patient = await this.services.getPatient(this.patientId).toPromise();
        // console.log(this.patient);

          setTimeout(async () => {
            try {
              // Fetch the doctor details using the service
              
              // Reset loading when the data is fetched successfully
              //this.loading = false;
              // You can perform other operations with this.doctor if needed
            } catch (error) {
              console.error('Error fetching doctor details:', error);
              // Handle the error if needed
              //this.loading = false; // Ensure loading is reset in case of an error
            }
          }, 2000);
          //this.doctor = await this.services.getDoctor(this.doctorId).toPromise();
          
          //console.log("Home Page");
          //console.log(this.doctor);
        //} else {
            //console.error("Error: 'id' parameter is undefined.");
        //}
      }
    } catch (error) {
      console.error("error", error);
    }
  }

}
