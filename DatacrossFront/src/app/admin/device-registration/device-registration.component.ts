import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbconnectService } from '../services/dbconnect.service';

@Component({
  selector: 'app-device-registration',
  templateUrl: './device-registration.component.html',
  styleUrls: ['./device-registration.component.css']
})
export class DeviceRegistrationComponent implements OnInit {
orgData:any;
responseData:any;
  x:any;
  errorData:any
  orgformGroup:FormGroup=new FormGroup(
    { 
      deviceName:new FormControl('',Validators.required),
      description:new FormControl('',[Validators.required]),
      orgId:new FormControl('',Validators.required),
      
    }
    ) 
  constructor(private route:Router,private dbService:DbconnectService) { }
  ngOnInit(): void {

    this.dbService.getOrg().subscribe(result=>{
      this.orgData=result;
      if(result){
      console.log(result.message)}
})

  }
  devreg()
  {
    console.log(this.orgformGroup.value)
    if(this.orgformGroup.invalid)
    {
      alert("Enter valid Data")
    }
    if(this.orgformGroup.valid)
    console.log(this.orgformGroup.value)
    this.dbService.addDevice(this.orgformGroup.value).subscribe(result=>{
      this.responseData=result;
      if(result){
      alert("Device Added Successfully")
      this.route.navigateByUrl("/adminhome")
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
