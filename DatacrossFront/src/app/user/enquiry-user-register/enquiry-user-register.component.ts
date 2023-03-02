import { SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-enquiry-user-register',
  templateUrl: './enquiry-user-register.component.html',
  styleUrls: ['./enquiry-user-register.component.css']
})
export class EnquiryUserRegisterComponent implements OnInit {
  userdata: any;
  user:any;
  loggedIn:any;
  responseData: any;
  errorData: any;
  constructor(private route:Router,private authService:AuthService,private authServiceGogle: SocialAuthService, private data:DataService) { }


  ngOnInit() {
    this.authServiceGogle.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user.idToken)
      this.authService.GoogleEnquirylogin(this.user).subscribe(result=>{
        this.responseData=result;
        console.log("aaaaaaaaaaaaaa",result.error)
        localStorage.setItem('token',this.responseData.accessToken.value)
        localStorage.setItem('username',this.responseData.name)
        localStorage.setItem('role',this.responseData.role)
        localStorage.setItem('orgname',this.responseData.orgName)
        localStorage.setItem('flag',"LoginFlag")
        localStorage.setItem('reload',"reload")
        console.log(result);
        (error: HttpErrorResponse) => {
          this.errorData=error
              console.log(this.errorData);
              alert(error)}

              
  
        if(this.responseData.role == "enquiryUser")
        {
        alert("Logged in Successfully")
        this.route.navigateByUrl("EnquiryRegister")
        console.log(result.message)} 

      })});
    }
  }
