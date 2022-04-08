import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidatorExampleComponent } from './custom-validator-example.component';

describe('CustomValidatorExampleComponent', () => {
  let component: CustomValidatorExampleComponent;
  let fixture: ComponentFixture<CustomValidatorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomValidatorExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomValidatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
