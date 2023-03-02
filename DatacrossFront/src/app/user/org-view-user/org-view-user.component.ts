import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbconnectService } from 'src/app/admin/services/dbconnect.service';

@Component({
  selector: 'app-org-view-user',
  templateUrl: './org-view-user.component.html',
  styleUrls: ['./org-view-user.component.css']
})
export class OrgViewUserComponent implements OnInit {

 
  responseData: any;

  constructor(private route:Router,private dbService:DbconnectService) { }

  ngOnInit(): void {
    this.dbService.getOrg().subscribe(result=>{
    this.responseData=result;
    if(result){
    // alert("Device view Successfully")
    console.log(result.message)}


  })
  }
 
}