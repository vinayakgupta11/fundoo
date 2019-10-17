import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import{TestService}from '../../services/user-services/User.service'
import{User} from '../../models/forgot.models'

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  userObj: User = new User();
  result:any;
  response: any;
  TokenAuth:boolean= false;
  public email = new FormControl('', [Validators.required, Validators.email]);
  getEmailInvalidMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
    this.email.hasError('email') ? 'Not a valid email' : '';
    }

  constructor(private svc: TestService) { }

  ngOnInit() {
  }
  onforgot() {

    this.userObj = {
      email: this.email.value,
      service: "basic"
    }
    let obj={
      data: this.userObj,
    }
    this.result= this.svc.forgot(obj,this.TokenAuth);
    this.result.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
  }


}
