import { Component, OnInit } from 'angular2/core';
import { Word } from './word';
import { WordComponent } from './word.component';
import { WordService } from './word.service';
@Component({
  selector: 'my-word-list',
  template:`
    <div class="wrap">
      <my-word *ngFor="#word of words" [word]="word"></my-word>
    </div>
  `,
  directives: [WordComponent]
})
export class WordListComponent implements OnInit {

  constructor( private _wordService: WordService) {}

  words: Word[];

  ngOnInit() {
    // this.words = this._wordService.getWords();
    this.words = [
      new Word("Pisan Zapra", "The time needed to eat a banana", "images/pisan_zapra2.jpg"),
      new Word("Schadenfreude", "The satisfaction we find in another person’s failure or suffering.", "images/schadenfreude.png"),
      new Word("Age-otori", "The feeling of looking worse after a haircut.", "images/age_otori.jpg"),
      new Word("Leiliviskaja", "In Estonia, the Leiliviskaja is the person who adds steam in sauna by throwing water on hot hearth-stones.", "images/frottage.jpg" ),
      new Word("Hyggelig", "The Danish untranslatable word appears for example in the tragedy of Hamlet and designates the mentality and demeanor of being warm, accommodating and friendly.", "images/toska.jpg")
    ];

  }
}
