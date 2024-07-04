import { TestBed } from '@angular/core/testing';

import { PrediagnosticoApiService } from './prediagnostico-api.service';

describe('PrediagnosticoApiService', () => {
  let service: PrediagnosticoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrediagnosticoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
