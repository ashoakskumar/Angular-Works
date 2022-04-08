import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App.FirstComponent } from './app.first.component';

describe('App.FirstComponent', () => {
  let component: App.FirstComponent;
  let fixture: ComponentFixture<App.FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App.FirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App.FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
