import { TestBed } from '@angular/core/testing';

import { AutenticationApiService } from './autentication-api.service';

describe('AutenticationApiService', () => {
  let service: AutenticationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
