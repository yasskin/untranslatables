import { Component, Input } from 'angular2/core';
import { Word } from './word';

@Component({
  selector: 'my-word',
  template:`
      <div class="word" [ngStyle]="{'background-image': 'url(' +  word.image + ')'}">
      <div class="center-header">
        <h3>{{ word.name }}</h3>
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
