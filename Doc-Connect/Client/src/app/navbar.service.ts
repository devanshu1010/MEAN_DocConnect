import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public isLogin : boolean = false;
  private hideNavbarSubject = new BehaviorSubject<boolean>(false);
  hideNavbar$ = this.hideNavbarSubject.asObservable();

  private isLoginSubject = new BehaviorSubject<boolean>(false);
  isLogin$ = this.isLoginSubject.asObservable();
  
  setHideNavbar(hide: boolean) {
    this.hideNavbarSubject.next(hide);
  }
  
  showNavbar() {
    this.setHideNavbar(false);
  }

  setIsLogin(value: boolean) {
    this.isLoginSubject.next(value);
  }

  Signin()
  {
    const login :any = localStorage.getItem('userId');
    
    if(login == "true")
    {
      console.log("in signin");
      this.isLogin = true;
      console.log(this.isLogin);
    }
  }
  
  constructor() { }

}
