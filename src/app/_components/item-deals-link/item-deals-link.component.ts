import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Deals } from 'src/app/_models/deals';
import { Router,ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ItemDealsLinkDataSource } from './ItemDealsLinkDataSource';
import { DataDealCuponService } from 'src/app/_services/data.deal.cupon.service';


@Component({
  selector: 'app-item-deals-link',
  templateUrl: './item-deals-link.component.html',
  styleUrls: ['./item-deals-link.component.scss']
})
export class ItemDealsLinkComponent  implements OnInit, AfterViewInit{
  

  constructor(private dataService: DataDealCuponService,
    private route: ActivatedRoute
    ,private router: Router) { }
itemDetails: Deals[];
uploadDt: any;
displayedColumnsItems: string[];
dataSourceItems: ItemDealsLinkDataSource;
displayItemDetails: String;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.uploadDt = params.id;
    });
      this.displayItemDetails = 'item-deals-link-detail'
      this.displayedColumnsItems = ['id','dealTypCd', 'dealTypDesc'];
      this.dataSourceItems = new ItemDealsLinkDataSource(this.dataService);
      this.dataSourceItems.loadDealDetails(this.uploadDt);
 
     }
     public getItemDetails(): void {
      this.router.navigate([{outlets: {sidemenu: [this.displayItemDetails]}}],
        {relativeTo: this.route.parent});
    }


     ngAfterViewInit() {
      this.dataSourceItems.paginator = this.paginator;
      this.dataSourceItems.sort = this.sort;
    }

}
