import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Doctor } from '../models/doctor';
import { baseUrl } from 'environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
 
  private url_getdoctor: string = baseUrl +"api/doctor/";
  private url_update_doctor: string = baseUrl +"api/doctor/";
  private url_cancel_appoinment: string = baseUrl + "api/doctor/appointment/cancelAppointment";

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
    //console.log(this.url_update_doctor);\
    const appointmentIdObj = { appointmentId : appointmentId }
    return this.http.put<any>(this.url_cancel_appoinment,appointmentIdObj).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in loginPatient:', error);
        throw error;
      })
    );
  }

}
