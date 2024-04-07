import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Doctor } from '../models/doctor';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
 
  private url_getdoctor: string = environment.baseUrl +"api/doctor/";
  private url_update_doctor: string = environment.baseUrl +"api/doctor/";
  private url_cancel_appoinment: string = environment.baseUrl + "api/doctor/appointment/cancelAppointment";
  private url_done_appointment:string = environment.baseUrl + "api/doctor/appointment/doneAppointment";

  constructor(private http: HttpClient) { }

  getDoctor(doctorId: any):Observable<any>{
    // console.log(this.url_getdoctor);
    const url = this.url_getdoctor + doctorId;
    // console.log(doctorId);
    // console.log(this.url_getdoctor);
    return this.http.get<any>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in Geting Doctor:', error);
        throw error;
      })
    );
    
  }

  updateDoctor(doctorId: any,updatedDoctor: Doctor):Observable<any>{
    //this.url_update_doctor += doctorId;
    const url_generated = this.url_update_doctor;
    //console.log(this.url_update_doctor);
    return this.http.put<any>(url_generated,updatedDoctor).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in loginPatient:', error);
        throw error;
      })
    );
  }

  cancelAppoinment(appointmentId: any):Observable<any>{
    console.log(this.url_cancel_appoinment);
    const appointmentIdObj = { appointmentId : appointmentId }
    return this.http.put<any>(this.url_cancel_appoinment,appointmentIdObj).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in cancel appoitment:', error);
        throw error;
      })
    );
  }

  doneAppointment(appointmentId: any):Observable<any>{
    console.log(this.url_done_appointment);
    const appointmentIdObj = {appointmentId : appointmentId};
    return this.http.put<any>(this.url_done_appointment, appointmentIdObj).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in done appointment', error);
        throw error;
      }
    ));
  }

}
