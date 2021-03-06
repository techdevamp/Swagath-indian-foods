import { ItemDetails } from 'src/app/models/item.details';
import { AppConstants } from 'src/app/constants/AppConstants';
import { DataTransferService, AlertService } from 'src/app/services';
import { SellerService } from './../../services/seller.service';
import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-item-details',
  templateUrl: './edit-item-details.component.html',
  styleUrls: ['./edit-item-details.component.scss']
})
export class EditItemDetailsComponent implements OnInit {

  editItemDetailsForm: FormGroup;
  imgUrl: any;
  fileToUpload: File;
  productItemNm: string;
  imagesName: string[];
  imgExists: string;
  constructor(private formBuilder: FormBuilder
            , private router: Router
            , private sellerService: SellerService
            , private dataTransferService: DataTransferService
            , private route: ActivatedRoute
            , private alertService: AlertService
            ) { }


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
      fileUploadId: [''],
      imageName: ['']
    });
    this.editItemDetailsForm.setValue(this.dataTransferService.getApiResponse().result);
    this.imagesName = this.editItemDetailsForm.controls.imageName.value;
    this.productItemNm = this.imagesName[0];
    this.imgUrl = AppConstants.imageURL.concat(this.productItemNm);
  }

  dataURItoBlob(dataURI: string) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return blob;
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        this.imgUrl = reader.result;
    }, false);
    reader.readAsDataURL(image); // read file as data url
  }

  onImageClick(imageFile: any) {
      this.fileToUpload = imageFile.target.files.item(0);
      this.createImageFromBlob(this.fileToUpload);
      this.imgExists = AppConstants.imageURL.concat(this.productItemNm);
  }

  onUpload() {
    // get data from file upload
    const formData = new FormData();
    formData.append('uploadImage', this.fileToUpload);
    this.sellerService.uploadImage(formData, this.editItemDetailsForm.controls.id.value).subscribe(res => {
    this.alertService.success(res.message, false);
    this.imgExists = null;
    this.router.navigate([{outlets: {sidemenu: ['edit-item-details']}}],
            {relativeTo: this.route.parent});
    },
    error => this.alertService.error(error));
  }

  onSubmit() {
    let imagesNames: string;
    let editItemDetails: ItemDetails;
    imagesNames = this.editItemDetailsForm.controls.imageName.value;
    this.imagesName = imagesNames.indexOf(',') > 0 ? imagesNames.split(',') : this.imagesName;
    editItemDetails = this.editItemDetailsForm.value;
    editItemDetails.imageName = this.imagesName;
    this.sellerService.editItem(editItemDetails)
      .subscribe(
        res => {
          if (res.status === 200) {
            this.alertService.success(res.message, false),
            this.editItemDetailsForm.setValue(res.result);
            this.imgExists = null;
            this.router.navigate([{outlets: {sidemenu: ['edit-item-details']}}],
                                  {relativeTo: this.route.parent});
          } else {
            this.alertService.success(res.message, false);
          }
        },
        error => {
          this.alertService.error(error);
        });
  }
}
