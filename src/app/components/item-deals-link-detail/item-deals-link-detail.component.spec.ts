import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDealsLinkDetailComponent } from './item-deals-link-detail.component';

describe('ItemDealsLinkDetailComponent', () => {
  let component: ItemDealsLinkDetailComponent;
  let fixture: ComponentFixture<ItemDealsLinkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDealsLinkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDealsLinkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
