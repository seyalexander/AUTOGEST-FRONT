import { TestBed } from '@angular/core/testing';

import { CleinteGuardService } from './cleinte-guard.service';

describe('CleinteGuardService', () => {
  let service: CleinteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CleinteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
