import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import{TestService}from '../../services/user-services/User.service'
import{User} from '../../models/reset.models'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  userObj: User = new User();
  result:any;
  response: any;
  public password = new FormControl('', [Validators.required, Validators.minLength(8)])
public confirmPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
getPasswordInvalidMessage() {
  if (this.password.hasError("required")) {
  return ("Password is required");
  }
  if (this.password.hasError("minLength")) {
  return ("Minimum Length of 8 ")
  }
  }
  getMatchedPasswordsMessage(password, confirmPassword) {
  if (password != confirmPassword)
  return ("Password doesn't matches")
  else
  return ("Password Matches")
  }

  constructor(private svc:TestService, private route:ActivatedRoute) { }
  token:string;
  ngOnInit() {
    this.token=this.route.snapshot.paramMap.get('token');
    localStorage.setItem('token',this.token);
  }
  onReset() {
    this.userObj = {
      newPassword: this.password.value,
      service:"basic"
    }
    let obj={
      data: this.userObj,
      url: 'reset-password'
    }
    this.result= this.svc.PostwithToken(obj);
    this.result.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    },
    (error)=>{
      console.log(error);
    });
  }

}
