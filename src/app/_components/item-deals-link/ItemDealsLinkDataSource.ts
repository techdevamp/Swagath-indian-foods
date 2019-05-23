import { MatTableDataSource } from '@angular/material';
import { Deals } from 'src/app/_models/deals';
import { DataDealCuponService } from 'src/app/_services/data.deal.cupon.service';
export class ItemDealsLinkDataSource extends MatTableDataSource<Deals> {
  constructor(private dataService: DataDealCuponService) {
    super();
  }

  public loadDealDetails(fileId: any) {
    this.dataService.getDealsDetails().subscribe(res => {
      this.data = res.result;
    });
  }

}
