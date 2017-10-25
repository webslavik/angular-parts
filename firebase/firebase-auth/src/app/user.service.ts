
import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth/auth.service';

interface User {
  name: string,
  email: string,
  password: string,
  photo: string,
  position: string,
}

@Injectable()
export class UserService {

  userDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;

  constructor(private afs: AngularFirestore,
              private auth: AuthService) { }

  getUserInfo() {
    const token = this.auth.getToken();

    // this.userDoc = this.afs.doc(`users/${token}`);
    // this.user = this.userDoc.valueChanges();
    
    console.log(token);
    // return this.user;
  }
}
