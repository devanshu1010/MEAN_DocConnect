import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  constructor(private router: Router){}
  redirect()
  {
    let mode = localStorage.getItem('mode');

    if(mode == 'Doctor')
    {
      this.router.navigate(['/homedoctor']);

    }else if( mode == 'Patient' || mode == null)
    {
      this.router.navigate(['/']);
    }
    else{
      
    }
  }

}
