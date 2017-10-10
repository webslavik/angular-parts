import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultSubscription = 'advanced';
  submitted = false;

  formData = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

    this.submitted = true;

    this.formData.email = form.value.email;
    this.formData.subscription = form.value.subscription;
    this.formData.password = form.value.password;

    form.reset();
  }
}
