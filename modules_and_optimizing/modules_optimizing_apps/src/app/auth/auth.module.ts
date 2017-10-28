import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    FormsModule
  ]
})
export class AuthModule {}