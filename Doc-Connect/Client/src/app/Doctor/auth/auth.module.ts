import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    RegistrationComponent,
    SigninComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
