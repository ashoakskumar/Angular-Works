import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMartDetailComponent } from './student-mart-detail.component';

describe('StudentMartDetailComponent', () => {
  let component: StudentMartDetailComponent;
  let fixture: ComponentFixture<StudentMartDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMartDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
