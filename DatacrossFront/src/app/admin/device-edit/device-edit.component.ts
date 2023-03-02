import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbconnectService } from '../services/dbconnect.service';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {

  getDevice: any;
  responseData: any;
  x: any;
  errorData: any
  orgformGroup: FormGroup = new FormGroup(
    {
      deviceName: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required]),
      orgId: new FormControl('', Validators.required),
    }

  )
  id: any;
  device: any;
  orgData: any;
  constructor(private route: Router, private dbService: DbconnectService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.dbService.getOrg().subscribe(result => {
      this.orgData = result;
      if (result) {
        console.log(result.message)

      }
    })

    this.id = this.router.snapshot.params['id'];
    this.device = this.router.snapshot.params['device'];
    console.log(this.id)
    this.dbService.getDevicebyID(this.id).subscribe(results => {
      this.getDevice = results;
      console.log(results)
      this.orgformGroup.patchValue(results)

    });



    console.log(this.getDevice);


  }
  editDevice() {

    if (this.orgformGroup.valid)
      alert("yeh")
    this.dbService.AdminEditDeviceById(this.id, this.orgformGroup.value).subscribe(result => {
      if (result) {
        alert("Device Update Successfully")
        console.log(result)
        this.route.navigateByUrl('/deviceview')
      }
      else {
        alert("Invalid Username or Password")
        console.log(result)
        alert()
      }
    }, (error: HttpErrorResponse) => {
      this.errorData = error;
      console.log("sss", error.error.error)
      if (error.error.error == "Bad Request") {
        alert("Invalid Data Entered")
      }
    })
  }
}

