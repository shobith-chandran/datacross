import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbconnectService } from 'src/app/admin/services/dbconnect.service';
import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  responseData: any;
  selectedImage:any;
  ImageArray:any[] = [];

    title = 'angular-google';
    user:any;
    loggedIn:any;
    constructor(private authService: SocialAuthService) { }
  
    ngOnInit() {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
        console.log(this.user)
      });
    }
  
  }
  