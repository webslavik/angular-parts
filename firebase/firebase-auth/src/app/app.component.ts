import { Component } from '@angular/core';

import { AuthService } from './auth/auth.service';

interface User {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = {
    name: '',
    email: '',
    password: '',
    photo: '',
    position: '',
  };
  
  constructor(public auth: AuthService) {}

  onSignup() {
    this.auth.signUp(this.user);
  }
  
  onSignin() {
    this.auth.signIn(this.user.email, this.user.password);
  }

  onSignout() {
    this.auth.signOut();
  }


  onGoogleSignup() {
    this.auth.googleLogin();
  }

}
