import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { ServicesService } from 'src/app/Patient/services.service';

@Component({
  selector: 'app-payment-status-dialog',
  templateUrl: './payment-status-dialog.component.html',
  styleUrls: ['./payment-status-dialog.component.css']
})
export class PaymentStatusDialogComponent implements OnInit {
  verificationDone: boolean = false;
  verificationResult: boolean = false;
  verificationMessage: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any ,private services : ServicesService, private dialogRef: MatDialogRef<PaymentStatusDialogComponent>) { }

  ngOnInit(): void {
    this.verifyPayment();
  }

  async verifyPayment(): Promise<void> {
    // Simulate payment verification process with a delay (replace with actual verification logic)
    // console.log('data');
    // console.log(this.data);
    const paymentVerificationResponse = await this.services.verifyPayment(this.data).toPromise();
      

    // Example: Replace with your actual payment verification logic
    const paymentVerificationResult = paymentVerificationResponse.signatureIsValid; // Assuming data.success indicates payment verification result

    // Update verification status and message
    this.verificationDone = true;
    this.verificationResult = paymentVerificationResult;
    this.verificationMessage = paymentVerificationResult ? 'Payment verified successfully' : 'Payment verification failed';

    // If payment is not verified, display appropriate message and handle refund logic
    if (!paymentVerificationResult) {
      // Example: Implement refund logic here
      this.verificationMessage += '. Refund will be initiated.';
    }

    this.closeDialogAfterDelay(this.verificationResult); 
  }

  closeDialogAfterDelay(success: boolean): void {
    setTimeout(() => {
      // Close the dialog and pass success/failure status
      this.dialogRef.close(success);
    }, 5000);
  }
}
