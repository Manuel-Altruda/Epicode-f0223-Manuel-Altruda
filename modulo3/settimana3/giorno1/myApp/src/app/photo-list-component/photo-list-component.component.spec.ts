import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponentComponent } from './photo-list-component.component';

describe('PhotoListComponentComponent', () => {
  let component: PhotoListComponentComponent;
  let fixture: ComponentFixture<PhotoListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoListComponentComponent]
    });
    fixture = TestBed.createComponent(PhotoListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
