import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  api: String = 'https://back-web-ids-193262.herokuapp.com/';

  constructor(private httpClient: HttpClient, private afAuth: AngularFireAuth ) { }

  public isAuthenticated (): boolean{
    let user = JSON.parse(localStorage.getItem('user'));

    if(user){
      return user['token']? true : false
    }else {
      return false
    }
  }

  public inicio(username : String, password : String) : Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-Type' : 'application/json',
      })
    }    
    return this.httpClient.post(`${this.api}api/v1/login/`, {username, password}, httpOptions);
  }

  getUsers(){
    let user = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${user['token']}`
      })
    }
    return this.httpClient.get(`${this.api}api/v1/profile/profileUser_url`, httpOptions);
  }

  getUser(id:number){
    let user = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${user['token']}`
      })
    }
    return this.httpClient.get(`${this.api}api/v1/profile/profileUserMethod_url/${id}`, httpOptions);
  }

  deleteUser(id:number){
    let user = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${user['token']}`
      })
    }
    return this.httpClient.delete(`${this.api}api/v1/profile/profileUserMethod_url/${id}`, httpOptions);
  }

  putUser(id:number, name:String, surnames:String, age:number, email:String){
    let user = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${user['token']}`
      })
    }
    return this.httpClient.put(`${this.api}api/v1/profile/profileUserMethod_url/${id}`,{name, surnames, age, email}, httpOptions);
  }

  postUser(name:String, surnames:String, age:number, email:String){
    let user = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${user['token']}`
      })
    }
    return this.httpClient.post(`${this.api}api/v1/profile/profileUser_url`,{name, surnames, age, email}, httpOptions);
  }

  public login() {    
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  
  public logout() {
    return this.afAuth.signOut();
  }

}