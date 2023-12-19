import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Patient } from 'src/app/models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientAuthService {

  private url_login: string = "http://localhost:8082/api/patient/auth/login";
  private url_signup: string = "http://localhost:8082/api/patient/auth/signup";

  constructor(private http: HttpClient) { }

  signupPatient(patientData: Patient):Observable<Patient>{

    return this.http.post<Patient>(this.url_signup,patientData)
    
  }

  loginPatient(patientData: any):Observable<any>{
    console.log(patientData);
    return this.http.post<any>(this.url_login,patientData).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in loginPatient:', error);
        throw error;
      })
    );
    
  }
}
