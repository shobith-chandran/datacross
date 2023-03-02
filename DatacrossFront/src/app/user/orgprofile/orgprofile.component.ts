import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbconnectService } from 'src/app/admin/services/dbconnect.service';

@Component({
  selector: 'app-orgprofile',
  templateUrl: './orgprofile.component.html',
  styleUrls: ['./orgprofile.component.css']
})
export class OrgprofileComponent implements OnInit {
  users: any;
  Org: any;

  constructor(private route:Router,private data:DbconnectService) { }


  ngOnInit(): void {

      this.data.getCurrentUser().subscribe(result=>{
        this.users=result;
        
        // alert("Device view Successfully")
        console.log("ssddsssss",result,this.users.userId)
    })
let x= 2;
    this.data.getOrg().subscribe(result=>{
      this.Org=result;
      console.log("Pds",result)
  })


  }

}
