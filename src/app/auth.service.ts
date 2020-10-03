import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private afAuth: AngularFireAuth ) { }

  public login() {    
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  public logout() {
    return this.afAuth.signOut();
  }

}