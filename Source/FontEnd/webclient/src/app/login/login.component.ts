import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy{

  //khai báo biến
  public loginInfo = {
    Username:"",
    Password:""
  };

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
    var isOK = this.validateLogin();
    if(isOK == true) {
      alert("LOGIN THÀNH CÔNG");
    } else {
      alert("LOGIN THẤT BẠI");
    }
  }

  validateLogin(){
    alert("1111111111 = " + this.loginInfo.Username);
    alert("2222222222 = " + this.loginInfo.Password);

    return true;
  }

}
