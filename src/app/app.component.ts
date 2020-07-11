import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private appservice:AppService, private router :Router)
  {

  }
  /*ShowHideSideBar:boolean =false;

  showbar(x):void
  {
    this.ShowHideSideBar=x;
  }*/
  ngOnInit(): void {
    // if the user is not authenticated yet , redige it to the login page
    if(!this.appservice.authenticated)
    {
      this.router.navigateByUrl('/login');
    }
    else
    {
      this.router.navigateByUrl('/home'); 
    }
  }

}
