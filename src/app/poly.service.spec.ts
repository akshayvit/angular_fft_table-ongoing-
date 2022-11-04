import { TestBed } from '@angular/core/testing';

import { PolyService } from './poly.service';

describe('PolyService', () => {
  let service: PolyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
