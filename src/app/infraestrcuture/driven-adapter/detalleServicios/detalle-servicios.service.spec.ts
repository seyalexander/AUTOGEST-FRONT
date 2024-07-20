import { TestBed } from '@angular/core/testing';

import { DetalleServiciosService } from './detalle-servicios.service';

describe('DetalleServiciosService', () => {
  let service: DetalleServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
