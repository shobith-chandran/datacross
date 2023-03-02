import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbconnectService } from '../services/dbconnect.service';

@Component({
  selector: 'app-register-equipments',
  templateUrl: './register-equipments.component.html',
  styleUrls: ['./register-equipments.component.css']
})
export class RegisterEquipmentsComponent implements OnInit {
  orgData:any;
  responseData:any;
    x:any;
    errorData:any
    orgformGroup:FormGroup=new FormGroup(
      {
        equipName: new FormControl('', Validators.required),
        deviceId: new FormControl('', Validators.required),
        price: new FormControl('', [Validators.required]),
        equipAvail: new FormControl('', [Validators.required]),
      }
      ) 
  DevData: any;
    constructor(private route:Router,private dbService:DbconnectService) { }
    ngOnInit(): void {
  
      this.dbService.getDevice().subscribe(result=>{
        this.DevData=result;
        if(result){
        console.log(result)
      }
  })
  
    }
    devreg()
    {
      console.log(this.orgformGroup.value)
      if(this.orgformGroup.invalid)
      {
        alert("Enter valid Data")
      }
      if(this.orgformGroup.valid)
      console.log(this.orgformGroup.value)
      this.dbService.addEquipment(this.orgformGroup.value).subscribe(result=>{
        this.responseData=result;
        if(result){
        alert("Device Added Successfully")
        this.route.navigateByUrl("/EquipmentGrid")
        console.log(result.message)}
        console.log(this.x)
      }, (error: HttpErrorResponse) => {
        this.errorData = error;
        console.log("sss",error.error.error)
        if(error.error.error=="Bad Request"){
          alert("Invalid Data Entered")
        } })
    }
  }
  