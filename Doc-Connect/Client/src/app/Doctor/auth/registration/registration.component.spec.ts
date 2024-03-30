import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponentDoctor } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponentDoctor;
  let fixture: ComponentFixture<RegistrationComponentDoctor>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponentDoctor]
    });
    fixture = TestBed.createComponent(RegistrationComponentDoctor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
