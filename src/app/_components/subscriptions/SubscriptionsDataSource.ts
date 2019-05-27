import { SubscriptionsData } from '../../_models/subscription.data';
import { first } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';
import { SellerService } from 'src/app/_services/seller.service';

export class SubscriptionsDataSource extends MatTableDataSource<SubscriptionsData> {

  constructor(private sellerService: SellerService) {
    super();
  }
  /*private subscriptionsData: SubscriptionsData[];
  connect(collectionViewer: CollectionViewer): Observable<SubscriptionsData[]> {
    return this.subscriptionsData.asObservable();

  }
  disconnect(collectionViewer: CollectionViewer): void {
    this.subscriptionsData.complete();
  }*/

  loadSubscriptionsDetails(fileId: any) {
        this.sellerService.getSubscriptionsByFileId(fileId).pipe(first()).subscribe(res => {
        this.data = (res.result);
      });
  }
}
