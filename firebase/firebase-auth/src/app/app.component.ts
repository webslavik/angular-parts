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
  };
  
  constructor(public auth: AuthService) {}

  onSignup() {
    this.auth.signIn(this.user.email, this.user.password);
  }

  fromLocalStorage() {
    console.log(localStorage.getItem('firebase'));
  }

  onGoogleSignup() {
    this.auth.googleLogin();
  }

  onSignOut() {
    this.auth.signOut();
  }
}
