import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbconnectService } from '../../services/dbconnect.service';

@Component({
  selector: 'app-deviceview',
  templateUrl: './deviceview.component.html',
  styleUrls: ['./deviceview.component.css']
})
export class DeviceviewComponent implements OnInit {
  responseData: any;
  id:any;
  getDevice:any;
  tableSize: number = 5;
  count: number = 0;
  totalElements: any;



  constructor(private route:Router,private dbService:DbconnectService) { }

  ngOnInit(): void {
    this.dbService.getPaginatedDevices(this.count, this.tableSize).subscribe(result=>{
    this.responseData=result.result;
    this.totalElements = result.numItems;
    
    if(result){
    // alert("Device view Successfully")
    console.log(result.message)}


  })
  }
  deleteDev(data:any){
    console.log("d",data)
    this.id=data.deviceId
    console.log(this.id)
    // localStorage.setItem('EditItemId',this.id)
    this.dbService.AdmindeleteDev(this.id).subscribe(results=>{
      this.getDevice=results;
      console.log(results)
      if(results)
      {
        alert("Device Deleted")
        window.location.reload();
      }
      
    });
  }
  pageChanged(event: any) {
    console.log(event)
    this.dbService.getPaginatedDevices(event - 1, this.tableSize).subscribe(result => {
      this.responseData = result.result;
      this.count = result.currentPage;
      this.totalElements = result.numItems
      this.count = result.currentPage;


    })


  }
 
}