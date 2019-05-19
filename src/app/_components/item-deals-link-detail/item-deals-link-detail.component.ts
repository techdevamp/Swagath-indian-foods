import { ItemDealsLinkDetailDataSource } from './ItemDealsLinkDetailDataSource';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/_services';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ItemDealDetails } from 'src/app/_models/item.deal.details';

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
dailySelection = new SelectionModel<ItemDealDetails>(true, []);
hotSelection = new SelectionModel<ItemDealDetails>(true, []);
numRows: number;
numSelected: number;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

ngOnInit() {
this.route.params.subscribe(params => {
this.uploadDt = params.id;
});
this.displayedColumnsItems = ['hotDeal','dailyDeal','itemName', 'itemDescription', 'itemWeight', 'itemQuantity', 'itemPrice', 'Image'];
this.dataSourceItems = new ItemDealsLinkDetailDataSource(this.dataService);
this.dataSourceItems.getAllItemDetails();
}

onChange(id: any,test : any) {
 alert(test);
 //// if (isChecked) {
    let index = this.dataSourceItems.data.findIndex(x => x.id == id)
    //this.dataSourceItems.data.forEach( row => )
 // }
}

/** Whether the number of selected elements matches the total number of rows. */
isAllSelected(chk :any) {
 
  if(chk=='daily'){
  this.numSelected = this.dailySelection.selected.length;
  this.numRows = this.dataSourceItems.data.length;
  } else{
    this.numSelected = this.hotSelection.selected.length;
    this.numRows = this.dataSourceItems.data.length;
  }
  return this.numSelected === this.numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle(chk: any) {

     if(this.isAllSelected(chk)==false){
      if(chk=='daily'){
          this.dataSourceItems.data.forEach(row => this.dailySelection.select(row));
      }else{
        this.dataSourceItems.data.forEach(item => this.hotSelection.select(item));
      }
    }else{
      if(chk=='daily'){
        this.dailySelection.clear();
      }else{
        this.hotSelection.clear();
      }
    }
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
