import { TestBed } from '@angular/core/testing';

import { ReparacionApiService } from './reparacion-api.service';

describe('ReparacionApiService', () => {
  let service: ReparacionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReparacionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
