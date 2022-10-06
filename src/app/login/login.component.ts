
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../sevices/admin.service';
import { User } from '../model/User';
import * as alertify from 'alertifyjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AdminService, private route:Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  respdata:any;
  user : User;
  login_user_msg: string;
  has_error = false;
  hide = true;
  userId : String;

  ProdceedLogin(logindata: any) {
    if (logindata.valid) {
      this.service.ProceedLogin(logindata.value).subscribe((item: any) => {
        this.has_error = false;
        this.login_user_msg = 'Logining, Please wait... !!!';
        this.respdata=item;
        if(this.respdata["userProjection"]!=null){
          this.user=this.respdata["userProjection"];
        if(this.user.userName!=null){
          console.log("Logged in user "+ this.user.userName);
          alert("Logged in successfully");
          this.userId=this.user.userId;
          localStorage.setItem('loginValid', 'yes');
          localStorage.setItem('userRole', JSON.stringify(this.user.userRole));
          localStorage.setItem('userId', JSON.stringify(this.user.userId));
          this.route.navigate(['/home']);

        }
        
      }else{
        alert("Login Failed Invalid Username and Password !!!");
        }
      });

    }
  }

  Logout(){
    localStorage.clear();
    this.route.navigate(['/login']);
  }

}
