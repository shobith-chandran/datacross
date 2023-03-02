import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/user/data.service';

@Component({
  selector: 'app-guesthome',
  templateUrl: './guesthome.component.html',
  styleUrls: ['./guesthome.component.css']
})
export class GuesthomeComponent implements OnInit {

  userdata: any;
  user:any;
  loggedIn:any;
  constructor(private route:Router, private data:DataService) { }


  ngOnInit() {

  }
}
