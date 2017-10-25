import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class AuthService {

  user;
  token;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) { 
  }

  signUp(user) {
    this.user = user;

    this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(credentials => {
          this.updateUserData(credentials);
        });
  }

  signIn(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(response => {

          this.afAuth.auth.currentUser.getIdToken()
              .then((token: string) => {
                this.token = token;
              });
        });
  }

  getToken() {
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken()
            .then((data) => {
              // console.log(data);
              return data;
            });
      } else {
        return 'no token';
      }
    });
        
    // this.afAuth.auth.currentUser.getIdToken()
    //     .then((token: string) => {
    //       this.token = token;
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     })
    
    // return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }


  private updateUserData(user) {
    const userRef = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      password: this.user.password,
      name: this.user.name,
      photo: this.user.photo,
      position: this.user.position
    }

    return userRef.set(data);
  }

  signOut() {
    this.afAuth.auth.signOut();
    this.token = null;
  }
}
