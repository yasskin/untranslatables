import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators, Control} from 'angular2/common';

@Component({
  selector: 'my-signin',
  template:`
  <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
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
export class SigninComponent implements OnInit {
  myForm: ControlGroup;

  constructor(private _fb:FormBuilder) {}

  onSubmit() {
    console.log(this.myForm.value);
  }

  ngOnInit() {
    this.myForm = this._fb.group({
      email: ['', Validators.compose([
        Validators.required,
        this.isEmail
      ])],
      password: ['', Validators.required]
    });
  }

  private isEmail(control: Control): {[ s: string]: boolean} {
    if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
        return {invalidMail: true};
    }
  }
}
