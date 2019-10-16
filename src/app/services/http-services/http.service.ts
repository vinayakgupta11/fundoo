import { Injectable } from '@angular/core';
import{environment} from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl= environment.base
  baseUrl1=environment.base1

  constructor(private http: HttpClient) { }
  Post(userObj)
  {
    return this.http.post( this.baseUrl+userObj.url , userObj.data)
  }




  
  PostWithTokens(userObj,options)
  {
    return this.http.post(this.baseUrl+userObj.url ,userObj.data,options)
  }
 
  //for addnote api
  PostWithTokenss(userObj,options)
  {
    //console.log(this.baseUrl1+userObj.url, "DATA", userObj.data, options)
    return this.http.post(this.baseUrl1+userObj.url , (userObj.data),options)

  }
  GetWithTokenss(userObj,options)
  {
    return this.http.get(this.baseUrl1+userObj.url , options)

  }
  getEncodedData(data){
    const formBody=[];
    for(const property in data){
      const encodedKey=encodeURIComponent(property);
      const encodedValue=encodeURIComponent(data[property]);
      formBody.push(encodedKey+'='+encodedValue);
    }
    return formBody.join ('&');
  }

}
