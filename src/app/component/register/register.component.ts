import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import{User} from '../../models/register.model';
import{TestService}from '../../services/user-services/User.service'
import { tokenReference } from '@angular/compiler';
import { DataService } from '../../services/data-services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userObj: User = new User();
  result:any;
  response: any;
  TokenAuth:boolean= false;
  service:string;

  hide=true;
  public firstName = new FormControl('', [Validators.required]);
  public lastName = new FormControl('', [Validators.required]);
public email = new FormControl('', [Validators.required, Validators.email]);
public password = new FormControl('', [Validators.required, Validators.minLength(8)])
public confirmPassword = new FormControl('', [Validators.required, Validators.minLength(8)])

FirstNameInvalidMessage() {
  if (this.firstName.hasError("required"))
    return "First Name is required"
}

LastNameInvalidMessage() {
  if (this.lastName.hasError("required"))
    return "Last Name is required"
}
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
  getMatchedPasswordsMessage(password, confirmPassword) {
  if (password != confirmPassword)
  return ("Password doesn't matches")
  else
  return ("Password Matches")
  }
  constructor(private svc: TestService,private datasvc: DataService) {
  } 
  ngOnInit() {
    this.datasvc.ServiceMessage.subscribe((res)=>
    {this.service=res;
    })
  }
  onRegister() {
    this.userObj = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value,
      service: this.service
    }
    let obj={
      data: this.userObj,
    }
    this.result= this.svc.Register(obj,this.TokenAuth);
    this.result.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
  }
  
}
