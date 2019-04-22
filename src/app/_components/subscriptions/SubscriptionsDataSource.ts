import { SubscriptionsData } from '../../_models/subscription.data';
import { DataService } from '../../_services';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';
import { first } from 'rxjs/operators';

export class SubscriptionsDataSource extends DataSource<SubscriptionsData> {

  constructor(private dataService: DataService) {
    super();
  }
  private subscriptionsData = new BehaviorSubject<SubscriptionsData[]>([]);
  connect(collectionViewer: CollectionViewer): Observable<SubscriptionsData[]> {
    return this.subscriptionsData.asObservable();

  }
  disconnect(collectionViewer: CollectionViewer): void {
    this.subscriptionsData.complete();
  }

  loadSubscriptionsDetails() {
        this.dataService.getSubscriptionDetails().pipe(first()).subscribe(res => {
        this.subscriptionsData.next(res.result);
      });
  }
}
