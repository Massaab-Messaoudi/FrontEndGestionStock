import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AppService} from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // declarer un type complex
  UserLogin ={username:'',password:''};
  loginform:FormGroup;
  constructor(private fb:FormBuilder,private appservice:AppService,private router:Router) { }

  ngOnInit(): void {

    this.loginform=this.fb.group({
      username:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      password:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      /*username:['',Validators.required],
      password:['',Validators.required],*/
    });
  }
  login()
  {
    // open the page /home/produit if the login info are correct
    this.appservice.Login(this.UserLogin,()=>{this.router.navigateByUrl('/home)')});
  }
}
 