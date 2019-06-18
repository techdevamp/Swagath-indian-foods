import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBannerManagerComponent } from './ad-banner-manager.component';

describe('AdBannerManagerComponent', () => {
  let component: AdBannerManagerComponent;
  let fixture: ComponentFixture<AdBannerManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdBannerManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBannerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
