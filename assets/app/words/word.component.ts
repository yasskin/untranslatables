import { Component, Input } from 'angular2/core';
import { Word } from './word';

@Component({
  selector: 'my-word',
  template:`
    <div>
      {{ word.name }}
    </div>
    <div>
      {{ word.definition }}
    </div>
    <div>
      {{ word.origin }}
    </div>  
      `
})
export class WordComponent {
  @Input() word:Word;

}
