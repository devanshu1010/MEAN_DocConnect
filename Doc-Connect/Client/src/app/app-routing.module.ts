import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponentPatient } from './Patient/auth/signin/signin.component';
import { RegistrationComponentPatient } from './Patient/auth/registration/registration.component';
import { RegistrationComponentDoctor } from './Doctor/auth/registration/registration.component';
import { SigninComponentDoctor } from './Doctor/auth/signin/signin.component';
import { DashboardDoctorComponent } from './Doctor/dashboard-doctor/dashboard-doctor.component';
import { HomeDoctorComponent } from './Doctor/home-doctor/home-doctor.component';

const routes: Routes = [
  //{path:'',redirectTo:'homedoctor',pathMatch:'full'},
  {path:'signinDoctor',component:SigninComponentDoctor},
  {path:'registerDoctor',component:RegistrationComponentDoctor},
  {path:'signinPatient',component:SigninComponentPatient},
  {path:'registerPatient',component:RegistrationComponentPatient},
  {path:'dashboardDoctor',component:DashboardDoctorComponent},
  {path:'homedoctor',component:HomeDoctorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
