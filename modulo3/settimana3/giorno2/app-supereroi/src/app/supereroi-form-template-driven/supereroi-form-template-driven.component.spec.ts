import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupereroiFormTemplateDrivenComponent } from './supereroi-form-template-driven.component';

describe('SupereroiFormTemplateDrivenComponent', () => {
  let component: SupereroiFormTemplateDrivenComponent;
  let fixture: ComponentFixture<SupereroiFormTemplateDrivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupereroiFormTemplateDrivenComponent]
    });
    fixture = TestBed.createComponent(SupereroiFormTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
