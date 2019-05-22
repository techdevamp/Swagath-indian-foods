import { MatTableDataSource } from '@angular/material';
import { ItemDealDetails } from 'src/app/_models/item.deal.details';
import { first } from 'rxjs/operators';
import { DataDealCuponService } from 'src/app/_services/data.deal.cupon.service';
export class ItemDealsLinkDetailDataSource extends MatTableDataSource<ItemDealDetails> {
  constructor(private dataService: DataDealCuponService) {
    super();
  }

  getAllItemDetails() {
    this.dataService.getAllDealItemDetails().pipe(first()).subscribe(res => {
      this.data = res.result;
    });
  }
}
