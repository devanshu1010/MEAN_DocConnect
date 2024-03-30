import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponentDoctor } from './Doctor/auth/registration/registration.component';
import { SigninComponentDoctor } from './Doctor/auth/signin/signin.component';
import { NavbarComponentDoctor } from './Doctor/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponentPatient } from './Patient/navbar/navbar.component';
import { RegistrationComponentPatient } from './Patient/auth/registration/registration.component';
import { SigninComponentPatient } from './Patient/auth/signin/signin.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeDoctorComponent } from './Doctor/home-doctor/home-doctor.component';
import { DashboardDoctorComponent } from './Doctor/dashboard-doctor/dashboard-doctor.component';
import { DatePipe } from '@angular/common';
import { EditProfileComponent } from './Doctor/dashboard-doctor/edit-profile/edit-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationComponent } from './animation/animation.component';
import { HomePatientComponent } from './Patient/home-patient/home-patient.component';
import { DoctorCardComponent } from './Patient/home-patient/doctor-card/doctor-card.component';
import { BookAppointmentComponent } from './Patient/home-patient/book-appointment/book-appointment.component';
import { LogoutComponent } from './logout/logout.component';
import { PatientDashboardComponent } from './Patient/patient-dashboard/patient-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { PaymentStatusDialogComponent } from './Patient/home-patient/book-appointment/payment-status-dialog/payment-status-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularFireModule } from '@angular/fire/compat'
import { DoctorConsultingComponent } from './Doctor/dashboard-doctor/doctor-consulting/doctor-consulting.component';
import { firebaseConfig } from './Doctor/dashboard-doctor/doctor-consulting/firebaseservice.service';
import { PatientConsultingComponent } from './Patient/patient-dashboard/patient-consulting/patient-consulting.component';
import { EditPatientComponent } from './Patient/patient-dashboard/edit-patient/edit-patient.component';
import { JwtInterceptorService } from './Doctor/jwt-interceptor.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AuthGuard } from './Patient/auth/auth.guard';
import { AuthGuardDoctor } from './Doctor/auth/auth.gaurdDoctor';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponentDoctor,
    SigninComponentDoctor,
    NavbarComponentDoctor,
    RegistrationComponentPatient,
    SigninComponentPatient,
    NavbarComponentPatient,
    HomeDoctorComponent,
    DashboardDoctorComponent,
    EditProfileComponent,
    AnimationComponent,
    HomePatientComponent,
    DoctorCardComponent,
    BookAppointmentComponent,
    LogoutComponent,
    PatientDashboardComponent,
    NotFoundComponent,
    PaymentStatusDialogComponent,
    DoctorConsultingComponent,
    PatientConsultingComponent,
    EditPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMaterialTimepickerModule,
    MatDialogModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgxSkeletonLoaderModule
    
  ],
  providers: [DatePipe,AuthGuard,AuthGuardDoctor,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }            
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
