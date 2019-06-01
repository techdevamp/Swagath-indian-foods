import { ItemDetailsDataSource } from './ItemDetailsDataSource';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ItemDetails } from 'src/app/_models/item.details';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';
import { SellerService } from 'src/app/_services/seller.service';
import { AlertService } from 'src/app/_services';

@Component({
  selector: 'app-display-item-details',
  templateUrl: './display-item-details.component.html',
  styleUrls: ['./display-item-details.component.scss']
})
export class DisplayItemDetailsComponent implements OnInit, AfterViewInit {
  constructor(private sellerService: SellerService,
              private route: ActivatedRoute,
              private alertService: AlertService) { }
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
      this.displayedColumnsItems = ['itemName', 'itemDescription', 'itemWeight', 'itemQuantity', 'itemPrice', 'Image', 'Edit', 'Delete'];
      this.dataSourceItems = new ItemDetailsDataSource(this.sellerService);
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

  editItem(itemId: number) {
    this.sellerService.editItem(itemId).subscribe(
      res => {this.alertService.success(res.message, false);
              this.dataSourceItems.loadItemDetails(this.fileId);
      },
      error => this.alertService.error(error)
    );
  }

  deleteItem(itemId: number) {
    this.sellerService.deleteItem(itemId).subscribe(
      res => {this.alertService.success(res.message, false);
              this.dataSourceItems.loadItemDetails(this.fileId);
            },
      error => this.alertService.error(error)
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceItems.filter = filterValue;
  }
}
