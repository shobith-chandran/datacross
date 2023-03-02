import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbconnectService } from '../../services/dbconnect.service';

@Component({
  selector: 'app-view-equipments',
  templateUrl: './view-equipments.component.html',
  styleUrls: ['./view-equipments.component.css']
})
export class ViewEquipmentsComponent implements OnInit {
  responseData: any;
  id:any;
  getDevice:any;


  constructor(private route:Router,private dbService:DbconnectService) { }

  ngOnInit(): void {
    this.dbService.getEquip().subscribe(result=>{
    this.responseData=result;
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

 
}