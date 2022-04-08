import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpItrDiffComponent } from './emp-itr-diff.component';

describe('EmpItrDiffComponent', () => {
  let component: EmpItrDiffComponent;
  let fixture: ComponentFixture<EmpItrDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpItrDiffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpItrDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
