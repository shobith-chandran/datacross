import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbconnectService } from 'src/app/admin/services/dbconnect.service';
import { CsvdataService } from 'src/app/user/userservices/csvdata.service';
import { saveAs } from 'file-saver';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-equipment-view',
  templateUrl: './equipment-view.component.html',
  styleUrls: ['./equipment-view.component.css']
})
export class EquipmentViewComponent implements OnInit {
  responseData: any;
  equipId: any;
  price: any;
  form: any;
  GetCart: any;
  file:any;
  errorData: any;

  constructor(private route : Router, private qrsevice:CsvdataService,
    private router: ActivatedRoute,private dbService:DbconnectService) { }

  ngOnInit(): void {
    
    this.equipId = this.router.snapshot.params['equipId'];
    this.dbService.getEquipByID(this.equipId).subscribe(result=>{
    this.responseData=result;
    console.log(result)
    this.QR();
  })
}

addtoCart()
{
  console.log(this.responseData,"prrrrr")
  this.dbService.AddToCartOfUser(this.responseData).subscribe(result=>{
    this.GetCart=result;
    console.log(result)})
    localStorage.setItem('reload',"reload")
    this.route.navigateByUrl("/cart")
}

QR(){
  this.qrsevice.QRGenerater(this.responseData.deviceId).subscribe(result=>{this.file=result
  console.log(result.text)
}, (error: HttpErrorResponse) => {
  this.errorData = error.error.text;
  console.log("sss",error.error.text)
  if(error.error.error=="Bad Request"){
    alert("Invalid Credential")
  }
});
}

}
