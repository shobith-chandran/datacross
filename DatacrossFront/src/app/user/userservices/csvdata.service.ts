import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { map } from  'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CsvdataService {
  private server = 'http://localhost:8080';
  startdate:any;
  enddate:any;
  type:any;
  url:any;
  id:any;

    constructor(private http:HttpClient ) { }
    csvdata(datebtw:any,id:any):Observable<any>{
      let token=localStorage.getItem('token')
      this.type = datebtw.controls['type'].value
      this.startdate =  datebtw.controls['startdate'].value
      this.enddate =  datebtw.controls['enddate'].value
      this.id = id;
      console.log("helo",this.type,this.startdate,this.enddate)
      let  head_obj=new HttpHeaders({"Authorization":"Projectone "+token})
      return this.http.get("http://localhost:8080/csv/csvdata/"+this.id+"/"+this.type+"/"+this.startdate+"/"+this.enddate,{headers:head_obj});
    }


    uploadMedia(formData: FormData): Observable<HttpEvent<string[]>> {
      let x=localStorage.getItem('token')
      let  head_obj=new HttpHeaders({"Authorization":"Projectone " +x})
     return this.http.post<string[]>(`${this.server}/upload`, formData, {headers:head_obj,
       reportProgress: true,
       observe: 'events'
     });

   }


    upload(formData: FormData): Observable<HttpEvent<string[]>> {
       let x=localStorage.getItem('token')
       let  head_obj=new HttpHeaders({"Authorization":"Projectone " +x})
      return this.http.post<string[]>(`${this.server}/csv/upload`, formData, {headers:head_obj,
        reportProgress: true,
        observe: 'events'
      });

    }
    
    exportExcel(datebtw:any,id:any): Observable<Blob> {
      let token=localStorage.getItem('token')
      this.type = datebtw.controls['type'].value
      this.startdate =  datebtw.controls['startdate'].value
      this.enddate =  datebtw.controls['enddate'].value
      this.id = id;
      console.log("No Way")
      let  head_obj=new HttpHeaders({"Authorization":"Projectone " +token})
      return this.http.get("http://localhost:8080/excel/download/"+this.id+"/"+this.type+"/"+this.startdate+"/"+this.enddate, {headers:head_obj,responseType: 'blob' });
    }

    exportPDF(datebtw:any,id:any): Observable<Blob> {
      let token=localStorage.getItem('token')
      this.type = datebtw.controls['type'].value
      this.startdate =  datebtw.controls['startdate'].value
      this.enddate =  datebtw.controls['enddate'].value
      this.id = id;
      console.log("No Way")
      let  head_obj=new HttpHeaders({"Authorization":"Projectone " +token})
      console.log("No Way")
      return this.http.get("http://localhost:8080/pdf/export/"+this.id+"/"+this.type+"/"+this.startdate+"/"+this.enddate, {headers:head_obj,responseType: 'blob' });
    }

    QRGenerater(id:any): Observable<any> {
      let token=localStorage.getItem('token')
      console.log("No Way")
      let  head_obj=new HttpHeaders({"Authorization":"Projectone " +token})
      console.log("No Way")
      return this.http.get("http://localhost:8080/QR/"+id, {headers:head_obj});
    }

  }
    
    