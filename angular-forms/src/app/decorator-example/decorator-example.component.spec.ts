import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorExampleComponent } from './decorator-example.component';

describe('DecoratorExampleComponent', () => {
  let component: DecoratorExampleComponent;
  let fixture: ComponentFixture<DecoratorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoratorExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
