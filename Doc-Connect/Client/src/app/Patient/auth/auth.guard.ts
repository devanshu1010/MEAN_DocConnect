import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PatientAuthService } from './patientAuth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: PatientAuthService, private router: Router) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
      console.log("in can active ")
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
        this.router.navigate(['/homedoctor']);
        // await this.router.navigate(['/signinPatient'], { replaceUrl: true });
      }
      else{
        this.router.navigate(['/signinPatient']);
      }
      
      return false;
    }
  }
}
