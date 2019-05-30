import { MatTableDataSource } from '@angular/material';
import { Deals } from 'src/app/_models/deals';
import { DataDealCouponService } from 'src/app/_services/data.deal.coupon.service';
import { AlertService } from 'src/app/_services';
export class ItemDealsLinkDataSource extends MatTableDataSource<Deals> {
  constructor(private dataService: DataDealCouponService, private alertService: AlertService) {
    super();
  }

  public loadDealDetails() {
    this.dataService.getDealsDetails().subscribe(res => {
      this.data = res.result;
    }
    , error => this.alertService.error(error));
  }
}
