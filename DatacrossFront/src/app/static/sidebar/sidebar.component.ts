import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showAdminBoard :string|undefined;
  showUserBoard = false;
  isLoggedIn=false;
  roles:any;
  username:any;
  constructor() { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username");
    this.isLoggedIn =!!localStorage.getItem("role");
    if (this.isLoggedIn) {
      this.reload
      this.roles = localStorage.getItem("role")


      this.showAdminBoard = this.roles.includes('admin');

      this.showUserBoard = this.roles.includes('user');

        let x = localStorage.getItem("reload")
        if(x){this.reload()}
        localStorage.removeItem("reload")
        
    }

  }
  reload(){
    window.location.reload()
  }

  logout()
  {
    localStorage.clear();
    window.location.reload()
  }

}
