import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbconnectService } from '../services/dbconnect.service';

@Component({
  selector: 'app-media-library',
  templateUrl: './media-library.component.html',
  styleUrls: ['./media-library.component.css']
})
export class MediaLibraryComponent implements OnInit {
  responseData: any;
  errorData: any;

  constructor(private route:Router,private dbService:DbconnectService) { }

  ngOnInit(): void {
    this.dbService.getImageList().subscribe(result=>{
    this.responseData=result;
    console.log(result)})

}
DeleteImage(image:any){
  image.id
  this.dbService.DeleteImage(image.id).subscribe(result=>{
    this.responseData=result;
    if(result){alert("Deleted")}
    else{alert("Failed")}
    console.log(result)}, (error: HttpErrorResponse) => {
      this.errorData = error;
      console.log("sss", error.error.error)
      if (error.error.error == "Internal Server Error") {
        alert("Cannot Delete")
      }
    })
}
}