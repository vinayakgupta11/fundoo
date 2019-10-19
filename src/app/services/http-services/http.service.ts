import { Injectable } from '@angular/core';
import{environment} from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl= environment.base
  
  constructor(private http: HttpClient) { }
  
  Post(userObj,auth, url)
  { 
    if(auth)
    {
      let httpOptions={
        headers:new HttpHeaders({
          'Content-type':'application/json',
          'Authorization':localStorage.getItem('id')
        })
      }
      return this.http.post( this.baseUrl+url , userObj.data,httpOptions)
    }
    else
    {
    return this.http.post( this.baseUrl+url , userObj.data)
    }
  }
  PostEncoded(userObj,auth, url)
  { 
    if(auth)
    {
      let httpOptions={
        headers:new HttpHeaders({
          'Content-type':'application/x-www-form-urlencoded',
          'Authorization':localStorage.getItem('token')
        })
      }
      return this.http.post( this.baseUrl+url , userObj,httpOptions)
    }
    else
    {
    return this.http.post( this.baseUrl+url , userObj.data)
    }
  }
  PostImage(userObj,auth, url)
  { 
    if(auth)
    {
      let httpOptions={
        headers:new HttpHeaders({
          'Authorization':localStorage.getItem('id')
        })
      }
      return this.http.post( this.baseUrl+url , userObj,httpOptions)
    }
    else
    {
    return this.http.post( this.baseUrl+url , userObj.data)
    }
  }
  Get(auth, url)
  { 
    if(auth)
    {
      let httpOptions={
        headers:new HttpHeaders({
          'Content-type':'application/json',
          'Authorization':localStorage.getItem('id')
        })
      }
      return this.http.get( this.baseUrl+url ,httpOptions)
    }
    else
    {
    return this.http.get( this.baseUrl+url )
    }
  }

  Delete(auth, url)
  { 
    if(auth)
    {
      let httpOptions={
        headers:new HttpHeaders({
          'Content-type':'application/json',
          'Authorization':localStorage.getItem('id')
        })
      }
      return this.http.delete( this.baseUrl+url, httpOptions)
    }
    else
    {
    return this.http.delete( this.baseUrl+url)
    }
  }
}
