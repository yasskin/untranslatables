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
          <li><a [routerLink]="['Admin']">Admin</a></li>
        </ul>
      </nav>
      <h1>Untranslatable Words</h1>
    </header>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent {

}
