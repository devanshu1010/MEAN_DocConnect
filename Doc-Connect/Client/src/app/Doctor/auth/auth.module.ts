import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponentDoctor } from './registration/registration.component';
import { SigninComponentDoctor } from './signin/signin.component';



@NgModule({
  declarations: [
    RegistrationComponentDoctor,
    SigninComponentDoctor
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
