import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy{
  
  constructor(
    private appComponent: AppComponent
  ){
    this.appComponent.isMenuShowFlg = false;
    this.appComponent.isFooterShowFlg = false;
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {

  }

  onLogin(){
    
  }

}
