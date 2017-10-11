import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;
  projectStatus = ['Stable', 'Critical', 'Finished'];
  defaultStatus = 'Stable';
  forbiddenProjectNames = ['Test', 'Test2', 'Test3', 'Fuck'];
  forbiddenProjectEmails = ['fuck@gmail.com', 'badass@yahoo.com', 'jack@gmail.com'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, this.forbiddenProjectName.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'status': new FormControl(this.defaultStatus),
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);

    this.projectForm.reset();

    this.projectForm.patchValue({
      'status': this.defaultStatus
    });
  }

  forbiddenProjectName(control: FormControl) {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Observable<any> | Promise<any> {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectEmails.indexOf(control.value) !==  -1) {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });

    return promise;
  }
}
