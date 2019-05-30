import { MatTableDataSource } from '@angular/material';
import { ItemDealDetails } from 'src/app/_models/item.deal.details';
import { first } from 'rxjs/operators';
import { DataDealCouponService } from 'src/app/_services/data.deal.coupon.service';
import { AlertService } from 'src/app/_services';
export class ItemDealsLinkDetailDataSource extends MatTableDataSource<ItemDealDetails> {
  constructor(private dataService: DataDealCouponService, private alertService: AlertService) {
    super();
  }

  getAllItemDetails() {
    this.dataService.getAllDealItemDetails().pipe(first()).subscribe(res => {
      this.data = res.result;
    }, error => this.alertService.error(error));
  }
}
