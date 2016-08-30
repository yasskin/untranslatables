import { Component } from 'angular2/core';
import { Word } from './word';
import { WordService } from './word.service';
@Component({
  selector: 'my-word-input',
  template:`
    <div class="form-group">
      <label for='name'>Name</label>
      <input type="text" class="form-control" id="name" #nameInput>
      <label for='definition'>Definition</label>
      <input type="text" class="form-control" id="definition" #definitionInput>
    </div>
    <button type="submit" class="btn btn-primary" (click)="onCreate(nameInput.value, definitionInput.value)">Create Word</button>
    `
})
export class WordInputComponent {

  constructor(private _wordService: WordService) {}

  onCreate(name: string, definition: string) {
    const word: Word = new Word(name, definition);
    this._wordService.addWord(word);
  }
}
