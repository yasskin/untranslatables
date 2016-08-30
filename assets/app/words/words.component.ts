import { Component } from "angular2/core";

import { WordInputComponent } from './word-input.component';
import { WordListComponent } from './word-list.component';

@Component({
  selector: 'my-words',
  template:`
    <my-word-input></my-word-input>
    <my-word-list></my-word-list>
  `,
  directives: [WordInputComponent, WordListComponent]
})

export class WordsComponent {

}
