import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url_getdoctors: string = "http://localhost:8082/api/doctor/";
  private url_get_doctor: string ="http://localhost:8082/api/doctor/";
  private url_get_patient: string ="http://localhost:8082/api/patient/";
  private url_create_orderId: string ="http://localhost:8082/api/create/orderId";
  private url_verify_payment: string ="http://localhost:8082/api/payment/verify";

  constructor(private http: HttpClient) { }

  getDoctors():Observable<any>{
    const url = this.url_getdoctors ;
    // console.log(url);
    return this.http.get<any>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in Geting Doctor:', error);
        throw error;
      })
    );
  }

  getDoctor(doctorId: any):Observable<any>{
    // console.log(doctorId);
    const url = this.url_get_doctor + doctorId;
    // console.log( "url "+ url)
    return this.http.get<any>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in fetchin doctor:', error);
        throw error;
      })
    );
  }

  getPatient(patientId: any):Observable<any>{
    // console.log(doctorId);
    const url = this.url_get_patient + patientId;
    // console.log( "url "+ url)
    return this.http.get<any>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in fetchin doctor:', error);
        throw error;
      })
    );
  }

  createOrderId(Data: any):Observable<any>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post<any>(this.url_create_orderId,Data , {headers}).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in createOrderId:', error);
        throw error;
      })
    );
    
  }

  verifyPayment(Data: any):Observable<any>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post<any>(this.url_verify_payment,Data , {headers}).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in verifyPayment:', error);
        throw error;
      })
    );
    
  }
}
