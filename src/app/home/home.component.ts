import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ShowHideSideBar:boolean =false;



  constructor() { 
    
  }

  ngOnInit(): void {
  }
  showbar(x):void
  {
    this.ShowHideSideBar=x;
  }

}
