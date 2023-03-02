import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, VERSION, ViewChild } from '@angular/core';

import { Chart, registerables } from 'chart.js';
import { CsvdataService } from '../userservices/csvdata.service';
import { saveAs } from 'file-saver';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as XLSX from "xlsx";
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import jsPDF from 'jspdf';
Chart.register(...registerables)
@Component({
  selector: 'app-csvview',
  templateUrl: './csvview.component.html',
  styleUrls: ['./csvview.component.css']
})
export class CsvviewComponent implements OnInit {
  name = "Angular " + VERSION.major;
  data:any;
  element:any;
  title="export-to-excel";
  fileName = "ExcelSheet.xlsx";
  chartdata:any;
  currentdate:any;
  id:any;
  device:any;

  
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
     
 
      section1Out:any[] = [];
      section1In: any[] = [];
      RealDates: any[] = [];
      logdatetime:any;
      Dates: any[] = [];
      exportexcel() {
        this.ngOnInit();
        this.csvdata.csvdata(this.datebtw,this.id).subscribe(result=>{
          this.chartdata=result;
          this.Dates = (this.chartdata.labels)
          this.section1In = (this.chartdata.section1IN)
          this.section1Out = (this.chartdata.section1OUT)
    })
        console.log("element")
        let element = document.getElementById("excel-table");
         const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
         const wb: XLSX. WorkBook = XLSX.utils.book_new( );
          XLSX. utils.book_append_sheet(wb, ws, "Sheet1");
          XLSX.writeFile(wb, this.fileName);
      }
    ngOnInit(): void {
      this.id = this.router.snapshot.params['id'];
      this.device =this.router.snapshot.params['device']
      console.log(this.id)
      console.log("aaa",this.device)
  
   this.currentdate= new Date();
      console.log(this.datebtw);
      if(this.datebtw.valid){
      this.csvdata.csvdata(this.datebtw,this.id).subscribe(result=>{
        this.chartdata=result;
        this.Dates = (this.chartdata.labels)
        this.section1In = (this.chartdata.section1IN)
        this.section1Out = (this.chartdata.section1OUT)
  
    

          // this.element.destroy();
          // this.exportexcel();

        // this.element = document.getElementById("excel-table");
        //  const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.element);
        //  const wb: XLSX. WorkBook = XLSX.utils.book_new( );
        //   XLSX. utils.book_append_sheet(wb, ws, "Sheet1");
        //   XLSX.writeFile(wb, this.fileName);


})
      }
      else{
        // alert("Invalid Date")
      }
}
  clickEvent(){ 
    if(this.datebtw.valid){  this.ngOnInit();}
    else{
      alert("enter valid dates")
    }

  }

  public onExport() {
    const doc = new jsPDF("p", "pt", "a4");
    const source = 
    // doc.text("Test", 40, 20);
    doc.setFontSize(12)
    // doc.html(source, {
    //   callback: function(_pdf) {
    //     doc.output("dataurlnewwindow"); // preview pdf file when exported
    //   }
    // });
    // autotable(doc, {
    //   html: '#content',
    //   useCss: true
    // })
  }

  openPDF(): void {
    this.data= document.getElementById("excel-table");
    console.log(this.data)
    const doc: jsPDF = new jsPDF("p", "pt", "a2");
    doc.html(this.data, {
      callback: (doc) => {
        doc.save("download.pdf");
      }
    });
  }

}
    
  
  
  
  
  
 