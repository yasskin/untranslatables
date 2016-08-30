import { Component } from 'angular2/core';
import { Word } from './word';
import { WordComponent } from './word.component';
@Component({
  selector: 'my-word-list',
  template:`
    <my-word *ngFor="#word of words" [word]="word"></my-word>
  `,
  directives: [WordComponent]
})
export class WordListComponent {
  words: Word[] = [
    new Word('testname', 'testdefinition'),
    new Word('testname2', 'testdefinition2')
  ];
  console.log(words);
}
