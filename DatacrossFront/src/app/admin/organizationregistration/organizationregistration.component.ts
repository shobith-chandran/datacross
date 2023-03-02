import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbconnectService } from '../services/dbconnect.service';

@Component({
  selector: 'app-organizationregistration',
  templateUrl: './organizationregistration.component.html',
  styleUrls: ['./organizationregistration.component.css']
})
export class OrganizationregistrationComponent implements OnInit {
  responseData:any;
  x:any;
  errorData:any
  orgformGroup:FormGroup=new FormGroup(
    { 
      orgName:new FormControl('',Validators.required),
      licenseNo:new FormControl('',[Validators.minLength(8),Validators.required]),
      address:new FormControl('',Validators.required),
      contact:new FormControl('',Validators.required),
      pincode:new FormControl('',Validators.required)
    }
    ) 

  constructor(private route:Router,private dbService:DbconnectService) { }

  ngOnInit(): void {
  }


  orgreg()
  {
    if(this.orgformGroup.invalid)
    {
      alert("Enter valid Data")
    }
    if(this.orgformGroup.valid)
    console.log(this.orgformGroup.value)
    this.dbService.addOrg(this.orgformGroup.value).subscribe(result=>{
      this.responseData=result;
      localStorage.setItem('username',this.responseData.name)
      if(result){
      alert("Organization added Successfully")
      this.route.navigateByUrl("/adminhome")
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
