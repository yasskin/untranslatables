import {Component} from 'angular2/core';
@Component({
  selector: 'my-logout',
  template:`
    <button class="btn btn-danger"(click)="onLogout()">Logout</button>
  `
})

export class LogoutComponent {
  onLogout() {

  }
}
