import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{HttpService}  from '../http-services/http.service'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient,private svc: HttpService) { }

  PostwithToken(userObj)
{
  //console.log("ukjdkjdhkj", userObj);
  
  let httpOptions={
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':localStorage.getItem('id')
    })
  }
 // console.log("fffffff",userObj)
  return this.svc.PostWithTokenss(userObj,httpOptions);


}
GetwithToken(userObj)
{
  let httpOptions={
    headers:new HttpHeaders({
      'Content-type':'application/x-www-form-urlencoded',
      'Authorization':localStorage.getItem('id')
    })
  }
  return this.svc.GetWithTokenss(userObj,httpOptions);


}
}
