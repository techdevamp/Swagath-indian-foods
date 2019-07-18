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
  imagesNames: string[];
  page = 0;
  size = 10;
  pageSizeOptions = [10, 20, 30];
  ngOnInit() {
    this.sellerService.getAllImages().subscribe(res => {
      this.imagesList = res.result;
      this.getData({pageIndex: this.page, pageSize: this.size});
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
    this.sellerService.uploadImage(formData, '0').subscribe(res => {
    this.alertService.success(res.message, false);

    this.router.navigate([{outlets: {sidemenu: ['imageManager', '' ] }}],
            {relativeTo: this.route.parent});
    },
    error => this.alertService.error(error));
  }

  getData(obj: { pageIndex: any; pageSize: any; }) {
    let index = 0;
    const startingIndex = obj.pageIndex * obj.pageSize;
    const endingIndex = startingIndex + obj.pageSize;

    this.imagesNames = this.imagesList.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }
}
