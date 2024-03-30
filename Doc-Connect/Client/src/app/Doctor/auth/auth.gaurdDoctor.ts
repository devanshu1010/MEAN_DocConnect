import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DoctorAuthService } from './doctor-auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardDoctor implements CanActivate {
  constructor(private authService: DoctorAuthService, private router: Router) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
      console.log("in doctor authgaurd ")
    if (await this.authService.isAuthenticated()) {
      return true;

    } else {
      // Store the attempted URL for redirection after login
      console.log("in can active else")
      console.log("state.url",state.url);
      this.authService.redirectUrl = state.url;
      let isLogin = localStorage.getItem('isLogin');

      if(isLogin == "true" && isLogin != null) 
      {
        //console.log(isLogin);
        // console.log("going to signin");
        this.router.navigate(['/homepatient']);
        // await this.router.navigate(['/signinPatient'], { replaceUrl: true });
      }
      else{
        this.router.navigate(['/signinDoctor']);
      }
      
      return false;
    }
  }
}
