import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbconnectService } from '../../services/dbconnect.service';

@Component({
  selector: 'app-organization-view',
  templateUrl: './organization-view.component.html',
  styleUrls: ['./organization-view.component.css']
})
export class OrganizationViewComponent implements OnInit {

  responseData: any;
  getOrg: any;
  id: any;
  tableSize: number = 5;
  count: number = 0;
  totalElements: any;

  constructor(private route: Router, private dbService: DbconnectService) { }

  ngOnInit(): void {

    this.dbService.getPaginatedOrg(this.count, this.tableSize).subscribe(result => {
      this.responseData = result.result;
      this.totalElements = result.numItems;
    })
  }

  deleteOrg(data: any) {
    this.id = data.orgId
    this.dbService.deleteOrg(this.id).subscribe(results => {
      this.getOrg = results;
      console.log(results)
      if (results) {
        alert("Organization Deleted")
        window.location.reload();
      }

    });
  }
  pageChanged(event: any) {
    console.log(event)
    this.dbService.getPaginatedOrg(event - 1, this.tableSize).subscribe(result => {
      this.responseData = result.result;
      this.count = result.currentPage;
      this.totalElements = result.numItems
      this.count = result.currentPage;


    })


  }
}