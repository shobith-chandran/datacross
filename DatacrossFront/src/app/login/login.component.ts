import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../user/data.service';
import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  responseData:any;
  x:any;
  errorData:any
  loginformGroup:FormGroup=new FormGroup(
    { 
      email:new FormControl('',[Validators.email,Validators.required]),
      password:new FormControl('',[Validators.minLength(8),Validators.required])
    }
    ) 
  userdata: any;
  user:any;
  loggedIn:any;
  constructor(private route:Router,private authService:AuthService,private authServiceGogle: SocialAuthService, private data:DataService) { }


  ngOnInit() {
    this.authServiceGogle.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user.idToken)
      this.authService.Googlelogin(this.user).subscribe(result=>{
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
  
  
  
        if(this.responseData.role == "admin")
        {
        alert("Logged in Successfully")
        this.route.navigateByUrl("/adminhome")
        console.log(result.message)}
        else{
          alert("Logged into User Dashboard")
            this.route.navigateByUrl("/userdash")
        }
     
  
  
        this.x=localStorage.getItem('token');
        console.log(this.x)
  
        this.data.data(result).subscribe(result=>{
          this.userdata=result;})
        } , (error: HttpErrorResponse) => {
          this.errorData = error;
          console.log("sss",error.error.error)
          if(error.error.error=="Bad Request"){
            alert("Invalid Credential")
          }
        }
      )
  
    
    
      });
  }
  

  loginProcess()
  {
    if(this.loginformGroup.invalid)
    {
      alert("Enter valid Data")
    }
    if(this.loginformGroup.valid)
    this.authService.login(this.loginformGroup.value).subscribe(result=>{
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



      if(this.responseData.role == "admin")
      {
      alert("Logged in Successfully")
      this.route.navigateByUrl("/adminhome")
      console.log(result.message)}
      else{
        alert("Logged into User Dashboard")
          this.route.navigateByUrl("/userdash")
      }
   


      this.x=localStorage.getItem('token');
      console.log(this.x)

      this.data.data(result).subscribe(result=>{
        this.userdata=result;})
      } , (error: HttpErrorResponse) => {
        this.errorData = error;
        console.log("sss",error.error.error)
        if(error.error.error=="Bad Request"){
          alert("Invalid Credential")
        }
      }
    );

   


  }


}
