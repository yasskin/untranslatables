import { Component } from 'angular2/core';
import { Word } from './word';
import { WordService } from './word.service';
@Component({
  selector: 'my-word-input',
  template:`
  <div class="hide-form">
    <div class="form-group">
      <label for='name'>Name</label>
      <input type="text" class="form-control" id="name" #nameInput>
    </div>
    <div class="form-group">
      <label for='definition'>Definition</label>
      <input type="text" class="form-control" id="definition" #definitionInput>
    </div>
    <div class="form-group">
      <label for='origin'>Origin</label>
      <input type="text" class="form-control" id="origin" #originInput>
    </div>
    <div class="form-group">
      <label for='language'>Language</label>
      <input type="text" class="form-control" id="language" #languageInput>
    </div>
    <div class="form-group">
      <label for='sentence'>Sentence</label>
      <input type="text" class="form-control" id="sentence" #sentenceInput>
    </div>
    <div class="form-group">
      <label for='partOfSpeech'>Part of Speech</label>
      <input type="text" class="form-control" id="partOfSpeech" #partOfSpeechInput>
    </div>
    <div class="form-group">
      <label for='color'>Card Color</label>
      <input type="text" class="form-control" id="color" #colorInput>
    </div>
    <div class="form-group">
      <label for='link'>Link</label>
      <input type="text" class="form-control" id="link" #linkInput>
    </div>
    <div class="form-group">
      <label for='font'>Font</label>
      <input type="text" class="form-control" id="font" #fontInput>
    </div>
    <div class="form-group">
      <label for='imageUrl'>Image URL</label>
      <input type="text" class="form-control" id="imageUrl" #imageUrlInput>
    </div>
    <div class="form-group">
      <label for='imageCaption'>Image Caption</label>
      <input type="text" class="form-control" id="imageCaption" #imageCaptionInput>
    </div>
    <div class="form-group">
      <label for='imageSource'>Image Source</label>
      <input type="text" class="form-control" id="imageSource" #imageSourceInput>
    </div>
    <button type="submit" class="btn btn-primary" (click)="onCreate(nameInput.value, definitionInput.value, originInput.value, languageInput.value, sentenceInput.value, partOfSpeechInput.value, colorInput.value, linkInput.value, fontInput.value, imageUrlInput.value, imageCaptionInput.value, imageSourceInput.value)">Create Word</button>
  </div>
    `
})
export class WordInputComponent {

  constructor(private _wordService: WordService) {}

  onCreate(name: string, definition: string, origin: string, language: string, sentence: string, partOfSpeech: string, color: string, link: string, font: string, imageUrl: string, imageCaption: string, imageSource: string) {
    const word: Word = new Word(name, definition, origin, language, sentence, partOfSpeech, color, link, font, imageUrl, imageCaption, imageSource);
    this._wordService.addWord(word);
  }
}
