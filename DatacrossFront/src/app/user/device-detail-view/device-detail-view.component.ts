import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbconnectService } from 'src/app/admin/services/dbconnect.service';

@Component({
  selector: 'app-device-detail-view',
  templateUrl: './device-detail-view.component.html',
  styleUrls: ['./device-detail-view.component.css']
})
export class DeviceDetailViewComponent implements OnInit {

    responseData: any;
    device: any;
  id: any;
    constructor(private route:Router,private data:DbconnectService, private router: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.id = this.router.snapshot.params['id'];
      this.data.getDevicebyID(this.id).subscribe(result=>{
        this.device=result;
        
        // alert("Device view Successfully")
        console.log("ssddsssss",result)
    })
  
    }
    
  
  }
  