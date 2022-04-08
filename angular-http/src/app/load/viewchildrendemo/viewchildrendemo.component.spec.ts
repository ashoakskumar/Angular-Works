import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildrendemoComponent } from './viewchildrendemo.component';

describe('ViewchildrendemoComponent', () => {
  let component: ViewchildrendemoComponent;
  let fixture: ComponentFixture<ViewchildrendemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchildrendemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildrendemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
