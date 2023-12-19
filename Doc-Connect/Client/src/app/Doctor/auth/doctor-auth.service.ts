import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthService {

  private url_login: string = "http://localhost:8082/api/doctor/auth/login";
  private url_signup: string = "http://localhost:8082/api/doctor/auth/signup";

  constructor(private http: HttpClient) { }

  loginDcotor(doctorData: any):Observable<any>{
    console.log(doctorData);
    return this.http.post<any>(this.url_login,doctorData).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in loginPatient:', error);
        throw error;
      })
    );
    
  }
}
