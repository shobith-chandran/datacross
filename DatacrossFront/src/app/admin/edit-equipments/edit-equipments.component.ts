import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbconnectService } from '../services/dbconnect.service';

@Component({
  selector: 'app-edit-equipments',
  templateUrl: './edit-equipments.component.html',
  styleUrls: ['./edit-equipments.component.css']
})
export class EditEquipmentsComponent implements OnInit {

  getDevice: any;
  responseData: any;
  x: any;
  errorData: any
  orgformGroup: FormGroup = new FormGroup(
    {
      equipName: new FormControl('', Validators.required),
      deviceId: new FormControl('2', Validators.required),
      price: new FormControl('', [Validators.required]),
      equipAvail: new FormControl('', [Validators.required]),
    }
  )
  id: any;
  device: any;
  DevData: any;
  constructor(private route: Router, private dbService: DbconnectService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.dbService.getDevice().subscribe(result => {
      this.DevData = result;
      if (result) {
        console.log(result.message)

      }
    })

    this.id = this.router.snapshot.params['id'];
    this.device = this.router.snapshot.params['device'];
    console.log(this.id)
    this.dbService.getEquipByID(this.id).subscribe(results => {
      this.getDevice = results;
      console.log(results)
      this.orgformGroup.patchValue(results)

    });


  }
  editEquip() {

    if (this.orgformGroup.valid)
      alert("Valid")
    this.dbService.EditEquipById(this.id, this.orgformGroup.value).subscribe(result => {
      if (result) 
      {
        alert("Equipment Updated")
        console.log(result)
        this.route.navigateByUrl('/AdminEquipView')
      }
      else {
        alert("Invalid Username or Password")
        console.log(result)
        alert()
      }
    }, (error: HttpErrorResponse) => {
      this.errorData = error;
      alert(error.error.error)
      if(error.error.error=="Bad Request"){
        alert("Invalid Data Entered")
      }
    })


  }
  setvalue()
  {
    // let value=document.getElementById("plan")
    console.log(this.orgformGroup.controls['orgId'].value)
  }
}

