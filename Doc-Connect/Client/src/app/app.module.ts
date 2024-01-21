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
import {HttpClientModule} from '@angular/common/http';
import { HomeDoctorComponent } from './Doctor/home-doctor/home-doctor.component';
import { DashboardDoctorComponent } from './Doctor/dashboard-doctor/dashboard-doctor.component';
import { DatePipe } from '@angular/common';
import { EditProfileComponent } from './Doctor/dashboard-doctor/edit-profile/edit-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationComponent } from './animation/animation.component';
import { HomePatientComponent } from './Patient/home-patient/home-patient.component';
import { DoctorCardComponent } from './Patient/home-patient/doctor-card/doctor-card.component';
import { BookAppointmentComponent } from './Patient/home-patient/book-appointment/book-appointment.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
