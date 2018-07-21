import { TestBed, inject } from '@angular/core/testing';

import { LogincheckService } from './logincheck.service';

describe('LogincheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogincheckService]
    });
  });

  it('should be created', inject([LogincheckService], (service: LogincheckService) => {
    expect(service).toBeTruthy();
  }));
});
