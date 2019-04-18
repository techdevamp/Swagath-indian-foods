import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService, AlertService } from 'src/app/_services';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  fileToUpload: File;
  DataTransferService;
  constructor(private dataService: DataService
    ,         private alertService: AlertService
    ,         private router: Router) {}
  ngOnInit() {

  }

  public setFile(files: FileList): void {
    this.fileToUpload = files.item(0);
  }

  public uploadData(): void {
    // get data from file upload
    const formData = new FormData();
    formData.append('uploadExcel', this.fileToUpload, this.fileToUpload.name);
    this.dataService.uploadFile(formData).pipe(first()).subscribe(res => {
      this.alertService.success(res.message, true),
      this.router.navigate(['display-item-details']);
    });
  }
}

