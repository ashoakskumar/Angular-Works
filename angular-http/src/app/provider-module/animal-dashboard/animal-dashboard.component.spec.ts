import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDashboardComponent } from './animal-dashboard.component';

describe('AnimalDashboardComponent', () => {
  let component: AnimalDashboardComponent;
  let fixture: ComponentFixture<AnimalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
