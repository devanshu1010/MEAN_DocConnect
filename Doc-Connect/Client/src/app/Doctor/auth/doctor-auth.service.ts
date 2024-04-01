import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';
import { baseUrl } from 'environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthService {

  redirectUrl!: string;
  private url_login: string = baseUrl +"api/doctor/auth/login";
  private url_signup: string = baseUrl +"api/doctor/auth/signup";
  private url_checkUser: string = baseUrl + "api/doctor/auth/check";

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

  async isAuthenticated(): Promise<boolean> {
    try {
      const data = await this.AuthDoctor().toPromise();
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
  
  AuthDoctor(): Observable<any> {
    return this.http.get<any>(this.url_checkUser).pipe(
      catchError((error: HttpErrorResponse) => {
        //console.error('Error in loginPatient:', error);
        throw error;
      })
    );
  }

}
