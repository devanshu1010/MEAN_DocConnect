import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Patient } from 'src/app/models/patient';
import { ServicesService } from '../services.service';
import { FirebaseserviceService } from 'src/app/Doctor/dashboard-doctor/doctor-consulting/firebaseservice.service';
import { DocumentSnapshot } from '@angular/fire/compat/firestore';

enum Tab {
  Profile = 'profile',
  Appointments = 'appointments',
  Join = 'join'
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
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 })),
      ]),
    ])
  ],
})
export class PatientDashboardComponent implements OnInit
{
  activeTab: Tab = Tab.Profile;
  incorrect: boolean = false;
  profile: any; 
  appointments: any; 
  join: any; 
  patient?:Patient|any;
  patientId?: number | any;
  message:String = "";
  isEditProfileModalOpen = false;
  callId:any;

  allAppointments: any;
  datePipe: any;

  constructor(private route: ActivatedRoute, private firebaseService: FirebaseserviceService, private services : ServicesService,private router: Router, private ngZone:NgZone) {}

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
    } else if (tab === 'join') {
      return '3';  // Tab with label 'join'
    } else {
      return '0';  // Other tabs, lower index
    }
  }
  view_profile(): void {
    this.activeTab = Tab.Profile;
    this.profile = true;
    this.appointments = false;
    this.join = false;
  }

  // Change active tab to Appointments
  view_appointments(): void {
    this.activeTab = Tab.Appointments;
    this.profile = false;
    this.appointments = true;
    this.join = false;
    console.log('activeTab:', this.activeTab);
  }

  // Change active tab to join
  view_join(): void {
    this.activeTab = Tab.Join;
    this.profile = false;
    this.appointments = false;
    this.join = true;
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

  async cancleAppointmet(appointmentId:any){
    console.log("Inside cancleAppointmet");
    var mes:any
    return new Promise<void>((resolve, reject) => {
      this.services.cancelAppoinment(appointmentId).subscribe(
        data => {
          mes = data.mes;

          this.ngZone.run(() => {
            alert(mes);
          });
          this.loadPatientData();
          resolve();
        },
        error => {
          console.error("error", error);
          reject(error);
        }
      )
    });
  }

  async join_meet() : Promise<void> {
    try {
        // Get the document reference
        const callDocRef = this.firebaseService.getCallDocument(this.callId);
        
        // Check if the document exists
        callDocRef.valueChanges().subscribe({
          next: (callSnapshot: DocumentSnapshot<any>) => {
            if (!callSnapshot) {
              // Handle the case where the document does not exist
              //console.error(`Document with callId ${this.callId} does not exist`);
              this.message = `Document with callId ${this.callId} does not exist`;
              this.incorrect = true;
            } else {
              this.incorrect = false;
              this.message = "";
              this.router.navigate(['/PatientConsulting', this.callId], { replaceUrl: true });
            }
          },
          error: (error: any) => {
            console.error('Error fetching document:', error);
            // Handle the error as needed
          }
        });        
        console.log('Call ended successfully');
    } catch (error) {
        // Handle errors gracefully
        console.error('Error handling call document:', error);
    }
  }

  

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
