import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbconnectService } from 'src/app/admin/services/dbconnect.service';

@Component({
  selector: 'app-user-device-register',
  templateUrl: './user-device-register.component.html',
  styleUrls: ['./user-device-register.component.css']
})
export class UserDeviceRegisterComponent implements OnInit {
  orgData:any;
  responseData:any;
    x:any;
    errorData:any
    orgformGroup:FormGroup=new FormGroup(
      { 
        deviceName:new FormControl('',Validators.required),
        description:new FormControl('',[Validators.required])
        
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
        this.route.navigateByUrl("/userdevice")
        console.log(result.message)}
    
        console.log(this.x)
  
      })
    }
  }
  
