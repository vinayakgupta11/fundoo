import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/register.model';
import { TestService } from '../../services/user-services/User.service'
import { tokenReference } from '@angular/compiler';
import { DataService } from '../../services/data-services/data.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userObj: User = new User();
  result: any;
  response: any;
  TokenAuth: boolean = false;
  service: string;
  options: any;
  cartid:any;

  hide = true;
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
  constructor(private svc: TestService, private datasvc: DataService, private _snackBar: MatSnackBar) {
  }
  ngOnInit() {
    this.datasvc.ServiceMessage.subscribe((res) => {
    this.service = res;
      console.log('ff', this.service);
    })
    this.AddToCart();
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  AddToCart() {
    
    if (this.service == 'Advance') {
      let cartid =
      {
        "productId": '5bfe361553c3df0040d852a6'
      }
      this.options={
        data: cartid
      }
      this.svc.AddToCart(this.options, this.TokenAuth).subscribe((res:any)=>
      {
        this.cartid = res.data.details.id
        console.log('ghjgjg',this.cartid);
      })
    }
    else if(this.service=='basic')
    {
      let cartid =
      {
        "productId": '5bfe362b53c3df0040d852a7'
      }
      this.options={
        data: cartid
      }
      this.svc.AddToCart(this.options, this.TokenAuth).subscribe((res:any)=>
      {
        this.cartid = res.data.details.id
        console.log('ghjgjg',this.cartid);
      })

    }


  }
  onRegister() {
    this.userObj = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value,
      service: this.service,
      cartId: this.cartid
    }
    let obj = {
      data: this.userObj,
    }
    this.result = this.svc.Register(obj, this.TokenAuth);
    this.result.subscribe((response) => {
      this.openSnackBar('successfully registered',"Close");
      this.response = response;
      console.log(this.response);
    },
    (error)=>{
      this.openSnackBar('not registered',"Close");
      console.log(error);
    });
  }

}
