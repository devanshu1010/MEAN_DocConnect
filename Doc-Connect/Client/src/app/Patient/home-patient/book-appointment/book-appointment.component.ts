import { Component, OnInit,NgZone  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ServicesService } from '../../services.service';
import { Patient } from 'src/app/models/patient';
import { Doctor } from 'src/app/models/doctor';
// import * as Razorpay from 'razorpay';


declare var Razorpay : any;

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  doctorId?: number;
  doctor?: Doctor|any; // Adjust the type accordingly
  patient?:Patient|any;
  patientId?: number | any;
  orderId?: string;  //to establich secure connection between client and razorpay server and to create orderid
  selectedSlot :number|undefined;
  MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  showDatepicker = false;
  datepickerValue!: string;
  today!: string;
  minDate!: string;
  maxDate!: string;
  month!: number; // !: mean promis it will not be null, and it will definitely be assigned
  year!: number;
  day!: number;
  indexofday!: number;  
  no_of_days = [] as number[];
  blankdays = [] as number[];

  timeSlots: {  Time: number | undefined; Slot: number | undefined; isSelected: boolean; }[] = [];

  loading: boolean = true;

  assign_selected_Slot(timeSlot: {  Time: number | undefined; Slot: number | undefined; isSelected: boolean; })
  {
    this.selectedSlot = timeSlot.Time;
    //console.log(this.selectedSlot);
    this.timeSlots.forEach(slot => (slot.isSelected = false));
    timeSlot.isSelected = !timeSlot.isSelected;
  }

  getindex(str : string)
  {
    let temp:number = 0;

    switch (str) {
      case 'Mon':
        temp =0;
        break;
      case 'Tue':
        temp =1;
        break;
      case 'Wed':
        temp =2;
        break;
      case 'Thu':
        temp =3;
        break;
      case 'Fri':
        temp =4;
        break;
      case 'Sat':
        temp =5;
        break;
      case 'Sun':
        temp =6;
        break;
      default:
        temp =0;
        break;
    }

    return temp;
  }

  async bookAppointment() {
    try {

      if(this.selectedSlot == undefined)
      {
        this.ngZone.run(() => {
          
          alert('please select Slot');
        });
        return
      }

      const data = {
        amount : this.doctor.Counselling_fee* 100
      }
      const response: any = await this.services.createOrderId(data).toPromise();
  
      this.orderId = response.orderId;
      console.log(this.orderId);

  
      console.log(this.selectedSlot);
  
      const RazorpayOptions = {
        description: 'Appointment of Dr.' + this.doctor.Name,
        amount: this.doctor.Counselling_fee * 100,
        name: 'Doc-Connect',// + this.doctor.Name,
        key: 'rzp_test_C7vohyckaiJWR6',
        image: '../assets/Logo/logo21.jpg',
        order_id: this.orderId,
        handler: (response: any) => this.handlePaymentResponse(response),
        prefill: {
          name: this.patient.Name,
          email: this.patient.Email,
          phone: this.patient.Phone_no
        },
        theme: {
          color: '#528FF0'
        },
        modal: {
          ondismiss: () => {
            console.log('dismissed');
          }
        }
      };

      const rzp1 = new Razorpay(RazorpayOptions);

      rzp1.on('payment.failed', (response: any) => {
        this.ngZone.run(() => {
          // Use Angular's NgZone to ensure UI updates are triggered
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
      });
  
      rzp1.open();

      // const successCallback = (paymentId: any) => {
      //   console.log('Payment successful. Payment ID:', paymentId);
      // };
  
      // const failureCallback = (e: any) => {
      //   console.log(e);
      // };
  
      // Razorpay.open(RazorpayOptions, successCallback, failureCallback);
    } catch (error) {
      console.error('Error getting doctor:', error);
  
      // Handle error (e.g., display an error message)
    }
  }  

 
  private async handlePaymentResponse(response: any) {
    try {
      this.ngZone.run(() => {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      });

      
      const responses: any = await this.services.verifyPayment(response).toPromise();
  
      
    } catch (error) {
      console.error('Error getting doctor:', error);
  
      // Handle error (e.g., display an error message)
    }
    
  }

  calculateSlot(){
    //console.log('calculateSlot function called');
    this.timeSlots = [];
    let date  = this.datepickerValue;
    //console.log(date);
    let t = date.substr(0, 3);
    //console.log(t);

    let temp : number = 0;
    temp = this.getindex(t);
    // console.log(temp);

    let time1_start = this.doctor.Starting_time_first[temp];
    let time1_end = this.doctor.Ending_time_first[temp];
    let time2_start = this.doctor.Starting_time_second[temp];
    let time2_end = this.doctor.Ending_time_second[temp];

    if(time2_start == 0)
    {
      let slot = this.doctor.Slots[temp];
      //console.log(slot);
      let count1 = time1_end - time1_start;
      let count = 0;
      //console.log(count);
      while (count1 >0 ) {
        
        const timeSlot = {
          Time: time1_start,
          Slot : slot[count],
          isSelected: false
        };

        this.timeSlots.push(timeSlot);
        count += 1;
        time1_start += 1;
        count1 -= 1;
      }
    }
    else
    {
      let slot = this.doctor.Slots[temp];
      //console.log(slot);
      let count1 = time1_end - time1_start;
      let count = 0;
      //console.log(count);
      while (count1 >0 ) {
        
        const timeSlot = {
          Time: time1_start,
          Slot : slot[count],
          isSelected: false
        };

        this.timeSlots.push(timeSlot);
        count += 1;
        time1_start += 1;
        count1 -= 1;
      }

      let count2 = time2_end - time2_start;

      while (count2 >0 ) {
        
        const timeSlot = {
          Time: time2_start,
          Slot : slot[count],
          isSelected: false
        };

        this.timeSlots.push(timeSlot);
        count += 1;
        time2_start += 1;
        count2 -= 1;
      }

    }

    // console.log(this.timeSlots);

  }

  initDate() {
    let today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
    this.day = today.getDate();
    this.datepickerValue = new Date(this.year, this.month, today.getDate()+1).toDateString();
    this.today = new Date(this.year, this.month, today.getDate()).toDateString();
    this.minDate = new Date(this.year, this.month, today.getDate() + 1).toDateString();
    this.maxDate = new Date(this.year, this.month, today.getDate() + 7).toDateString();

    //console.log(this.minDate);
    //console.log(this.maxDate);
  }

  isToday(date: any) {
    const today = new Date();
    const d = new Date(this.year, this.month, date);
    return today.toDateString() === d.toDateString() ? true : false;
  }

  getDateValue(date: any) {
    let selectedDate = new Date(this.year, this.month, date);
    this.datepickerValue = selectedDate.toDateString();
    this.showDatepicker = false;
  }

  getNoOfDays() {
    // Get the current date
    const today = new Date();
  
    // Calculate the date for tomorrow
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
  
    // Calculate the date for 7 days from tomorrow
    const nextWeek = new Date(tomorrow);
    nextWeek.setDate(tomorrow.getDate() + 6);
  
    // Get the total number of days in the current month
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    
    // console.log(daysInMonth);
    // Find where to start the calendar day of the week
    // console.log("month : ",this.month);
    // console.log("month : ",today.getMonth());
    let dayOfWeek;
    if(this.month === today.getMonth())
    {
      dayOfWeek = new Date(this.year, this.month, today.getDate() + 1).getDay();
    }
    else{
      let firstDayOfMonth = new Date(this.year, this.month, 1);
      dayOfWeek = firstDayOfMonth.getDay();
    }
    // let dayOfWeek = new Date(this.year, this.month, today.getDate() + 1).getDay(); // Start of the month
    //let dayOfWeek = new Date(this.year, this.month, 1).getDay();
    

    // console.log(dayOfWeek);

    let blankdaysArray = [];
    for (let i = 0; i < dayOfWeek; i++) {
      blankdaysArray.push(i);
    }
    
    // console.log(blankdaysArray);
    // Array to store days within the next 7 days
    let daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(this.year, this.month, i);
  
      // Include only dates starting from tomorrow and within the next 7 days
      if (currentDate >= today && currentDate <= nextWeek) {
        daysArray.push(i);
      }
    }
    
    //console.log(daysArray);
    // Update the component properties with the calculated arrays
    this.blankdays = blankdaysArray;
    this.no_of_days = daysArray;
  }
  

  trackByIdentity = (index: number, item: any) => item;

  constructor(private route: ActivatedRoute,private services : ServicesService,private router: Router,private ngZone: NgZone) {}

  async ngOnInit() : Promise<void> {

    try {
      let isLogin = localStorage.getItem('isLogin');

      if(isLogin == "false" || isLogin == null) 
      {
        //console.log(isLogin);
        // console.log("going to signin");
        await this.router.navigate(['/signinPatient'], { replaceUrl: true });
      }
      else{
        //console.log(isLogin);
        // Read the doctorId from the route parameters
        //console.log("hello");
        const params = await this.route.params.pipe(first()).toPromise();
        //console.log(params);
        const id = params?.['id']; // Access the correct property name
      
        if (id !== undefined) {
          this.doctorId = id;
          this.doctor = await this.services.getDoctor(this.doctorId).toPromise();
          this.patientId = localStorage.getItem('userId');
          this.patient = await this.services.getPatient(this.patientId).toPromise();
          console.log(this.patient);

          setTimeout(async () => {
            try {
              // Fetch the doctor details using the service
              
              // Reset loading when the data is fetched successfully
              this.loading = false;
              // You can perform other operations with this.doctor if needed
            } catch (error) {
              console.error('Error fetching doctor details:', error);
              // Handle the error if needed
              this.loading = false; // Ensure loading is reset in case of an error
            }
          }, 2000);
          //this.doctor = await this.services.getDoctor(this.doctorId).toPromise();
          
          //console.log("Home Page");
          //console.log(this.doctor);
        } else {
            console.error("Error: 'id' parameter is undefined.");
        }
        this.initDate();
        this.getNoOfDays(); 
        this.calculateSlot();
      }
    } catch (error) {
      console.error("error", error);
    }
  }
}
