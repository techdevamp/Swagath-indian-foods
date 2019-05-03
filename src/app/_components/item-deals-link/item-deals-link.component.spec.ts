import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDealsLinkComponent } from './item-deals-link.component';

describe('ItemDealsLinkComponent', () => {
  let component: ItemDealsLinkComponent;
  let fixture: ComponentFixture<ItemDealsLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDealsLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDealsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
