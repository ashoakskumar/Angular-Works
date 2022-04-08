import { TestBed } from '@angular/core/testing';

import { LionService } from './lion.service';

describe('LionService', () => {
  let service: LionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
