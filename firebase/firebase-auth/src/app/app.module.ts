import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AuthService } from './auth/auth.service';

const config = {
  apiKey: "AIzaSyCa_22zk5PEbEN0GPQsSNdrPU01Ee_4keQ",
  authDomain: "firestore-dc8ee.firebaseapp.com",
  databaseURL: "https://firestore-dc8ee.firebaseio.com",
  projectId: "firestore-dc8ee",
  storageBucket: "firestore-dc8ee.appspot.com",
  messagingSenderId: "661592836186"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
