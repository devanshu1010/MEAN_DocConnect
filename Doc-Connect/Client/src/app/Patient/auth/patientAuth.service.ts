import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,  catchError } from 'rxjs';
import { Patient } from 'src/app/models/patient';
import { baseUrl } from 'environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PatientAuthService {

  redirectUrl!: string;

  private url_login: string = baseUrl +"api/patient/auth/login";
  private url_signup: string = baseUrl +"api/patient/auth/signup";
  private url_checkUser: string = baseUrl + "api/patient/auth/check";
  
  constructor(private http: HttpClient) { }

  signupPatient(patientData: Patient):Observable<Patient>{

    return this.http.post<Patient>(this.url_signup,patientData).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in signupPatient:', error);
        throw error;
      })
    );
    
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

  async isAuthenticated(): Promise<boolean> {
    try {
      const data = await this.AuthPatient().toPromise();
      console.log(data);
      if (data.status === "success") {
        return true;
      } else {
        console.log("in false : ");
        return false;
      }
    } catch (error) {
      console.error("Authentication error", error);
      return false;
    }
  }
  
  AuthPatient(): Observable<any> {
    return this.http.get<any>(this.url_checkUser).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in loginPatient:', error);
        throw error;
      })
    );
  }
  
}
