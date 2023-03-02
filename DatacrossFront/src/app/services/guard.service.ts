import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {


  constructor() { }
  adminLoggedIn(){
    let role=localStorage.getItem('role')
    if(role == "admin"){
      localStorage.setItem("yes", role)
    }
    return !!localStorage.getItem('yes')
    
  }

  userLoggedIn(){
    let role=localStorage.getItem('role')
    if(role == "user"){
      localStorage.setItem("no", role)
    }
    return !!localStorage.getItem('no') 
  }

Deactivate(){
    let role=localStorage.getItem('role')
    if(role){
      console.log("ngaaaaaaaaa role")
      localStorage.setItem("tag","Deactivate")
    }
    return !!localStorage.getItem('tag')
  }

}