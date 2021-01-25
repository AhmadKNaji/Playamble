import { TestBed } from '@angular/core/testing';

import { DctService } from './dct.service';

describe('DctService', () => {
  let service: DctService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DctService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
