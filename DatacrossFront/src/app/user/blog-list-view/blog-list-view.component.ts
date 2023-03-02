import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbconnectService } from 'src/app/admin/services/dbconnect.service';

@Component({
  selector: 'app-blog-list-view',
  templateUrl: './blog-list-view.component.html',
  styleUrls: ['./blog-list-view.component.css']
})
export class BlogListViewComponent implements OnInit {
  responseData: any;

  constructor(private route:Router,private dbService:DbconnectService) { }

  ngOnInit(): void {
    this.dbService.getBlogList().subscribe(result=>{
    this.responseData=result;
    console.log(result)})

}


}