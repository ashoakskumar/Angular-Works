import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpKeyDiffComponent } from './emp-key-diff.component';

describe('EmpKeyDiffComponent', () => {
  let component: EmpKeyDiffComponent;
  let fixture: ComponentFixture<EmpKeyDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpKeyDiffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpKeyDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
