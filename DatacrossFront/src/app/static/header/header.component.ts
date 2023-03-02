import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
username:any;
  isLoggedIn:any;
  show: any;
  roles: any;
  showHeader: any;
  constructor() { }

  ngOnInit(): void {
    this.username = localStorage.getItem("username")

    this.isLoggedIn =!!localStorage.getItem("username")
    if (this.isLoggedIn) {
      this.roles=localStorage.getItem("flag")
      this.showHeader = this.roles.includes('LoginFlag')

    }


  }

}
