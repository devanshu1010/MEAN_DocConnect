import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
  mode = 'Patient';

  constructor (private router: Router){}

  public change_mode():void {

    this.mode='Doctor';
    console.log(this.mode);
    this.router.navigate(['/signinDoctor']);
  }
}
