import { TestBed } from '@angular/core/testing';

import { CountryDetailResolver } from './country-detail.resolver';

describe('CountryDetailResolver', () => {
  let resolver: CountryDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CountryDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
