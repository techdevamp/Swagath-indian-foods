import { ApiResponse } from 'src/app/models/api.response';
import { ItemDetailsDataSource } from './ItemDetailsDataSource';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ItemDetails } from 'src/app/models/item.details';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';
import { SellerService } from 'src/app/services/seller.service';
import { AlertService, DataTransferService } from 'src/app/services';
import { AppConstants } from 'src/app/constants/AppConstants';

@Component({
  selector: 'app-display-item-details',
  templateUrl: './display-item-details.component.html',
  styleUrls: ['./display-item-details.component.scss']
})
export class DisplayItemDetailsComponent implements OnInit, AfterViewInit {
  constructor(private sellerService: SellerService,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService,
              private dataTransferService: DataTransferService) { }
  itemDetails: ItemDetails[];
  dataSourceItems: ItemDetailsDataSource;
  fileId: any;
  displayedColumnsItems: string[];
  imgUrl = '../../../assets/images/';

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

  editItem(itemDetails: ItemDetails) {
    const apiResponse = new ApiResponse();
    apiResponse.result = itemDetails;
    this.dataTransferService.setApiResponse(apiResponse);
    this.router.navigate([{outlets: {sidemenu: ['edit-item-details']}}],
      {relativeTo: this.route.parent});
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
