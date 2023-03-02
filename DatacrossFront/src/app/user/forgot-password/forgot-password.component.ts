import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DbconnectService } from 'src/app/admin/services/dbconnect.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  orgformGroup:FormGroup=new FormGroup(
    { 
     
      sentto:new FormControl('',Validators.required),
      
    })
    otpformGroup:FormGroup=new FormGroup(
      { 
       
        email:new FormControl('',Validators.required),
        otp:new FormControl('',Validators.required),
        newPassword:new FormControl('',Validators.required),
        cnewPassword:new FormControl('',Validators.required),
        
      })
  orgData: any;
  form=0;
  errorData: any;
  constructor(private route:Router,private dbService:DbconnectService,private toast: NgToastService ) { }

  ngOnInit(): void { if(this.orgformGroup.valid){

    this.dbService.forgotPassword(this.orgformGroup.value).subscribe(result=>{
      this.orgData=result;
      
    },(error: HttpErrorResponse) => {
      this.errorData = error;
      console.log("sss",error.error)
      if(error.error.status==500){
        this.toast.error({detail:"Unknown Mail",summary:" Retry with password", sticky:true,position:"Center"})
        this.route.navigateByUrl("/login")
      }
      console.log("error Da", error.error.message)
      if(error.error.text){
        this.route.navigateByUrl("/login")
        this.toast.success({detail:"OTP SENT",summary:"Check your mail!", sticky:true,position:"Center"})

      }
    })  

  }
  }
 devreg()
  { if(this.orgformGroup.valid){
     this.form=1;
    console.log(this.form)
    console.log(this.orgformGroup.value)
    this.ngOnInit()
  }
    }
  verify(){
    console.log(this.otpformGroup)
    this.dbService.verfyOTP(this.otpformGroup.value).subscribe(result=>{
      this.orgData=result;
      if(result){
        this.toast.success({detail:"Password Changed",summary:"Log in with new password", sticky:true,position:"Center"})

      alert(result)}
    }, (error: HttpErrorResponse) => {
      this.errorData = error;
      console.log("sss",error.error.error)
      if(error.error.message=="No value present"){
        alert("Invalid OTP or Email ID Entered")
      }
      console.log("error Da", error.error.message)
      if(error.error.error=="Bad Request"){
        alert("Invalid Data Entered")
      }
    }) 
  }
  
dash(){console.log("hhhh")}

}
