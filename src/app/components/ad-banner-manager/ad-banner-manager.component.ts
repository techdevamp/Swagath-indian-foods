import { ImageUpload } from './../../models/image.upload';
import { AppConstants } from './../../constants/AppConstants';
import { SellerService } from 'src/app/services/seller.service';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BuyerService } from 'src/app/services/buyer.service';

@Component({
  selector: 'app-ad-banner-manager',
  templateUrl: './ad-banner-manager.component.html',
  styleUrls: ['./ad-banner-manager.component.scss']
})
export class AdBannerManagerComponent implements OnInit {

  constructor(private sellerService: SellerService
            , private alertService: AlertService
            , private buyerService: BuyerService
            , private formBuilder: FormBuilder) { }
  imageList: string[];

  adBannerImageForm: FormGroup;
  imgUrl: any;
  selectedValue: any;
  imgUpload: ImageUpload;
  adBanners: ImageUpload[];

  ngOnInit() {
    this.adBannerImageForm = this.formBuilder.group({
      bannerText: [''],
      selectedImage: ['']
    });

    this.sellerService.getAllImages().subscribe(res => {this.imageList = res.result; }
        , error => this.alertService.error(error)
    );

    this.getAdBanners();
  }

  getAdBanners() {
    this.buyerService.getImageByImageType('AdBanner').subscribe(res => this.adBanners = res.result,
      error => this.alertService.error(error));
  }

  onSelect(selectedValue: any) {
    this.selectedValue = selectedValue;
    this.imgUrl = AppConstants.imageURL.concat(selectedValue);
  }

  onSubmit() {
    this.imgUpload = new ImageUpload();
    this.imgUpload.imageText = this.adBannerImageForm.controls.bannerText.value;
    this.imgUpload.imgNm = this.adBannerImageForm.controls.selectedImage.value;
    this.imgUpload.uploadTyp = 'AdBanner';
    this.imgUpload.activeInd = true;
    this.sellerService.saveImage(this.imgUpload).subscribe(
                                    res => {this.alertService.success(res.message);
                                            this.getAdBanners();
                                            this.imgUrl = null;
                                            this.selectedValue = null;
                                     },
                                    error => this.alertService.error(error)
                                  );
  }

  deleteAdBanner(banner: ImageUpload) {
    this.imgUpload = banner;
    this.imgUpload.activeInd = false;
    this.sellerService.saveImage(this.imgUpload).subscribe(
      res => {this.alertService.success(res.message);
              this.getAdBanners();
             },
      error => this.alertService.error(error)
    );
  }
}
