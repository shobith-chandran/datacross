import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { map } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
RData:any;
  constructor() { }

  data(datebtw:any):Observable<any>{
   console.log("you did it",datebtw)
   this.RData=datebtw
    return datebtw;

  }
getUserdata(){
  return this.RData
}

}
