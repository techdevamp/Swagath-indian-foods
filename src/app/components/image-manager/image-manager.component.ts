import { AppConstants } from './../../constants/AppConstants';
import { AlertService } from 'src/app/services';
import { SellerService } from './../../services/seller.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-image-manager',
  templateUrl: './image-manager.component.html',
  styleUrls: ['./image-manager.component.scss']
})
export class ImageManagerComponent implements OnInit {

  constructor(private sellerService: SellerService,
              private alertService: AlertService,
              private route: ActivatedRoute,
              private router: Router
    ) { }

  imagesList: string[];
  searchText: string;
  imgUrl = AppConstants.imageURL;
  fileToUpload: File;
  imgToUpload: any;

  ngOnInit() {
    this.sellerService.getAllImages().subscribe(res => {
      this.imagesList = res.result;
    }
    , error => this.alertService.error(error)
    );
  }

  onImageClick(imageFile: any) {
    this.fileToUpload = imageFile.target.files.item(0);
    this.createImageFromBlob(this.fileToUpload);
}

createImageFromBlob(image: Blob) {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
      this.imgToUpload = reader.result;
  }, false);
  reader.readAsDataURL(image); // read file as data url
}
onUpload() {
  // get data from file upload
  const formData = new FormData();
  formData.append('uploadImage', this.fileToUpload);
  this.sellerService.uploadImage(formData, this.fileToUpload .name).subscribe(res => {
  this.alertService.success(res.message, false);

  this.router.navigate([{outlets: {sidemenu: ['imageManager', '' ] }}],
          {relativeTo: this.route.parent});
  },
  error => this.alertService.error(error));
}

}
