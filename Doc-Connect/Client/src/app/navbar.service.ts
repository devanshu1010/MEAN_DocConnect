import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private hideNavbarSubject = new BehaviorSubject<boolean>(false);
  hideNavbar$ = this.hideNavbarSubject.asObservable();
  
  setHideNavbar(hide: boolean) {
    this.hideNavbarSubject.next(hide);
  }
  
  showNavbar() {
    this.setHideNavbar(false);
  }
  
  constructor() { }

}
