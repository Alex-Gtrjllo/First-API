import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  private REST_API_SERVER = "http://localhost:8000/api/v1/profile/profileUser_url";

  constructor(private httpclient : HttpClient ) { }

  public getProduct(nameEndPoint : String){
    return this.httpclient.get(this.REST_API_SERVER + nameEndPoint);

  }

  public getUser(nameEndPoint : String){
    return this.httpclient.get(this.REST_API_SERVER + nameEndPoint);

  }


}
