import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CsvdataService } from 'src/app/user/userservices/csvdata.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  file:any;
  Data:any; 
  pdfOptions: any;
  workspaceService: any;
  constructor(private csvdata:CsvdataService,
    private route: Router,
    private router: ActivatedRoute,
    private toast: NgToastService ) {
  
   }

  ngOnInit(): void {
  }
  onUploadFiles(files: File[]): void {
    const formData = new FormData();
    for (const file of files) { formData.append('file', file, file.name); }
    this.csvdata.uploadMedia(formData).subscribe(
      event => {
        if(event){
          this.toast.success({detail:"Upload Complete",summary:"Data Uploaded Succesfully", sticky:true,position:"Center"})
          this.route.navigateByUrl("/mediaLibrary")
        }
        console.log(event);
  (error: HttpErrorResponse) => {
        console.log(error);
        alert(error)
      }}
    ); 
    
  }
}