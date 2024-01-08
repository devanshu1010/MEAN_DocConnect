import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponentPatient } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponentPatient;
  let fixture: ComponentFixture<RegistrationComponentPatient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponentPatient]
    });
    fixture = TestBed.createComponent(RegistrationComponentPatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
