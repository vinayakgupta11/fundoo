import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{HttpService}  from '../http-services/http.service'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  response:any;
 

  constructor(private http: HttpClient,private svc: HttpService) { }

PostwithoutToken(userObj){
  return this.svc.Post( userObj)  
}
PostwithToken(userObj)
{
  let httpOptions={
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':localStorage.getItem('id')
    })
  }
  return this.svc.PostWithTokens(userObj,httpOptions);
}
PostwithTokenimage(userObj)
{
  
  
  let httpOptions={
    headers:new HttpHeaders({
      'Authorization':localStorage.getItem('id')
    })
  }
  return this.svc.PostWithTokens(userObj,httpOptions);
}


}
