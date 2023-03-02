import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let x = localStorage.getItem("reload")
    if(x){this.reload()}
    localStorage.removeItem("reload")
    }
  
  reload(){
 window.location.reload()
    }
  
  }
