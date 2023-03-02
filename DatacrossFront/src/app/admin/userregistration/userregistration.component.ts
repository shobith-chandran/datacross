import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbconnectService } from '../services/dbconnect.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
 
  responseData:any;
  orgData:any;
  x:any;
  errorData:any
  flag:any;
  userformGroup:FormGroup=new FormGroup(
    { 
      name:new FormControl('',Validators.required),
      orgId:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.email,Validators.required]),
      password:new FormControl('',[Validators.minLength(8),Validators.required])
    }
    ) 
    constructor(private route:Router,private dbService:DbconnectService) { }

  ngOnInit(): void {

    this.flag=false;
    this.dbService.getOrg().subscribe(result=>{
      this.orgData=result;
      if(result){
      console.log(result.message)}
})


  }
  userreg()
  { 
    
    console.log(this.userformGroup)
    if(this.userformGroup.invalid)
    {
      this.flag=true;
      alert("Enter valid Data")
    }
    if(this.userformGroup.valid)
    this.dbService.adduser(this.userformGroup.value).subscribe(result=>{
      this.responseData=result;
      localStorage.setItem('username',this.responseData.name)
      if(result){
      alert("User Registered")
      this.route.navigateByUrl("/userview")
      console.log(result.message)}
      this.x=localStorage.getItem('token');
      console.log(this.x)

    }, (error: HttpErrorResponse) => {
      this.errorData = error;
      console.log("sss",error.error.error)
      if(error.error.error=="Bad Request"){
        alert("Invalid Data Entered")
      }})
  }

}
