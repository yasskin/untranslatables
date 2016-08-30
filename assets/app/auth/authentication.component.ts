import {Component} from 'angular2/core';
import {SignupComponent} from './signup.component';
@Component({
  selector: 'my-auth',
  template: `
    <h1>Auth</h1>
    <my-signup></my-signup>
  `,
  directives: [SignupComponent]
})

export class AuthenticationComponent {

}
