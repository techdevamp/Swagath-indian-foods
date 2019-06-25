import { SellerService } from 'src/app/services/seller.service';
import { FileDetails } from './../../models/file.details';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from 'src/app/services';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit, OnDestroy {

  uploadType: string;
  fileToUpload: File;
  fileDetails: FileDetails;
  displayDetails: string;
  uploadDt: any;
  fileName: string;
  constructor(private sellerService: SellerService
    ,         private alertService: AlertService
    ,         private router: Router
    ,         private route: ActivatedRoute) {}
  ngOnInit() {
      this.route.params.subscribe(params => {
        this.uploadType = params.id;
        this.getFileDetails();
      });
      if (this.uploadType === 'items') {
        this.displayDetails = 'display-item-details';
      } else if (this.uploadType === 'subscriptions') {
        this.displayDetails = 'subscriptions';
      }
  }

  public getFileDetails() {
    this.fileName = '';
    this.sellerService.getFileDetails(this.uploadType).subscribe(res => {
      this.fileDetails = res.result;
    },
    error => this.alertService.error(error));
  }

  public setFile(event: any): void {
    this.fileToUpload = event.target.files.item(0);
    this.fileName = this.fileToUpload.name;
  }

  public uploadData(): void {
    // get data from file upload
    const formData = new FormData();
    formData.append('uploadExcel', this.fileToUpload, this.fileToUpload.name);
    this.sellerService.uploadFile(formData, this.uploadType).subscribe(res => {
      this.alertService.success(res.message, true),
      this.fileDetails = res.result;
      this.getFileDetails();
    },
    error => this.alertService.error(error));
  }

  public getItemDetails(fileId: any): void {
    this.router.navigate([{outlets: {sidemenu: [this.displayDetails, fileId]}}],
      {relativeTo: this.route.parent});
  }
  ngOnDestroy() {
   this.uploadType = null;
  }

  deleteFile(id: any) {
    this.sellerService.deleteFile(id).subscribe(res => {
        this.getFileDetails();
        this.alertService.success(res.message, false);
      },
      error => this.alertService.error(error)
    );
  }
  approveFile(id: any) {
    this.sellerService.approveFile(id).subscribe(res => {
        this.getFileDetails();
        this.alertService.success(res.message, false);
      },
      error => this.alertService.error(error)
    );
  }
}
