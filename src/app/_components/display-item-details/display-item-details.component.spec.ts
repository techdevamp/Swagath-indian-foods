import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayItemDetailsComponent } from './display-item-details.component';

describe('DisplayItemDetailsComponent', () => {
  let component: DisplayItemDetailsComponent;
  let fixture: ComponentFixture<DisplayItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
