import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
flag:any;
  constructor() { }

  ngOnInit(): void {
    let x = localStorage.getItem("reload")
    if(x){this.reload()}
    localStorage.removeItem("reload")
    }
  
  reload(){
 window.location.reload()
    }
  
shoot(){

}
}
