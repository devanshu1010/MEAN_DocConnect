import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponentDoctor } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponentDoctor;
  let fixture: ComponentFixture<NavbarComponentDoctor>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponentDoctor]
    });
    fixture = TestBed.createComponent(NavbarComponentDoctor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
