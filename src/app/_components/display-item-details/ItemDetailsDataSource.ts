import { MatTableDataSource } from '@angular/material';
import { ItemDetails } from 'src/app/_models/item.details';
import { first } from 'rxjs/operators';
import { SellerService } from 'src/app/_services/seller.service';
export class ItemDetailsDataSource extends MatTableDataSource<ItemDetails> {
  constructor(private sellerService: SellerService) {
    super();
  }
  /*private itemDetails = new BehaviorSubject<ItemDetails[]>([]);
  connect(collectionViewer: CollectionViewer): Observable<ItemDetails[]> {
    return this.itemDetails.asObservable();
  }
  disconnect(collectionViewer: CollectionViewer): void {
    this.itemDetails.complete();
  }*/
  loadItemDetails(fileId: any) {
    this.sellerService.getItemDetailsByFileId(fileId).pipe(first()).subscribe(res => {
      this.data = res.result;
    });
  }
}
