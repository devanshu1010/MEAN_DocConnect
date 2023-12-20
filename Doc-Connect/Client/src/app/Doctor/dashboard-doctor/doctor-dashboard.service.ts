import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorDashboardService {

  private url_dashboard: string ="http://localhost:8082/api/doctor/";

  constructor(private http: HttpClient) { }

  getDcotor(doctorId: any):Observable<any>{
    console.log(doctorId);
    this.url_dashboard += doctorId;
    return this.http.get<any>(this.url_dashboard).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error in loginPatient:', error);
        throw error;
      })
    );
  }
}
