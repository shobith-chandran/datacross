import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbconnectService } from '../services/dbconnect.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  responseData:any;
  orgData:any;
  x:any;
  errorData:any
  userformGroup:FormGroup=new FormGroup(
    { 
      name:new FormControl('',Validators.required),
      orgId:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.email,Validators.required]),
      
    }
    ) 
  id: any;
  getUser: any;
  user:any;
    constructor(private route: Router, private dbService: DbconnectService, private router: ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id)
    this.dbService.getUserbyID(this.id).subscribe(results => {
      this.getUser = results;
      console.log(results)
      this.userformGroup.patchValue(results)
    });

    this.dbService.getOrg().subscribe(result => {
      this.orgData = result;
      if (result) {
        console.log(result.message)
      }
    });

  }
editUser(){
console.log(this.userformGroup)
  if (this.userformGroup.valid)
  alert("valid")
this.dbService.editUserById(this.id, this.userformGroup.value).subscribe(result => {
  if (result) {
    alert("User updated Successfully")
    console.log(result)
    this.route.navigateByUrl('/userview')
  }
  else {
    alert("failed")
    console.log(result)
    alert()
  }
}, (error: HttpErrorResponse) => {
  this.errorData = error;
  console.log("sss",error.error.error)
  if(error.error.error=="Bad Request"){
    alert("Invalid Data Entered")
  }})


}
}
