import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponentPatient } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponentPatient;
  let fixture: ComponentFixture<SigninComponentPatient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninComponentPatient]
    });
    fixture = TestBed.createComponent(SigninComponentPatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
