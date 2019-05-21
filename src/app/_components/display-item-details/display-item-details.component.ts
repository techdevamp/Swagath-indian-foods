import { ItemDetailsDataSource } from './ItemDetailsDataSource';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ItemDetails } from 'src/app/_models/item.details';
import { DataService } from 'src/app/_services';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-display-item-details',
  templateUrl: './display-item-details.component.html',
  styleUrls: ['./display-item-details.component.scss']
})
export class DisplayItemDetailsComponent implements OnInit, AfterViewInit {
  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }
  itemDetails: ItemDetails[];
  dataSourceItems: ItemDetailsDataSource;
  fileId: any;
  displayedColumnsItems: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
      this.route.params.subscribe(params => {
      this.fileId = params.id;
      });
      this.displayedColumnsItems = ['itemName', 'itemDescription', 'itemWeight', 'itemQuantity', 'itemPrice', 'Image'];
      this.dataSourceItems = new ItemDetailsDataSource(this.dataService);
      this.dataSourceItems.loadItemDetails(this.fileId);
  }
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSourceItems.paginator = this.paginator;
    this.dataSourceItems.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceItems.filter = filterValue;
  }
}
