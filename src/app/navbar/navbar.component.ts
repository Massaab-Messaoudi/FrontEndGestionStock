import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()  
  Showsidebar:boolean;
  @Output()
  Showsidebarchange:EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor(private router :Router , private appservice:AppService) {
    
   }

  ngOnInit(): void {
  }
  affichersidebar():void
  {
    this.Showsidebar=!this.Showsidebar;
    this.Showsidebarchange.emit(this.Showsidebar);
  }
  logout()
  {
    this.appservice.Logout(()=>{this.router.navigateByUrl('/login')});
  }
}
