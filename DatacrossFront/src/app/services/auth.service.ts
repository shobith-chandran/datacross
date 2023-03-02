import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
    constructor(private http:HttpClient) { }
    login(data: any):Observable<any>{
      return this.http.post('http://localhost:8080/login',data);
    }

    Googlelogin(data: any):Observable<any>{
      return this.http.post('http://localhost:8080/login/google/signin',data);
    }

    GoogleEnquirylogin(data: any):Observable<any>{
      return this.http.post('http://localhost:8080/login/google/Enquiry',data);
    }


  }