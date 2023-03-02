import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DbconnectService } from 'src/app/admin/services/dbconnect.service';

@Component({
  selector: 'app-user-deviceedit',
  templateUrl: './user-deviceedit.component.html',
  styleUrls: ['./user-deviceedit.component.css']
})
export class UserDeviceeditComponent implements OnInit {
  
  getDevice: any;
  responseData: any;
  x: any;
  errorData: any
  orgformGroup: FormGroup = new FormGroup(
    {
      deviceName: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required])
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
    console.log(this.orgformGroup.value)


  }
  editDevice() {
    console.log(this.orgformGroup.value)
    if (this.orgformGroup.valid)
      alert("yeh")
    this.dbService.editDeviceById(this.id, this.orgformGroup.value).subscribe(result => {
      if (result) 
      {
        alert("Device Update Successfully")
        console.log(result)
        this.route.navigateByUrl('/userdevice')
      }
      else {
        alert("Invalid Username or Password")
        console.log(result)
        alert()
      }
    })


  }
  setvalue()
  {
    // let value=document.getElementById("plan")
    console.log(this.orgformGroup.controls['orgId'].value)
  }
}