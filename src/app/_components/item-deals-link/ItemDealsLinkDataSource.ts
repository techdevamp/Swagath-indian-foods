import { MatTableDataSource } from '@angular/material';
import { DataService } from '../../_services';
import { Deals } from 'src/app/_models/deals';
import { first } from 'rxjs/operators';
export class ItemDealsLinkDataSource extends MatTableDataSource<Deals> {
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
  loadDealDetails(fileId: any) {
    this.dataService.getDealsDetails().pipe(first()).subscribe(res => {
      this.data = res.result;
    });
  }
  
}
