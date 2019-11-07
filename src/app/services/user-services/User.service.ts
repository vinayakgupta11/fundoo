import { Injectable } from '@angular/core';
import { HttpService } from '../http-services/http.service'


@Injectable({
  providedIn: 'root'
})
export class TestService {



  response: any;


  constructor( private svc: HttpService) { }

  Register(userObj, auth) {
    return this.svc.Post(userObj, auth, 'user/userSignUp')

  }
  Login(userObj, auth) {
    return this.svc.Post(userObj, auth, 'user/login')
  }
  forgot(userObj, auth) {
    return this.svc.Post(userObj, auth, 'user/reset')
  }
  reset(userObj, auth) {
    return this.svc.PostEncoded(this.getEncodedData(userObj.data), auth, 'user/reset-password')
  }
  Profile(userObj, auth) {
    return this.svc.PostImage(userObj.data, auth, 'user/uploadProfileImage')
  }

  searchUser(userObj, auth)
  {
    return this.svc.Post(userObj, auth, 'user/searchUserList')
  }
  AddToCart(userObj, auth)
  {
    return this.svc.Post(userObj, auth, 'productcarts/addToCart')
  }
  getEncodedData(data) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
}
