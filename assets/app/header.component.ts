import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
@Component({
  selector: 'my-header',
  template: `
    <header class="">
      <nav class="">
        <ul class="">
          <li><a [routerLink]="['Words']">Home</a></li>
          <li><a [routerLink]="['Auth']">Authentication</a></li>
        </ul>
      </nav>
    </header>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent {

}
