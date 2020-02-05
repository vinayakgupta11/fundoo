import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import{TestService}from '../../services/user-services/User.service'
import{User} from '../../models/login.model'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import {DataService} from '../../services/data-services/data.service'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  result:any;
  TokenAuth:boolean= false;
  public hide = true;
  
  userObj: User = new User();
  public email = new FormControl('', [Validators.required, Validators.email]);
public password = new FormControl('', [Validators.required, Validators.minLength(8)]);
getEmailInvalidMessage() {
  return this.email.hasError('required') ? 'You must enter a value' :
  this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordInvalidMessage() {
  if (this.password.hasError("required")) {
  return ("Password is required");
  }
  if (this.password.hasError("minLength")) {
  return ("Minimum Length of 8 ")
  }
  }


  constructor(private _snackBar: MatSnackBar,private spinnerService: Ng4LoadingSpinnerService,private svc: TestService, private router:Router,private auth: AuthService, private datasvc: DataService) { }

  ngOnInit() {
   
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
  onLogin() {
    this.spinnerService.show();
    this.userObj = {
      email: this.email.value,
      password: this.password.value,
      service: "basic"
    }
    let obj={
      data: this.userObj,
    }
    this.result= this.svc.Login(obj,this.TokenAuth);
    this.result.subscribe((response) => {
      
      console.log(response);
      this.openSnackBar('successfully login',"Close");
     // this.datasvc.changeMessage(response);
      localStorage.setItem('id',response.id);
      localStorage.setItem('email',response.email);
      localStorage.setItem('firstName',response.firstName);
      localStorage.setItem('lastName',response.lastName);
      localStorage.setItem('UserId',response.userId);
      localStorage.setItem('imageUrl', response.imageUrl)
      this.auth.sendToken(response.id);
      this.router.navigate(['/display-notes']);
      this.spinnerService.hide();
    },(error)=>{
      this.openSnackBar('Incorrect email or password',"Close");
      console.log(error);
    });
  }

}
