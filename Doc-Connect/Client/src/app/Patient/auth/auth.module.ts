import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponentPatient } from './registration/registration.component';
import { SigninComponentPatient } from './signin/signin.component';



@NgModule({
  declarations: [
    RegistrationComponentPatient,
    SigninComponentPatient
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
