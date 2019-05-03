import { Component, OnInit } from '@angular/core';
import { ItemDetails } from 'src/app/_models/item.details';
import { DataService } from 'src/app/_services';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-item-deals-link',
  templateUrl: './item-deals-link.component.html',
  styleUrls: ['./item-deals-link.component.scss']
})
export class ItemDealsLinkComponent implements OnInit {

  constructor(private dataService: DataService,
    private route: ActivatedRoute) { }
itemDetails: ItemDetails[];
uploadDt: any;
displayedColumnsItems: string[];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.uploadDt = params.id;
      });
      this.displayedColumnsItems = ['selectDeal','dealCode', 'dealDesc'];
    //  this.dataSourceItems = new ItemDetailsDataSource(this.dataService);
    //  this.dataSourceItems.loadItemDetails(this.uploadDt);
  }

  loadItemDetails(fileId: any) {
  //  this.dataService.getItemDetailsByFileId(fileId).pipe(first()).subscribe(res => {
  //    this.data = res.result;
  //  });
  }

}
