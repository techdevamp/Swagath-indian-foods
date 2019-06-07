import { DataTransferService } from 'src/app/services';
import { SellerService } from './../../services/seller.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-item-details',
  templateUrl: './edit-item-details.component.html',
  styleUrls: ['./edit-item-details.component.scss']
})
export class EditItemDetailsComponent implements OnInit {

  editItemDetailsForm: FormGroup;
  constructor(private formBuilder: FormBuilder
            , private router: Router
            , private sellerService: SellerService
            , private dataTransferService: DataTransferService) { }


  ngOnInit() {
    this.editItemDetailsForm = this.formBuilder.group({
      id: [''],
      productItemNm: ['', Validators.required],
      productItemDesc: ['', Validators.required],
      productItemUnitPrice: ['', Validators.required],
      productItemDscnt: [''],
      productItemWeight: ['', Validators.required],
      productItemQnty: ['', Validators.required]
    });

    this.editItemDetailsForm.setValue(this.dataTransferService.getApiResponse().result);
  }
  onSubmit() {
    this.sellerService.editItem(this.editItemDetailsForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            alert('Item updated successfully.');
            this.router.navigate(['display-item-details']);
          } else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }
}
