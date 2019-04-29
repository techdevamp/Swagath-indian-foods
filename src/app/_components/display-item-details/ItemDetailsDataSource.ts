import { MatTableDataSource } from '@angular/material';
import { DataService } from '../../_services';
import { ItemDetails } from 'src/app/_models/item.details';
import { first } from 'rxjs/operators';
export class ItemDetailsDataSource extends MatTableDataSource<ItemDetails> {
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
  loadItemDetails(fileId: any) {
    this.dataService.getItemDetailsByFileId(fileId).pipe(first()).subscribe(res => {
      this.data = res.result;
    });
  }
}
