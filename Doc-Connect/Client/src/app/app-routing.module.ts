import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponentPatient } from './Patient/auth/signin/signin.component';
import { RegistrationComponentPatient } from './Patient/auth/registration/registration.component';

const routes: Routes = [
  {path:'signinpatient',component:SigninComponentPatient},
  {path:'registerpatient',component:RegistrationComponentPatient}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
