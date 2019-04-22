import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService, AlertService } from 'src/app/_services';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  uploadType: string;
  fileToUpload: File;
  constructor(private dataService: DataService
    ,         private alertService: AlertService
    ,         private router: Router
    ,         private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
        this.uploadType = params.id;
      });
  }

  public setFile(event: any): void {
    this.fileToUpload = event.target.files.item(0);
  }

  public uploadData(): void {
    // get data from file upload
    const formData = new FormData();
    formData.append('uploadExcel', this.fileToUpload, this.fileToUpload.name);
    this.dataService.uploadFile(formData, this.uploadType).pipe(first()).subscribe(res => {
      this.alertService.success(res.message, true),

      this.router.navigate([{outlets: {sidemenu: ['display-item-details', this.uploadType]}}],
        {relativeTo: this.route.parent});
    });
  }
}

