import { DataTransferService } from 'src/app/services';
import { SellerService } from './../../services/seller.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-edit-item-details',
  templateUrl: './edit-item-details.component.html',
  styleUrls: ['./edit-item-details.component.scss']
})
export class EditItemDetailsComponent implements OnInit {

  editItemDetailsForm: FormGroup;
  imgUrl = '../../../assets/images/';
  fileToUpload: File;

  constructor(private formBuilder: FormBuilder
            , private router: Router
            , private sellerService: SellerService
            , private dataTransferService: DataTransferService
            , private route: ActivatedRoute) { }


  ngOnInit() {
    this.editItemDetailsForm = this.formBuilder.group({
      id: [''],
      productItemNm: ['', Validators.required],
      productItemDesc: ['', Validators.required],
      productItemUnitPrice: ['', Validators.required],
      productItemDscnt: [''],
      productItemWeight: ['', Validators.required],
      productItemQnty: ['', Validators.required],
      productCategoryRefId: [''],
      fileUploadId: ['']
    });
    this.editItemDetailsForm.setValue(this.dataTransferService.getApiResponse().result);
    this.imgUrl = this.imgUrl.concat(this.editItemDetailsForm.controls.productItemNm.value).concat('.png');
  }

  onImageClick(imageFile: any) {
    this.fileToUpload = imageFile.target.files.item(0);

    saveAs(this.fileToUpload, this.imgUrl);
    this.router.navigate([{outlets: {sidemenu: ['edit-item-details']}}],
            {relativeTo: this.route.parent});
  }

  onSubmit() {
    this.sellerService.editItem(this.editItemDetailsForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            alert('Item updated successfully.');
            this.editItemDetailsForm.setValue(data.result);
            this.router.navigate([{outlets: {sidemenu: ['edit-item-details']}}],
            {relativeTo: this.route.parent});
          } else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }
}
