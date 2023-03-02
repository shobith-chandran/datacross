import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbconnectService } from 'src/app/admin/services/dbconnect.service';


@Component({
  selector: 'app-device-view-user',
  templateUrl: './device-view-user.component.html',
  styleUrls: ['./device-view-user.component.css']
})
export class DeviceViewUserComponent implements OnInit {
  responseData: any;
  DeviceData:any;
  id: any;
  getDevice: any;

  constructor(private route:Router,private dbService:DbconnectService) { }

  ngOnInit(): void {
    this.dbService.getDevice().subscribe(result=>{
    this.responseData=result;
    console.log(result)
let orgname=localStorage.getItem("orgname")
    this.DeviceData = this.responseData.filter((obj: { orgName: string; }) => {
      return obj.orgName === orgname;
    });

console.log(this.DeviceData)

    if(this.DeviceData==undefined){
   alert("NO Devices")
   console.log(result.message)}
  })
  }
  deleteDev(data:any){
    console.log("d",data)
    this.id=data.deviceId
    console.log(this.id)
    // localStorage.setItem('EditItemId',this.id)
    this.dbService.deleteDev(this.id).subscribe(results=>{
      this.getDevice=results;
      console.log(results)
      if(results)
      {
        alert("Device Deleted")
        window.location.reload();
      }
      
    });
  }
}