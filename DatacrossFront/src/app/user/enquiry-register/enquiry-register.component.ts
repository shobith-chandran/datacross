import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbconnectService } from 'src/app/admin/services/dbconnect.service';

@Component({
  selector: 'app-enquiry-register',
  templateUrl: './enquiry-register.component.html',
  styleUrls: ['./enquiry-register.component.css']
})
export class EnquiryRegisterComponent implements OnInit {

    orgData:any;
    responseData:any;
      x:any;
      errorData:any
      QueryForm:FormGroup=new FormGroup(
        { 
          query:new FormControl('',Validators.required),

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
        console.log(this.QueryForm.value)
        if(this.QueryForm.invalid)
        {
          alert("Enter valid Data")
        }
        if(this.QueryForm.valid)
        console.log(this.QueryForm.value)
        this.dbService.addDevice(this.QueryForm.value).subscribe(result=>{
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
    