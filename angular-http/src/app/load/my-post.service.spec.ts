import { TestBed } from '@angular/core/testing';

import { MyPostService } from './my-post.service';

describe('MyPostService', () => {
  let service: MyPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
