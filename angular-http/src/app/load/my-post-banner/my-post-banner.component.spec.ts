import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostBannerComponent } from './my-post-banner.component';

describe('MyPostBannerComponent', () => {
  let component: MyPostBannerComponent;
  let fixture: ComponentFixture<MyPostBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPostBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPostBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
