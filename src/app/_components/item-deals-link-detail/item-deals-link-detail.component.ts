import { ItemDealsLinkDetailDataSource } from './ItemDealsLinkDetailDataSource';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/_services';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-item-deals-link-detail',
  templateUrl: './item-deals-link-detail.component.html',
  styleUrls: ['./item-deals-link-detail.component.scss']
})
export class ItemDealsLinkDetailComponent implements OnInit {

  constructor(private dataService: DataService,
    private route: ActivatedRoute) { }

dataSourceItems: ItemDealsLinkDetailDataSource;
uploadDt: any;
displayedColumnsItems: string[];

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

ngOnInit() {
this.route.params.subscribe(params => {
this.uploadDt = params.id;
});
this.displayedColumnsItems = ['itemName', 'itemDescription', 'itemWeight', 'itemQuantity', 'itemPrice', 'Image'];
this.dataSourceItems = new ItemDealsLinkDetailDataSource(this.dataService);
this.dataSourceItems.getAllItemDetails();
}
/**
* Set the paginator after the view init since this component will
* be able to query its view for the initialized paginator.
*/
ngAfterViewInit() {
this.dataSourceItems.paginator = this.paginator;
this.dataSourceItems.sort = this.sort;
}

}
