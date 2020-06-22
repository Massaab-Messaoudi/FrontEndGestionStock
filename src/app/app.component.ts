import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ShowHideSideBar:boolean =false;

  showbar(x):void
  {
    this.ShowHideSideBar=x;
  }

}
