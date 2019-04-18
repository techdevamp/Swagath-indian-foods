import { DataService } from './../../_services';
import { DataSource } from '@angular/cdk/table';

import { ItemDetails } from 'src/app/_models/item.details';

import { BehaviorSubject, Observable } from 'rxjs';

import { CollectionViewer } from '@angular/cdk/collections';
import { first } from 'rxjs/operators';

export class UserDataSource extends DataSource<ItemDetails> {

  constructor(private dataService: DataService) {
    super();
  }
  private itemDetails = new BehaviorSubject<ItemDetails[]>([]);
  connect(collectionViewer: CollectionViewer): Observable<ItemDetails[]> {
    return this.itemDetails.asObservable();

  }
  disconnect(collectionViewer: CollectionViewer): void {
    this.itemDetails.complete();
  }

  loadItemDetails() {
        this.dataService.getItemDetails().pipe(first()).subscribe(res => {
        this.itemDetails.next(res.result);
      });
  }
}
