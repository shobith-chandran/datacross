import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';

import { Chart, registerables } from 'chart.js';
import { CsvdataService } from '../userservices/csvdata.service';
import { saveAs } from 'file-saver';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
Chart.register(...registerables)

@Component({
  selector: 'app-csv-export',
  templateUrl: './csv-export.component.html',
  styleUrls: ['./csv-export.component.css']
})
export class CsvExportComponent implements OnInit {

  chartdata:any;
currentdate:any;
id:any;
device:any;
title:any;

datebtw:FormGroup=new FormGroup(
  { 
    startdate:new FormControl('',Validators.required),
    enddate:new FormControl('',[Validators.required]),
    type:new FormControl('',Validators.required)
    
  }
  ) 
  file:any;
  Data:any; 
  pdfOptions: any;
  workspaceService: any;
  constructor(private csvdata:CsvdataService,
    private route: Router,
    private router: ActivatedRoute,
    private toast: NgToastService ) {
  
   }
    filenames: string[] = [];
    fileStatus = { status: '', requestType: '', percent: 0 };
   
   public mychart: any;
    section1Out:any[] = [];
    section1In: any[] = [];
    RealDates: any[] = [];
    logdatetime:any;
    Dates: any[] = [];

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.device =this.router.snapshot.params['device']
    console.log(this.id)
    console.log("aaa",this.device)

 this.currentdate= new Date();
    console.log(this.datebtw);
    this.csvdata.csvdata(this.datebtw,this.id).subscribe(result=>{
      this.chartdata=result;
      this.Dates = (this.chartdata.labels)
      this.section1In = (this.chartdata.section1IN)
      this.section1Out = (this.chartdata.section1OUT)

      if(this.mychart){ 
        this.mychart.destroy();
        this.createChart();
      }
      else{  this.mychart = new Chart("MyChart", {
        type: 'bar', //this denotes the type of chart
        data: { //values on X-Axis
          labels:this.Dates, 
           datasets: [
            {
              label: "Vistors In",
              data: this.section1In,
              backgroundColor: 'red'
            },
            {
              label: "Visitors Out",
              data: this.section1Out,
              backgroundColor: 'blue'
            }  
          ]
        },
        options: {
          aspectRatio:3.3
        } 
      });
    }
})

}
clickEvent(){ 
  if(this.datebtw.invalid){
    alert("Invalid Dates")
  }
 
this.ngOnInit();
this.csvdata.exportExcel(this.datebtw,this.id).subscribe((blob:any)=>saveAs(blob,this.file));
this.csvdata.exportPDF(this.datebtw,this.id).subscribe((blob:any)=>saveAs(blob,this.file));

}

pdfExport(){

  this.csvdata.exportPDF(this.datebtw,this.id).subscribe((blob:any)=>saveAs(blob,this.file));

}
excellExport(){
this.csvdata.exportExcel(this.datebtw,this.id).subscribe((blob:any)=>saveAs(blob,this.file));
}

  createChart(){ this.mychart = new Chart("MyChart", {
    type: 'bar', //this denotes the type of chart
    data: { //values on X-Axis
      labels:this.Dates, 
       datasets: [
        {
          label: "Vistors In",
          data: this.section1In,
          backgroundColor: 'red'
        },
        {
          label: "Visitors Out",
          data: this.section1Out,
          backgroundColor: 'blue'
        }  
      ]
    },
    options: {
      aspectRatio:3.3
    } 
  });


   
  }


  onUploadFiles(files: File[]): void {
    const formData = new FormData();
    for (const file of files) { formData.append('file', file, file.name); }
    this.csvdata.upload(formData).subscribe(
      event => {
        if(event){
          this.toast.success({detail:"Upload Complete",summary:"Data Uploaded Succesfully", sticky:true,position:"Center"})
          this.route.navigateByUrl("/userdevice")
        }
        console.log(event);
  (error: HttpErrorResponse) => {
        console.log(error);
        alert(error)
      }}
    ); 
    
  }



}





