import { Component, OnInit } from 'angular2/core';
import { Word } from './word';
import { WordComponent } from './word.component';
import { WordService } from './word.service';
@Component({
  selector: 'my-word-list',
  template:`
    <div class="wrap"
      <my-word *ngFor="#word of words" [word]="word"></my-word>
    </div>
  `,
  directives: [WordComponent]
})
export class WordListComponent implements OnInit {

  constructor( private _wordService: WordService) {}

  words: Word[];

  ngOnInit() {
    this.words = this._wordService.getWords();
  }
}
