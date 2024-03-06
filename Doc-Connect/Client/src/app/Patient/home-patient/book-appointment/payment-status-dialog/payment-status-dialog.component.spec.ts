import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatusDialogComponent } from './payment-status-dialog.component';

describe('PaymentStatusDialogComponent', () => {
  let component: PaymentStatusDialogComponent;
  let fixture: ComponentFixture<PaymentStatusDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentStatusDialogComponent]
    });
    fixture = TestBed.createComponent(PaymentStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
