import { TestBed } from '@angular/core/testing';

import { RecepcionApiService } from './recepcion-api.service';

describe('RecepcionApiService', () => {
  let service: RecepcionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecepcionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
