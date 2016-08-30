import { Component } from 'angular2/core';
import { WordsComponent } from './words/words.component';
import { Word } from './words/word';

@Component({
    selector: 'my-app',
    template: `
        <my-words></my-words>


    `,
    directives: [WordsComponent]

})
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
