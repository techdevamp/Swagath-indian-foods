import { MatTableDataSource } from '@angular/material';
import { DataService } from '../../_services';
import { Deals } from 'src/app/_models/deals';
import { first } from 'rxjs/operators';
export class ItemDealsLinkDataSource extends MatTableDataSource<Deals> {
  constructor(private dataService: DataService) {
    super();
  }
  
  loadDealDetails(fileId: any) {
    this.dataService.getDealsDetails().subscribe(res => {
      this.data = res.result;
    });
  }
  
}
