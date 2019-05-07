import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Deals } from 'src/app/_models/deals';
import { DataService } from 'src/app/_services';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ItemDealsLinkDataSource } from './ItemDealsLinkDataSource';


@Component({
  selector: 'app-item-deals-link',
  templateUrl: './item-deals-link.component.html',
  styleUrls: ['./item-deals-link.component.scss']
})
export class ItemDealsLinkComponent  implements OnInit, AfterViewInit{

  constructor(private dataService: DataService,
    private route: ActivatedRoute) { }
itemDetails: Deals[];
uploadDt: any;
displayedColumnsItems: string[];
dataSourceItems: ItemDealsLinkDataSource;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.uploadDt = params.id;
    });
      this.displayedColumnsItems = ['id','dealTypCd', 'dealTypDesc'];
      this.dataSourceItems = new ItemDealsLinkDataSource(this.dataService);
      this.dataSourceItems.loadDealDetails(this.uploadDt);
 
     }


     ngAfterViewInit() {
      this.dataSourceItems.paginator = this.paginator;
      this.dataSourceItems.sort = this.sort;
    }

}
