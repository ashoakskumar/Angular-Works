import { TestBed } from '@angular/core/testing';

import { CountryEditCanDeactivateGuard } from './country-edit-can-deactivate.guard';

describe('CountryEditCanDeactivateGuard', () => {
  let guard: CountryEditCanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CountryEditCanDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
