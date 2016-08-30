import { Component, Input } from 'angular2/core';
import { Word } from './word';

@Component({
  selector: 'my-word',
  template:`
    <div>
      {{ word.name }}
      {{ word.definition }}
    </div>
  `
})
export class WordComponent {
  @Input() word:Word;

}
