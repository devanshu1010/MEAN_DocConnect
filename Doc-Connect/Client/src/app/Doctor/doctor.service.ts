import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private url_getdoctor: string = "http://localhost:8082/api/doctor/";
  private url_update_doctor: string ="http://localhost:8082/api/doctor/";

  constructor(private http: HttpClient) { }

  getDoctor(doctorId: any):Observable<any>{
    this.url_getdoctor += doctorId;
    console.log(this.url_getdoctor);
    return this.http.get<any>(this.url_getdoctor).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in Geting Doctor:', error);
        throw error;
      })
    );
    
  }

  updateDoctor(doctorId: any,updatedDoctor: Doctor):Observable<any>{
    this.url_update_doctor += doctorId;
    console.log(this.url_update_doctor);
    return this.http.put<any>(this.url_update_doctor,updatedDoctor).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in loginPatient:', error);
        throw error;
      })
    );
  }

}
