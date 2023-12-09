import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { ElementSchemaRegistry } from '@angular/compiler';

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
    var isOK = this.validateLogin(this.loginInfo.Username,this.loginInfo.Password);
    if(isOK == true) {
      if(this.loginInfo.Username == "admin" && this.loginInfo.Password == "123456"){
        this.appComponent.isMenuShowFlg = true;
        this.appComponent.isFooterShowFlg = true;
        window.location.href = '/#/home';
      }
    } else {
      alert("LOGIN THẤT BẠI");
    }
  }

  validateLogin(userLogin:string,passLogin:string){ 
    var status =false;
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if(userLogin !=null && userLogin.trim() !="")
    {
      if( (userLogin.length > 0 && userLogin.length <= 20))
      {
          if(usernameRegex.test(userLogin))
          {
            if(passLogin!= null && passLogin!="")
            {
              status = true;
            }
            else
            {
              alert("Mật khẩu không được trống");
            }

          }
          else
          {
            alert("Không được nhập chữ đặc biệt");
          }

      }
      else
      {
        alert("Vượt quá kí tự cho phép - 20 ");
      }
    }
    else
    {
      alert("Tài khoản không được rỗng");
    }
    return status;
  }

}
