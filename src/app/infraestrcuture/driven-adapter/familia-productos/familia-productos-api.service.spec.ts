import { TestBed } from '@angular/core/testing';

import { FamiliaProductosApiService } from './familia-productos-api.service';

describe('FamiliaProductosApiService', () => {
  let service: FamiliaProductosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamiliaProductosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
