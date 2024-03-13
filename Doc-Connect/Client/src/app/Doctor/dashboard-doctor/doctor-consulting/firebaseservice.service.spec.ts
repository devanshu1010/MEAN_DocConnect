import { TestBed } from '@angular/core/testing';

import { FirebaseserviceService } from './firebaseservice.service';

describe('FirebaseserviceService', () => {
  let service: FirebaseserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
