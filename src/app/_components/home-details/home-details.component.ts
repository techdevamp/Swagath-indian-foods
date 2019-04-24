import { Component, OnInit } from '@angular/core';
import { ItemDetails } from 'src/app/_models/item.details';
import { ItemDetailsDataSource } from '../display-item-details/ItemDetailsDataSource';
import { DataService } from 'src/app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.scss']
})
export class HomeDetailsComponent implements OnInit {

  constructor(private dataService: DataService) { }
  itemDetails: ItemDetails[];
  dataSourceItems: ItemDetailsDataSource;

  ngOnInit() {
    this.dataService.getItemDetails().pipe(first()).subscribe(res => {
      this.itemDetails = res.result;
    });
  }

}
