import { SubscriptionsData } from 'src/app/_models/subscription.data';
import { FileDetails } from './../../_models/file.details';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, Pipe } from '@angular/core';
import { DataService, AlertService } from 'src/app/_services';
import { first } from 'rxjs/operators';

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
  constructor(private dataService: DataService
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
    this.dataService.getFileDetails(this.uploadType).subscribe(res => {
      this.fileDetails = res.result;
      this.alertService.success(res.message, true);
  });
  }

  public setFile(event: any): void {
    this.fileToUpload = event.target.files.item(0);
    this.fileName = this.fileToUpload.name;
  }

  public uploadData(): void {
    // get data from file upload
    const formData = new FormData();
    formData.append('uploadExcel', this.fileToUpload, this.fileToUpload.name);
    this.dataService.uploadFile(formData, this.uploadType).pipe(first()).subscribe(res => {
      this.alertService.success(res.message, true),
      this.fileDetails = res.result;
      this.getFileDetails();
    });
  }

  public getItemDetails(fileId: any): void {
    this.router.navigate([{outlets: {sidemenu: [this.displayDetails, fileId]}}],
      {relativeTo: this.route.parent});
  }
  ngOnDestroy() {
   this.uploadType = null;
  }

  deleteFile(id: any) {
    this.dataService.deleteFile(id).subscribe(res => {
        alert(res.message);
        this.getFileDetails();
      }
    );
  }
}
