import {Component} from 'angular2/core';
import {SignupComponent} from './signup.component';
import {SigninComponent} from './signin.component';
import {LogoutComponent} from './logout.component';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
@Component({
  selector: 'my-auth',
  template: `
    <header>
      <nav>
        <ul class="nav nav-tabs">
          <li><a [routerLink]="['Signup']">Signup</a></li>
          <li><a [routerLink]="['Signin']">Signin</a></li>
          <li><a [routerLink]="['Logout']">Logout</a></li>
        </ul>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/signup', name: 'Signup', component: SignupComponent, useAsDefault: true},
  {path: '/signin', name: 'Signin', component: SigninComponent},
  {path: '/logout', name: 'Logout', component: LogoutComponent},
])
export class AuthenticationComponent {

}
