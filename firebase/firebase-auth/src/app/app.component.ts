import { UserService } from './user.service';
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
  
  constructor(public auth: AuthService,
              public userService: UserService) {}

  onSignup() {
    this.auth.signUp(this.user);
  }
  
  onSignin() {
    this.auth.signIn(this.user.email, this.user.password);

    // console.log(typeof this.userService.getUserInfo());
  }

  onSignout() {
    this.auth.signOut();
  }

  onGetInfo() {
    this.userService.getUserInfo();
  }
}
