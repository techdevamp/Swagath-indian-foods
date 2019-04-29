import { SubscriptionsData } from '../../_models/subscription.data';
import { DataService } from '../../_services';
import { first } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';

export class SubscriptionsDataSource extends MatTableDataSource<SubscriptionsData> {

  constructor(private dataService: DataService) {
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
        this.dataService.getSubscriptionsByFileId(fileId).pipe(first()).subscribe(res => {
        this.data = (res.result);
      });
  }
}
