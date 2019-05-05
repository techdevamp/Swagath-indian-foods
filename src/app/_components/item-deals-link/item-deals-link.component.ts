import { Component, OnInit } from '@angular/core';
import { Deals } from 'src/app/_models/deals';
import { DataService } from 'src/app/_services';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { ItemDealsLinkDataSource } from './ItemDealsLinkDataSource';


@Component({
  selector: 'app-item-deals-link',
  templateUrl: './item-deals-link.component.html',
  styleUrls: ['./item-deals-link.component.scss']
})
export class ItemDealsLinkComponent  implements OnInit{

  constructor(private dataService: DataService,
    private route: ActivatedRoute) { }
itemDetails: Deals[];
uploadDt: any;
displayedColumnsItems: string[];
dataSourceItems: ItemDealsLinkDataSource;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.uploadDt = params.id;
      });
      this.displayedColumnsItems = ['selectDeal','dealCode', 'dealDesc'];
      this.dataSourceItems = new ItemDealsLinkDataSource(this.dataService);
      this.dataSourceItems.loadDealDetails(this.uploadDt);
 
     }



}
