import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http-services/http.service'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  response: any;


  constructor(private http: HttpClient, private svc: HttpService) { }

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
