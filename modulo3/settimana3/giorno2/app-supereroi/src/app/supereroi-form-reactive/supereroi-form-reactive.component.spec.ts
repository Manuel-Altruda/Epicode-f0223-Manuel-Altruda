import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupereroiFormReactiveComponent } from './supereroi-form-reactive.component';

describe('SupereroiFormReactiveComponent', () => {
  let component: SupereroiFormReactiveComponent;
  let fixture: ComponentFixture<SupereroiFormReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupereroiFormReactiveComponent]
    });
    fixture = TestBed.createComponent(SupereroiFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
