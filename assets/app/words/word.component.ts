import { Component, Input } from 'angular2/core';
import { Word } from './word';

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
      </div>
      <div class="definition">
        <p>{{ word.definition }}</p>
      </div>

      `
})
export class WordComponent {
  @Input() word:Word;

}
