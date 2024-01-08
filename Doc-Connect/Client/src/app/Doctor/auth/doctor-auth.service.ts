import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthService {

  private url_login: string = "http://localhost:8082/api/doctor/auth/login";
  private url_signup: string = "http://localhost:8082/api/doctor/auth/signup";

  constructor(private http: HttpClient) { }

  signupDoctor(doctorData: Doctor):Observable<Doctor>{

    return this.http.post<Doctor>(this.url_signup,doctorData).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error("Error in Doctor Signup : ", error);
        throw error;
      })
    );
    
  }

  loginDoctor(doctorData: any):Observable<any>{
    console.log("in login doctor.")
    console.log(doctorData);
    return this.http.post<any>(this.url_login,doctorData).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in loginPatient:', error);
        throw error;
      })
    );
    
  }
}
