import { Component, OnInit,NgZone  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ServicesService } from '../../services.service';
import { Patient } from 'src/app/models/patient';
import { Doctor, Slot } from 'src/app/models/doctor';
import { Payment } from 'src/app/models/payment';
import { Appointment } from 'src/app/models/appointment';
import { MatDialog } from '@angular/material/dialog';
import { PaymentStatusDialogComponent } from './payment-status-dialog/payment-status-dialog.component';
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
  payment?: Payment|any;
  appointment?: Appointment|any; 
  payment_id?: string;
  selectedSlot :number = -1;
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
  temp!: number;
  no_of_days = [] as number[];
  blankdays = [] as number[];

  timeSlots: Slot[] = [];

  loading: boolean = true;

  onChangeSlot(index:number){
    this.selectedSlot = index;

    console.log(index);
  }

  // assign_selected_Slot(timeSlot: {  Time: number | undefined; Slot: number | undefined; isSelected: boolean; })
  // {
  //   this.selectedSlot = timeSlot.Time;
  //   //console.log(this.selectedSlot);
  //   this.timeSlots.forEach(slot => (slot.isSelected = false));
  //   timeSlot.isSelected = !timeSlot.isSelected;
  // }

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
      // if(this.selectedSlot == undefined)
      // {
      //   this.ngZone.run(() => {
          
      //     alert('please select Slot');
      //   });
      //   return
      // }

      const data = {
        amount : this.doctor.Counselling_fee* 100
      }
      const response: any = await this.services.createOrderId(data).toPromise();
  
      this.orderId = response.orderId;
      console.log(this.orderId);

  
      console.log(this.selectedSlot);
      console.log(this.datepickerValue);
  
      const RazorpayOptions = {
        description: 'Appointment of Dr.' + this.doctor.Name,
        amount: this.doctor.Counselling_fee * 100,
        name: `Doc-Connect + ${this.doctor.Name}`,
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
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      });
      console.log(response);
      const verificationdata = response;
      console.log('verificationdata');
      console.log(verificationdata);
      // const paymentVerificationResponse : any = await this.services.verifyPayment(response).toPromise();
      // console.log(paymentVerificationResponse);

      // Display payment verification status in a dialog
      const dialogRef = this.dialog.open(PaymentStatusDialogComponent, {
        data: verificationdata // Pass payment verification status to the dialog
      });

      // Listen to dialog's afterClosed event to handle success or failure
      dialogRef.afterClosed().subscribe(async (result) => {
        if (result) {
          // Dialog closed due to success
          // Proceed with redirection or any other actions

          this.payment = {
            RazrPay_id : response.razorpay_payment_id,
            Doctor_id : this.doctorId,
            Patient_id: this.patientId,
            Payable_amount: this.doctor.Counselling_fee,
            Status: "Paid"
          }
    
          const paymentResponse:any = await this.services.appointmentPayment(this.payment).toPromise();
    
          this.appointment = {
            Doctor_id : this.doctorId,
            Patient_id: this.patientId,
            Payment_id: paymentResponse.paymentId,
            Starting_time: this.timeSlots[this.selectedSlot].Time,
            Day: this.datepickerValue.slice(0, 3),
            Date: this.datepickerValue,
            Status : "Approved"
          }
    
          //This will also update slot to booked in Docto's Database
          const appointmentResponse:any = await this.services.bookAppointment(this.appointment).toPromise();
          console.log(appointmentResponse);
    
          console.log(appointmentResponse._id);
    
          const updateSlotObject = {
            appointment_id : appointmentResponse._id,
            day : this.getindex(this.appointment.Day),
            slotNo : this.selectedSlot,
            doctorId : this.doctor._id,
          }
    
          console.log(updateSlotObject);
    
          const doctorSlotUpdate: any = await this.services.updateDoctorSlotBook(updateSlotObject, this.doctor._id).toPromise();
    
          //After this redirect to appointment page show that not need to refresh page.
          this.ngZone.run(() => {
            alert('Your appointment is booked.');
          });

          this.router.navigate(['/dashboardPatient']);

        } else {
          // Dialog closed due to failure
          // Handle failure scenario

          this.ngZone.run(() => {
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            alert('Please try again your payment.');
          });

        }
      });
    } catch (error) {
      console.error('Error getting doctor:', error);
  
      // Handle error (e.g., display an error message)
    }
  }

  calculateSlot(){
    //console.log('calculateSlot function called');
    this.timeSlots = [];
    let date  = this.datepickerValue;
    this.selectedSlot = -1;
    //console.log(date);
    let t = date.substr(0, 3);
    //console.log(t);

    this.temp = this.getindex(t);
    // console.log(temp);

    this.timeSlots = this.doctor.Slots[this.temp];

    //console.log(this.timeSlots);

    // let time1_start = this.doctor.Starting_time_first[temp];
    // let time1_end = this.doctor.Ending_time_first[temp];
    // let time2_start = this.doctor.Starting_time_second[temp];
    // let time2_end = this.doctor.Ending_time_second[temp];

    // if(time2_start == 0)
    // {
    //   let slot = this.doctor.Slots[temp];
    //   //console.log(slot);
    //   let count1 = time1_end - time1_start;
    //   let count = 0;
    //   //console.log(count);
    //   while (count1 >0 ) {
        
    //     const timeSlot = {
    //       Time: time1_start,
    //       Slot : slot[count],
    //       isSelected: false
    //     };

    //     this.timeSlots.push(timeSlot);
    //     count += 1;
    //     time1_start += 1;
    //     count1 -= 1;
    //   }
    // }
    // else
    // {
    //   let slot = this.doctor.Slots[temp];
    //   //console.log(slot);
    //   let count1 = time1_end - time1_start;
    //   let count = 0;
    //   //console.log(count);
    //   while (count1 >0 ) {
        
    //     const timeSlot = {
    //       Time: time1_start,
    //       Slot : slot[count],
    //       isSelected: false
    //     };

    //     this.timeSlots.push(timeSlot);
    //     count += 1;
    //     time1_start += 1;
    //     count1 -= 1;
    //   }

    //   let count2 = time2_end - time2_start;

    //   while (count2 >0 ) {
        
    //     const timeSlot = {
    //       Time: time2_start,
    //       Slot : slot[count],
    //       isSelected: false
    //     };

    //     this.timeSlots.push(timeSlot);
    //     count += 1;
    //     time2_start += 1;
    //     count2 -= 1;
    //   }

    // }

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
    nextWeek.setDate(tomorrow.getDate() + 5);
  
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

  constructor(private route: ActivatedRoute,private services : ServicesService,private router: Router,private ngZone: NgZone , private dialog: MatDialog) {}

  async ngOnInit() : Promise<void> {

    try {
      this.loading = true;
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
          // this.patientId = localStorage.getItem('userId');
          this.patient = await this.services.getPatient().toPromise();
          console.log(this.patient);

          this.loading = false;

          // setTimeout(async () => {
          //   try {
          //     // Fetch the doctor details using the service
              
          //     // Reset loading when the data is fetched successfully
          //     this.loading = false;
          //     // You can perform other operations with this.doctor if needed
          //   } catch (error) {
          //     console.error('Error fetching doctor details:', error);
          //     // Handle the error if needed
          //     this.loading = false; // Ensure loading is reset in case of an error
          //   }
          // }, 2000);
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
