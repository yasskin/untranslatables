import { Component, Input } from 'angular2/core';
import { Word } from './word';
import { WordService } from './word.service';

@Component({
  selector: 'my-word',
  template:`
    <div class="word">
      <div>
        {{ word.name }}
      </div>
      <div>
        {{ word.definition }}
      </div>
      <div>
        {{ word.origin }}
      </div>
    </div>
    <button (click)="delete(word)"> Delete </button>
      `
})
export class WordComponent {
  @Input() word:Word;

  constructor(private _wordService: WordService) {}

  delete(word) {
    debugger;
    this._wordService.deleteWord(word);
  }
}
