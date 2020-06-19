import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ShowHideSideBar=false;

  ShowSideBar():void
  {
    this.ShowHideSideBar=!this.ShowHideSideBar;
  }
}
