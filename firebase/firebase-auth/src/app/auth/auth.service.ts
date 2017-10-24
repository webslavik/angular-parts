import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';


// interface User {
//   uid: string;
//   email: string;
//   password: string;
//   name: string;
//   photo: string;
//   position: string;
// }


@Injectable()
export class AuthService {

  // user: Observable<User>;
  user;
  token;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) { 

    // this.user = this.afAuth.authState
    //                 .switchMap(user => {
    //                   if (user) {
    //                     return this.afs.doc(`users/${user.uid}`).valueChanges();
    //                   } else {
    //                     return Observable.of(null);
    //                   }
    //                 });

    // console.log(this.afAuth.authState);
  }

  signUp(user) {
    this.user = user;

    this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(credentials => {
          this.updateUserData(credentials);
          // return this.user;
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

  isAuthenticated() {
    return this.token != null;
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
               .then(credential => {
                //  console.log(credential.user.uid);
                 this.updateUserData(credential.user);
               });
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
  }
}
