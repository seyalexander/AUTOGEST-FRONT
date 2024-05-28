import { TestBed } from '@angular/core/testing';

import { OrdenTrabajoApiService } from './orden-trabajo-api.service';

describe('OrdenTrabajoApiService', () => {
  let service: OrdenTrabajoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenTrabajoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
