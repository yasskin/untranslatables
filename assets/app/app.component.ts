import {Component} from 'angular2/core';
import { WordsComponent } from './words/words.component';
import { Word } from './words/word';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthenticationComponent} from './auth/authentication.component';
import {HeaderComponent} from './header.component';

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
  {path: '/auth', name: 'Auth', component: AuthenticationComponent}
])
export class AppComponent {
  public words: Word[];
  constructor(){
    this.words = [
      new Word("Pisan Zapra", "The time needed to eat a banana", "images/pisan_zapra.jpg"),
      new Word("Schadenfreude", "The satisfaction we find in another person’s failure or suffering.", "images/schadenfreude.png"),
      new Word("Age-otori", "The feeling of looking worse after a haircut.", "images/age_otori.jpg")
    ];
  }
}
