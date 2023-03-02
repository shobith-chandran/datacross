import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbconnectService } from 'src/app/admin/services/dbconnect.service';
import { saveAs } from 'file-saver';
import { ImgMaxSizeService } from 'ng2-img-max';

@Component({
  selector: 'app-post-detail-view',
  templateUrl: './post-detail-view.component.html',
  styleUrls: ['./post-detail-view.component.css']
})
export class PostDetailViewComponent implements OnInit {
  responseData: any;
  BlogList: any;
  slug: any;
  id: any;
  file: any;





  constructor(private route: Router,
    private router: ActivatedRoute, private data: DbconnectService) { }
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    // this.sub = this.router.params
    // .subscribe(params => {
    //    // get id from params
    //    let id = +params['id'];

    this.slug = this.router.snapshot.params['slug'];
    console.log(this.id, "yeah", this.slug)
    this.data.getPostbyID(this.id).subscribe(result => {
      this.responseData = result;


      // alert("Device view Successfully")
      console.log("ssddsssss", result)
    });

    this.data.getPostList(1, 3).subscribe(result => {
      this.BlogList = result.result;
      console.log(result)
    })
    //  });
  }


  divReload(data:any) {

      this.responseData = data;
}


}
