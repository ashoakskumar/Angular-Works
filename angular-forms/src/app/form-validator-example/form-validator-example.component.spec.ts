import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidatorExampleComponent } from './form-validator-example.component';

describe('FormValidatorExampleComponent', () => {
  let component: FormValidatorExampleComponent;
  let fixture: ComponentFixture<FormValidatorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidatorExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
