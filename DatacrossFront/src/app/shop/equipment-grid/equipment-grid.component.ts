import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbconnectService } from 'src/app/admin/services/dbconnect.service';

@Component({
  selector: 'app-equipment-grid',
  templateUrl: './equipment-grid.component.html',
  styleUrls: ['./equipment-grid.component.css']
})
export class EquipmentGridComponent implements OnInit {
  responseData: any;

  constructor(private route:Router,private dbService:DbconnectService) { }

  ngOnInit(): void {
    this.dbService.getEquip().subscribe(result=>{
    this.responseData=result;
    console.log(result)})

}
}