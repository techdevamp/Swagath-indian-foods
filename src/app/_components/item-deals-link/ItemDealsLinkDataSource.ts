import { MatTableDataSource } from '@angular/material';
import { Deals } from 'src/app/_models/deals';
import { DataDealCouponService } from 'src/app/_services/data.deal.coupon.service';
export class ItemDealsLinkDataSource extends MatTableDataSource<Deals> {
  constructor(private dataService: DataDealCouponService) {
    super();
  }

  public loadDealDetails(fileId: any) {
    this.dataService.getDealsDetails().subscribe(res => {
      this.data = res.result;
    });
  }

}
