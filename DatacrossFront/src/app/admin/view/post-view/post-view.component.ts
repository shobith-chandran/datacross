import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbconnectService } from '../../services/dbconnect.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

 

  responseData: any;
  id: any;
  count: number = 1;
  User: any;
  totalElements: any;
  getUser: any;
  tableSize: number = 5;
  x: any;
  collection: any;

  constructor(private route: Router, private dbService: DbconnectService) { }

  ngOnInit(): void {

    this.dbService.getPostList(this.count, this.tableSize).subscribe(result => {
      this.responseData = result.result;
      this.totalElements = result.numItems;
      console.log("sssssssT", this.count)
      if (result) {
        // alert("Device view Successfully")
        console.log("ssssssss", result)
      }
      // this.User = this.responseData.filter((obj: { status: any }) => {
      //   return obj.status === 1;
      // });



    })
  }
  pageChanged(event: any) {
    console.log(event)
    this.dbService.getPostList(event, this.tableSize).subscribe(result => {
      this.responseData = result.result;
      console.log("ssssssss", result)

        this.count = result.currentPage;
 

    })

  }
  deleteUser(data: any) {
    console.log("d", data)
    this.id = data.userId
    console.log(data.postId)
    //localStorage.setItem('EditItemId',this.id)
    this.dbService.deletePost(data.postId).subscribe(results => {
      this.getUser = results;
      console.log(results)
      if (results) {
        alert("Organization Deleted")
        this.route.navigateByUrl("/postList")

      }

    });
  }  
  PublishPost(data: any) {
    console.log("d", data)
    this.id = data.userId
    console.log(data.postId)
    //localStorage.setItem('EditItemId',this.id)
    this.dbService.PublishPost(data.postId).subscribe(results => {
      this.getUser = results;
      console.log(results)
      if (results) {
        alert("Post Published")
        this.route.navigateByUrl("/postList")

      }

    });
  }

}