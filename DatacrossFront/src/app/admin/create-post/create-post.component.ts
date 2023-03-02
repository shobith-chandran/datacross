import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbconnectService } from '../services/dbconnect.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  BlogData:any;
  responseData:any;
    x:any;
    errorData:any
    ImageId:any;
    postformGroup:FormGroup=new FormGroup(
      {
        title: new FormControl('', Validators.required),
        slug: new FormControl('', Validators.required),
        content: new FormControl('', [Validators.required]),
        categoryId: new FormControl('', [Validators.required]),
      }
      ) 
      imageData:any;
  DevData: any;
  selectedImage: any;
    constructor(private route:Router,private dbService:DbconnectService) { }
    ngOnInit(): void {
      this.dbService.getImageList().subscribe(result => {
        this.selectedImage = result[0].data;
        this.imageData = result;
        this.selectedImage = result[0].data;
    })
  }
  
    selectImage(image: any) {
      this.selectedImage = image.data;
      console.log("this is the id",image);
      this.ImageId=image.id;

    }
    
    CretePost()
    {
      console.log(this.postformGroup.value)
      if(this.postformGroup.invalid)
      {
        alert("Enter valid Data")
      }
      if(this.postformGroup.valid)
      console.log(this.postformGroup.value)
      this.dbService.AddPost(this.postformGroup.value,this.ImageId).subscribe(result=>{
        this.responseData=result;
        if(result){
        alert("Post Created Successfully")
        this.route.navigateByUrl("/postList")
        console.log(result.message)}
        console.log(this.x)
      }, (error: HttpErrorResponse) => {
        this.errorData = error;
        console.log("sss",error.error.error)
        if(error.error.error=="Bad Request"){
          alert("Invalid Data Entered")
        } })
    }
  }