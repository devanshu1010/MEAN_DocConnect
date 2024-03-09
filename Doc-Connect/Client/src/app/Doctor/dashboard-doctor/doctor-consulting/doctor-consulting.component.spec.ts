import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorConsultingComponent } from './doctor-consulting.component';

describe('DoctorConsultingComponent', () => {
  let component: DoctorConsultingComponent;
  let fixture: ComponentFixture<DoctorConsultingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorConsultingComponent]
    });
    fixture = TestBed.createComponent(DoctorConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
