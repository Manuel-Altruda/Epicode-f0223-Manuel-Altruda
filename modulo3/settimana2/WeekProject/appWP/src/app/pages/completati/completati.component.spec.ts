import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedComponent } from './completati.component';

describe('CompletatiComponent', () => {
  let component: CompletedComponent;
  let fixture: ComponentFixture<CompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedComponent]
    });
    fixture = TestBed.createComponent(CompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
