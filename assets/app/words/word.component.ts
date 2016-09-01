import { Component, Input, EventEmitter, Output } from 'angular2/core';
import { Word } from './word';
import { WordService } from './word.service';

@Component({
  selector: 'my-word',
  template:`
      <div class="word" [ngStyle]="{'background-image': 'url(' +  word.image + ')',
      'background-repeat' : 'no-repeat',
      'background-size' : 'cover',
      'background-position' : 'center'}">
      <div class="center-header">
        <h2>{{ word.name }}</h2>
      </div>
      <div class="definition">
      <p>{{ word.definition }}</p>
      </div>
      </div>
      <div class="config">
      <a (click)="onEdit()"> Edit </a>
      <a (click)="onDelete()"> Delete </a>
      </div>
      `
})
export class WordComponent {
  @Input() word:Word;
  @Output() editClicked = new EventEmitter<string>();

  constructor(private _wordService: WordService) {}

  onEdit() {
    this._wordService.editWord(this.word);
  }

  onDelete() {
    this._wordService.deleteWord(this.word);
  }
}
