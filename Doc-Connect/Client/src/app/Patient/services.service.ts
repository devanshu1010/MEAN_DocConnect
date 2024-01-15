import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url_getdoctors: string = "http://localhost:8082/api/doctor/";
  private url_get_doctor: string ="http://localhost:8082/api/doctor/";

  constructor(private http: HttpClient) { }

  getDoctors():Observable<any>{
    const url = this.url_getdoctors ;
    console.log(url);
    return this.http.get<any>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in Geting Doctor:', error);
        throw error;
      })
    );
  }

  getDoctor(doctorId: any):Observable<any>{
    console.log(doctorId);
    const url = this.url_get_doctor + doctorId;
    console.log( "url "+ url)
    return this.http.get<any>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in fetchin doctor:', error);
        throw error;
      })
    );
  }
}
