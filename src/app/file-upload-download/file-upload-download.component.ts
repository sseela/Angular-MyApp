import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-file-upload-download',
  templateUrl: './file-upload-download.component.html',
  styleUrls: ['./file-upload-download.component.css']
})
export class FileUploadDownloadComponent implements OnInit {

  fileToUpload: File;
  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadAndSend() {
    this.service.fileUpload(this.fileToUpload).subscribe(
      res => console.log(res)
    );
  }


}
