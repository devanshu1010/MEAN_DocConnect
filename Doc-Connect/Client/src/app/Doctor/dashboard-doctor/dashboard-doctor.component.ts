import { Component, OnInit } from '@angular/core';
import { DoctorDashboardService } from './doctor-dashboard.service';
import { DoctorService } from '../doctor.service';
import { Doctor, Slot } from 'src/app/models/doctor';
import { DatePipe } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

enum Tab {
  Profile = 'profile',
  Appointments = 'appointments',
  Slots = 'slot'
}

@Component({
  selector: 'app-dashboard-doctor',
  templateUrl: './dashboard-doctor.component.html',
  styleUrls: ['./dashboard-doctor.component.css'],
  animations: [
    trigger('slideIndicator', [
      state('1', style({ transform: 'translateY(0px)' })),
      state('2', style({ transform: 'translateY(52px)' })),
      state('3', style({ transform: 'translateY(104px)' })),
      transition('* => *', animate('0.3s ease-out'))
    ]),
    trigger('slideA', [
      state('1', style({ transform: 'translateX(+30px)' })),
      state('0', style({ transform: 'translateY(0px)' })),
      transition('* => *', animate('0.3s ease-out'))
    ])
  ]
})
export class DashboardDoctorComponent implements OnInit {

  slotFirstRelatedString: string = '';
  slotSecondeRelatedString: string = '';

  activeTab: Tab = Tab.Profile;
  doctor!: Doctor;
  doctorId: any;
  birthday: any | undefined;

  startTimeFirst: string = '';
  endTimeFirst: string = '';
  startTimeSecond: string = '';
  endTimeSecond: string = '';

  compareTimes(endTime: string, startTime: string): boolean {
    const endDateTime = new Date(`1970-01-01T${endTime}`);
    const startDateTime = new Date(`1970-01-01T${startTime}`);

    return endDateTime <= startDateTime;
  }

  selectedTime: any;

  profile: any;
  appointments: any;
  slot: any;

  isEditProfileModalOpen = false;

  currdate: Date = new Date();
  todaydate: any;
  today: any;

  days: string[] = ['Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // timeSlots: { day: Date; break: string; startTimeFirst: number | undefined; endTimeFirst: number | undefined; startTimeSecond: number | undefined; endTimeSecond: number | undefined }[] = [];

  selectedslots: any = -1;

  disableRadio: boolean = true;

  slotTiming = [
    { label: '15 minute', value: 15 },
    { label: '30 minute', value: 30 },
    { label: '45 minute', value: 45 },
    { label: '60 minute', value: 60 },
  ]

  // days = [
  //   { label: 'Select Your Day for slot', value: -1 },
  // ];

  selectedDay: number = -1;

  Alldays = [
    { label: 'Select Your Day for slot', value: -1 },
    { label: 'Monday', value: 0 },
    { label: 'Tuesday', value: 1 },
    { label: 'Wednesday', value: 2 },
    { label: 'Thursday', value: 3 },
    { label: 'Friday', value: 4 },
    { label: 'Saturday', value: 5 },
    { label: 'Sunday', value: 6 }
  ];

  isButtonDisabled = true;

  onChangeFee(){
    if(this.doctor.Counselling_fee < 0)
      this.isButtonDisabled = true;

    else  
      this.isButtonDisabled = false;  
  }

  onChange() {
    this.isButtonDisabled = this.compareTimes(this.endTimeFirst, this.startTimeFirst) || this.compareTimes(this.endTimeSecond, this.startTimeSecond) || this.compareTimes(this.startTimeSecond, this.endTimeFirst)

    if ((this.startTimeFirst === '' || this.endTimeFirst === ''))
      this.isButtonDisabled = true;

    if ((this.startTimeSecond === '' && this.endTimeSecond !== ''))
      this.isButtonDisabled = true;

    if ((this.startTimeSecond !== '' && this.endTimeSecond === ''))
      this.isButtonDisabled = true;

    console.log(this.isButtonDisabled);
  }

  openEditProfilePopup() {
    this.isEditProfileModalOpen = true;
  }

  closeModal() {
    this.isEditProfileModalOpen = false;
  }

  constructor(
    public doctorServ: DoctorService,
    private datePipe: DatePipe
  ) { }
  get Tab() {
    return Tab;
  }

  getshow(tab: string) {
    return tab === this.activeTab ? 1 : 0;
  }

  getTabIndex(tab: string): string {
    if (tab === 'profile') {
      return '1';  // Current tab, higher index
    } else if (tab === 'appointments') {
      return '2';  // Tab with label 'appointments'
    } else if (tab === 'slot') {
      return '3';  // Tab with label 'slot'
    } else {
      return '0';  // Other tabs, lower index
    }
  }
  view_profile(): void {
    this.activeTab = Tab.Profile;
    this.profile = true;
    this.appointments = false;
    this.slot = false;
  }

  // Change active tab to Appointments
  view_appointments(): void {
    this.activeTab = Tab.Appointments;
    this.profile = false;
    this.appointments = true;
    this.slot = false;
    console.log('activeTab:', this.activeTab);
  }

  // Change active tab to Slots
  view_slots(): void {
    this.activeTab = Tab.Slots;
    this.profile = false;
    this.appointments = false;
    this.slot = true;
    console.log('activeTab:', this.activeTab);
  }


  // calculateTimeSlots() {

  //   this.timeSlots.splice(0, this.timeSlots.length);
  //   this.Alldays.splice(1, this.Alldays.length);

  //   //console.log("timeslots : {0}",this.timeSlots);
  //   //console.log("days : {0}",this.days);

  //   const today = new Date();
  //   const tomorrow = new Date();
  //   tomorrow.setDate(today.getDate() + 1); // Get the date for tomorrow

  //   for (let i = 0; i < 7; i++) {

  //     const currentDate = new Date();
  //     currentDate.setDate(tomorrow.getDate() + i);

  //     const _day = this.datePipe.transform(currentDate, 'EEEE');
  //     const __day: string = _day !== null ? _day : 'DefaultDay';

  //     let temp: number = 0;

  //     switch (__day) {
  //       case 'Monday':
  //         temp = 0;
  //         break;
  //       case 'Tuesday':
  //         temp = 1;
  //         break;
  //       case 'Wednesday':
  //         temp = 2;
  //         break;
  //       case 'Thursday':
  //         temp = 3;
  //         break;
  //       case 'Friday':
  //         temp = 4;
  //         break;
  //       case 'Saturday':
  //         temp = 5;
  //         break;
  //       case 'Sunday':
  //         temp = 6;
  //         break;
  //       default:
  //         temp = 0;
  //         break;
  //     }
  //     //console.log(temp);

  //     // Replace 'yourStartTime' and 'yourEndTime' with your actual time slot values
  //     /*const timeSlot = {
  //       day: currentDate,
  //       break : this.doctor?.Starting_time_second[temp] == 0 ? "No"  : "Yes",
  //       startTimeFirst: this.doctor?.Starting_time_first[temp],
  //       endTimeFirst: this.doctor?.Ending_time_first[temp],
  //       startTimeSecond:this.doctor?.Starting_time_second[temp],
  //       endTimeSecond:this.doctor?.Ending_time_second[temp],
  //     };

  //     const tempday = {
  //       label: __day,
  //       value: temp
  //     };

  //     this.days.push(tempday);
  //     this.timeSlots.push(timeSlot);*/
  //   }
  //   //console.log("timeSlots : ");
  //   //console.log(this.timeSlots);
  // }

  updateDoctor(updatedDoctor: Doctor): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      console.log(this.doctorId);
      // Use your DoctorService to update the doctor data
      this.doctorServ.updateDoctor(this.doctorId, updatedDoctor).subscribe(
        async data => {
          // Handle successful update, maybe show a success message
          console.log('Doctor updated successfully');
          // Reload the doctor data after the update
          await this.loadDoctorData();
          resolve();
        },
        error => {
          console.error('Error updating doctor', error);
          // Handle error, maybe show an error message
          reject(error);
        }
      );
    }
    );
  }

  loadDoctorData(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.doctorId = localStorage.getItem('userId');

      this.doctorServ.getDoctor(this.doctorId).subscribe(
        data => {
          this.doctor = data;
          console.log("DashBoard");
          console.log(this.doctor);

          // Convert UTC date to India time zone
          this.birthday = this.datePipe.transform(this.doctor?.DoB, 'd MMM, yyyy');
          //this.calculateTimeSlots();
          resolve();
        },
        error => {
          console.error("error", error);
          reject(error);
        }
      );
    });
  }

  onTimeSet(event: any) {
    this.selectedTime = event;
    console.log('Selected Time:', this.selectedTime);
    // Perform additional actions if needed
  }

  provideslotFirstOption(userProvidedStartTime: string, endTime: string, slotLength: number): { floorSlots: string[], ceilSlots: string[], floorEndTime: string, ceilEndTime: string } {
    const floorSlots: string[] = [];
    const ceilSlots: string[] = [];

    // Parse user-provided starting time string into Date object
    var [startHour, startMinute] = userProvidedStartTime.split(':').map(Number);

    // Create a Date object with the specified starting time
    const userProvidedStartTimeDate = new Date(1970, 0, 1, startHour, startMinute);

    // Parse end time string into Date object
    [startHour, startMinute] = endTime.split(':').map(Number);
    const endDate = new Date(1970, 0, 1, startHour, startMinute);

    // Calculate the total available time in minutes
    const totalAvailableTime = (endDate.getTime() - userProvidedStartTimeDate.getTime()) / (60 * 1000);

    // Calculate the adjusted end time using both floor and ceil
    const adjustedEndTimeFloorMinutes = Math.floor(totalAvailableTime / slotLength) * slotLength;
    const adjustedEndTimeCeilMinutes = Math.ceil(totalAvailableTime / slotLength) * slotLength;

    const endDateFloor = new Date(userProvidedStartTimeDate.getTime() + adjustedEndTimeFloorMinutes * 60 * 1000);
    const endDateCeil = new Date(userProvidedStartTimeDate.getTime() + adjustedEndTimeCeilMinutes * 60 * 1000);

    // Loop through the time range and allocate floor slots
    let startDate = new Date(userProvidedStartTimeDate);
    while (startDate.getTime() + slotLength * 60 * 1000 <= endDateFloor.getTime()) {
      const slotStart = startDate.toTimeString().slice(0, 5);
      const slotEnd = new Date(startDate.getTime() + slotLength * 60 * 1000).toTimeString().slice(0, 5);

      // Store or process the slot as needed
      const slot = `${slotStart}`;
      floorSlots.push(slot);

      // Move to the next slot
      startDate.setTime(startDate.getTime() + slotLength * 60 * 1000);
    }

    // Reset start date for ceil slots
    startDate = new Date(userProvidedStartTimeDate);

    console.log(startDate);

    // Loop through the time range and allocate ceil slots
    while (startDate.getTime() + slotLength * 60 * 1000 <= endDateCeil.getTime()) {
      const slotStart = startDate.toTimeString().slice(0, 5);
      const slotEnd = new Date(startDate.getTime() + slotLength * 60 * 1000).toTimeString().slice(0, 5);

      // Store or process the slot as needed
      const slot = `${slotStart}`;
      ceilSlots.push(slot);

      // Move to the next slot
      startDate.setTime(startDate.getTime() + slotLength * 60 * 1000);
    }

    // Calculate the end time of the last slot for both floor and ceil
    const floorEndTime = endDateFloor.toTimeString().slice(0, 5);
    const ceilEndTime = endDateCeil.toTimeString().slice(0, 5);


    return { floorSlots, ceilSlots, floorEndTime, ceilEndTime };
  }

  async submitForm() {

    console.log("Inside submitForm");

    const slotLength = this.doctor.Slot_length;
    var slotTemp: Slot[] = [];

    const slotFirstOption = this.provideslotFirstOption(this.startTimeFirst, this.endTimeFirst, slotLength);

    this.slotFirstRelatedString = '';
    this.slotSecondeRelatedString = '';

    if (slotFirstOption.floorEndTime != slotFirstOption.ceilEndTime) {
      if (slotFirstOption.floorEndTime == this.startTimeFirst) {
        this.slotFirstRelatedString = `You should select ending time ${slotFirstOption.ceilEndTime} for utilize your all time`;
        return;
      }
      this.slotFirstRelatedString = `You should select ending time ${slotFirstOption.floorEndTime} or ${slotFirstOption.ceilEndTime} for utilize your all time`;
      return;
    }

    if(this.startTimeSecond !== '')
    {
      const slotSecondOption = this.provideslotFirstOption(this.startTimeSecond, this.endTimeSecond, slotLength);

      if (slotSecondOption.floorEndTime != slotSecondOption.ceilEndTime) {
        if (slotSecondOption.floorEndTime == this.startTimeSecond) {
          this.slotSecondeRelatedString = `You should select ending time of First ${slotSecondOption.ceilEndTime} for utilize your all time`;
          return;
        }
        this.slotSecondeRelatedString = `You should select ending time for Second ${slotSecondOption.floorEndTime} or ${slotSecondOption.ceilEndTime} for utilize your all time`;
        return;
      }

      slotSecondOption.floorSlots.forEach(element => {
        const temp: Slot = {
          Time : element,
          Booked : false,
          Canceled : false,
        }
        slotTemp.push(temp);
      });
      console.log(slotSecondOption.floorSlots);
    }

    console.log(this.doctor.Counselling_fee);
    console.log(this.selectedDay);
    console.log(this.startTimeFirst);
    console.log(this.endTimeFirst);
    console.log(this.startTimeSecond);
    console.log(this.endTimeSecond);
    console.log(slotFirstOption.floorSlots);

    this.doctor.Starting_time_first[this.selectedDay] = this.startTimeFirst;
    this.doctor.Ending_time_first[this.selectedDay] = this.endTimeFirst;
    this.doctor.Starting_time_second[this.selectedDay] = this.startTimeSecond;
    this.doctor.Ending_time_second[this.selectedDay] = this.endTimeSecond;

    slotFirstOption.floorSlots.forEach(element => {
      const temp: Slot = {
        Time : element,
        Booked : false,
        Canceled : false,
      }
      slotTemp.push(temp);
    });

    this.doctor.Slots[this.selectedDay] = slotTemp;

    await this.updateDoctor(this.doctor);
    await this.loadDoctorData();
  }


  async ngOnInit(): Promise<void> {

    await this.loadDoctorData();
    this.view_profile();
    console.log(this.doctorId);
    this.today = this.datePipe.transform(this.currdate, 'EEEE');
    this.todaydate = this.datePipe.transform(this.currdate, 'MMMM d');
  }
}
