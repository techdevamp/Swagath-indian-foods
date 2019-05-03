import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hot-deals',
  templateUrl: './hot-deals.component.html',
  styleUrls: ['./hot-deals.component.scss']
})
export class HotDealsComponent implements OnInit {


constructor(private ngbCarouselConfig: NgbCarouselConfig) {
  this.ngbCarouselConfig.interval = 1000;

}

ngOnInit() {
  }
}
