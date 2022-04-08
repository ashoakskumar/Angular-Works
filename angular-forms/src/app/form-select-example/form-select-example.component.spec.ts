import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectExampleComponent } from './form-select-example.component';

describe('FormSelectExampleComponent', () => {
  let component: FormSelectExampleComponent;
  let fixture: ComponentFixture<FormSelectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSelectExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSelectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
