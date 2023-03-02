import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbconnectService } from 'src/app/admin/services/dbconnect.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  responseData: any;
  users: any;
  constructor(private route:Router,private data:DbconnectService) { }

  ngOnInit(): void {
    this.data.getCurrentUser().subscribe(result=>{
      this.users=result;
      
      // alert("Device view Successfully")
      console.log("ssddsssss",result)
  })

  }
  

}
