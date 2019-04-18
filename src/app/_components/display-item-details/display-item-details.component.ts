import { Component, OnInit } from '@angular/core';
import { ItemDetails } from 'src/app/_models/item.details';
import { UserDataSource } from './UserDataSource';
import { DataService } from 'src/app/_services';


@Component({
  selector: 'app-display-item-details',
  templateUrl: './display-item-details.component.html',
  styleUrls: ['./display-item-details.component.scss']
})
export class DisplayItemDetailsComponent implements OnInit {
  itemDetails: ItemDetails[];
  dataSource: UserDataSource;
  displayedColumns = ['itemId', 'itemName', 'itemDescription', 'itemPrice', 'Image'];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataSource = new UserDataSource(this.dataService);
    this.dataSource.loadItemDetails();
  }
}
