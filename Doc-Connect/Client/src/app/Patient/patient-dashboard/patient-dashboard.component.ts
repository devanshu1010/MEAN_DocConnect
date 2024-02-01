import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

enum Tab {
  Profile = 'profile',
  Appointments = 'appointments',
  Slots = 'slots'
}

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css'],
  animations: [
    trigger('slideIndicator', [
      state('1', style({ transform: 'translateY(0px)' })),
      state('2', style({ transform: 'translateY(52px)' })),
      state('3', style({ transform: 'translateY(104px)' })),
      transition('* => *', animate('0.5s ease-out'))
    ]),
    trigger('slideA', [
      state('1', style({ transform: 'translateX(+30px)' })),
      state('0', style({ transform: 'translateY(0px)' })),
      transition('* => *', animate('0.5s ease-out'))
    ])
  ]
})
export class PatientDashboardComponent 
{
  activeTab: Tab = Tab.Profile;

  profile: any; 
  appointments: any; 
  slots: any; 

  get Tab() {
    return Tab;
  }

  getshow(tab: string)
  {
    return tab === this.activeTab ? 1 : 0;
  }

  getTabIndex(tab: string): string {
    if (tab === 'profile') {
      return '1';  // Current tab, higher index
    } else if (tab === 'appointments') {
      return '2';  // Tab with label 'appointments'
    } else if (tab === 'slots') {
      return '3';  // Tab with label 'slots'
    } else {
      return '0';  // Other tabs, lower index
    }
  }
  view_profile(): void {
    this.activeTab = Tab.Profile;
    this.profile = true;
    this.appointments = false;
    this.slots = false;
  }

  // Change active tab to Appointments
  view_appointments(): void {
    this.activeTab = Tab.Appointments;
    this.profile = false;
    this.appointments = true;
    this.slots = false;
    console.log('activeTab:', this.activeTab);
  }

  // Change active tab to Slots
  view_slots(): void {
    this.activeTab = Tab.Slots;
    this.profile = false;
    this.appointments = false;
    this.slots = true;
  }

}
