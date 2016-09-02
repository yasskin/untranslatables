import { Component } from 'angular2/core';
import { WordsComponent } from './words/words.component';
import { Word } from './words/word';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthenticationComponent} from './auth/authentication.component';
import {HeaderComponent} from './header.component';
import {WordInputComponent} from './words/word-input.component';

@Component({
    selector: 'my-app',
    template: `

        <my-header></my-header>
        <router-outlet></router-outlet>
    `,
    directives: [WordsComponent, ROUTER_DIRECTIVES, HeaderComponent]

})
@RouteConfig([
  {path: '/', name: 'Words', component: WordsComponent, useAsDefault: true},
  {path: '/auth/...', name: 'Auth', component: AuthenticationComponent},
  {path: '/admin', name: 'Admin', component: WordInputComponent}
])
export class AppComponent {
  public words: Word[];
  constructor(){
  }
}
