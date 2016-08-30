import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';

@Component({
  selector: 'my-signup',
  template: `
    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input [ngFormControl]="myForm.find('firstName')" type="text" id="firstName" class="form-control">
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input [ngFormControl]="myForm.find('lastName')" type="text" id="lastName" class="form-control">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input [ngFormControl]="myForm.find('email')" type="email" id="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input [ngFormControl]="myForm.find('password')" type="password" id="password" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Sign Up</button>
    </form>
  `
})
export class SignupComponent implements OnInit {
  myForm: ControlGroup;

  constructor(private _fb:FormBuilder) {}

  onSubmit() {
    console.log(this.myForm.value);
  }

  ngOnInit() {
    this.myForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
