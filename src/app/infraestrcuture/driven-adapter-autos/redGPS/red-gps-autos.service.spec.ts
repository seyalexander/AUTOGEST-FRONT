import { TestBed } from '@angular/core/testing';

import { RedGpsAutosService } from './red-gps-autos.service';

describe('RedGpsAutosService', () => {
  let service: RedGpsAutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedGpsAutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
