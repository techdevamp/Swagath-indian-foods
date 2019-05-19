import { MatTableDataSource } from '@angular/material';
import { DataService } from '../../_services';
import { ItemDealDetails } from 'src/app/_models/item.deal.details';
import { first } from 'rxjs/operators';
export class ItemDealsLinkDetailDataSource extends MatTableDataSource<ItemDealDetails> {
  constructor(private dataService: DataService) {
    super();
  }
  /*private itemDetails = new BehaviorSubject<ItemDetails[]>([]);
  connect(collectionViewer: CollectionViewer): Observable<ItemDetails[]> {
    return this.itemDetails.asObservable();
  }
  disconnect(collectionViewer: CollectionViewer): void {
    this.itemDetails.complete();
  }*/
  getAllItemDetails() {
    this.dataService.getAllItemDetails().pipe(first()).subscribe(res => {
      this.data = res.result;
    });
  }
}
