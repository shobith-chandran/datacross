import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbconnectService } from '../../services/dbconnect.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {


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

    this.dbService.getUser(this.count, this.tableSize).subscribe(result => {
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
    this.dbService.getUser(event, this.tableSize).subscribe(result => {
      this.responseData = result.result;
      console.log("ssssssss", result)

        this.count = result.currentPage;
 

    })
  }
  deleteUser(data: any) {
    console.log("d", data)
    this.id = data.userId
    console.log(this.id)
    //localStorage.setItem('EditItemId',this.id)
    this.dbService.deleteUser(this.id).subscribe(results => {
      this.getUser = results;
      console.log(results)
      if (results) {
        alert("Organization Deleted")

      }

    });
  }

}