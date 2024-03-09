import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientConsultingComponent } from './patient-consulting.component';

describe('PatientConsultingComponent', () => {
  let component: PatientConsultingComponent;
  let fixture: ComponentFixture<PatientConsultingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientConsultingComponent]
    });
    fixture = TestBed.createComponent(PatientConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
