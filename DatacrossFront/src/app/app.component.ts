import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Datacross';
  username:any;
  ngOnInit() {
    this.username=localStorage.getItem("username");
  }

}
