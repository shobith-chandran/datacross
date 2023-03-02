import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbconnectService } from '../services/dbconnect.service';

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.css']
})
export class OrganizationEditComponent implements OnInit {
  responseData:any;
  x:any;
  errorData:any
  orgformGroup:FormGroup=new FormGroup(
    { 
      orgName:new FormControl('',Validators.required),
      licenseNo:new FormControl('',[Validators.minLength(8),Validators.required]),
      address:new FormControl('',Validators.required),
      contact:new FormControl('',Validators.required),
      pincode:new FormControl('',Validators.required)
    }
    ) 
  id: any;
  getOrg: any;

  constructor(private route: Router, private dbService: DbconnectService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.router.snapshot.params['id'];
    console.log(this.id)
    this.dbService.getOrgbyID(this.id).subscribe(results => {
      this.getOrg = results;
      console.log(results)
    });
    
  }
  editOrg()
  {
    if (this.orgformGroup.valid)
    alert("yeh")
  this.dbService.editOrgById(this.id, this.orgformGroup.value).subscribe(result => {
    if (result) {
      alert("Organization update Successfully")
      console.log(result)
      this.route.navigateByUrl('/orgview')
    }
    else {
      alert("Invalid Username or Password")
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

