import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbconnectService } from '../services/dbconnect.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  getDevice: any;
  responseData: any;
  x: any;
  errorData: any
  postformGroup: FormGroup = new FormGroup(
    {
      title: new FormControl('', Validators.required),
      slug: new FormControl('', Validators.required),
      content: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required]),
    }
  )
  imageData: any;
  DevData: any;
  selectedImage: any;
  ImageId: any; id: any;
  constructor(private route: Router,
    private router: ActivatedRoute, private dbService: DbconnectService) { }
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.dbService.getPostbyID(this.id).subscribe(result => {
      this.selectedImage = result.headerImage;
      this.responseData=result;
      this.ImageId = result.imageId;
      console.log(result)
    })

    this.dbService.getImageList().subscribe(result => {
      this.imageData = result;
      this.selectedImage = result[0].data;
  })
  }

  selectImage(image: any) {
    this.selectedImage = image.data;
    console.log("this is the id", image);
    this.ImageId = image.id;

  }

  EditPost() {
    console.log(this.postformGroup.value)
    if (this.postformGroup.invalid) {
      alert("Enter valid Data")
    }
    if (this.postformGroup.valid)
      console.log(this.postformGroup.value)
    this.dbService.EditPost(this.postformGroup.value,this.id, this.ImageId).subscribe(result => {
      this.responseData = result;
      if (result) {
        alert("Post Edited Successfully")
        this.route.navigateByUrl("/postList")
        console.log(result.message)
      }
      console.log(this.x)
    }, (error: HttpErrorResponse) => {
      this.errorData = error;
      console.log("sss", error.error.error)
      if (error.error.error == "Bad Request") {
        alert("Invalid Data Entered")
      }
    })
  }
}