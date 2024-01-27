import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private hideNavbarSubject = new BehaviorSubject<boolean>(false);
  hideNavbar$ = this.hideNavbarSubject.asObservable();

  private isLoginSubject = new BehaviorSubject<boolean>(this.authenticated() || false);
  isLogin$ = this.isLoginSubject.asObservable();

  private modeSubject = new BehaviorSubject<string>(this.isDoctor());
  public mode$ = this.modeSubject.asObservable();

  setMode(mode: string): void {
    this.modeSubject.next(mode);
  }
  
  setHideNavbar(hide: boolean) {
    this.hideNavbarSubject.next(hide);
  }

  isDoctor()
  {
    let mode = localStorage.getItem('mode');

    if(mode == 'Doctor')
    {
      return 'Doctor';
      
    }else if( mode == 'Patient' || null)
    {
      return  'Patient';
    }
    return 'Patient';
  }
  
  authenticated() :boolean
  {
    let log = localStorage.getItem('isLogin');
    // console.log("log",log);
    if(log == 'false')
      return false;

    if(log == null)
      return false;
    
    return true;
  }

  showNavbar() {
    this.setHideNavbar(false);
  }

  setIsLogin(value: boolean) {
    this.isLoginSubject.next(value);
  }
  
  constructor() { }

}
