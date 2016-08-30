import { Component } from 'angular2/core';
import { Word } from './word';
import { WordService } from './word.service';
@Component({
  selector: 'my-word-input',
  template:`
  <div class="hide-form">
    <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
      <div class="form-group">
        <label for='name'>Name</label>
        <input ngControl="name" type="text" class="form-control" id="name" #nameInput>
      </div>
      <div class="form-group">
        <label for='definition'>Definition</label>
        <input ngControl="definition" type="text" class="form-control" id="definition" #definitionInput>
      </div>
      <div class="form-group">
        <label for='origin'>Origin</label>
        <input ngControl="origin" type="text" class="form-control" id="origin" #originInput>
      </div>
      <div class="form-group">
        <label for='language'>Language</label>
        <input ngControl="language" type="text" class="form-control" id="language" #languageInput>
      </div>
      <div class="form-group">
        <label for='sentence'>Sentence</label>
        <input ngControl="sentence" type="text" class="form-control" id="sentence" #sentenceInput>
      </div>
      <div class="form-group">
        <label for='partOfSpeech'>Part of Speech</label>
        <input ngControl="partOfSpeech" type="text" class="form-control" id="partOfSpeech" #partOfSpeechInput>
      </div>
      <div class="form-group">
        <label for='color'>Card Color</label>
        <input ngControl="color" type="text" class="form-control" id="color" #colorInput>
      </div>
      <div class="form-group">
        <label for='link'>Link</label>
        <input ngControl="link" type="text" class="form-control" id="link" #linkInput>
      </div>
      <div class="form-group">
        <label for='font'>Font</label>
        <input ngControl="font" type="text" class="form-control" id="font" #fontInput>
      </div>
      <div class="form-group">
        <label for='imageUrl'>Image URL</label>
        <input ngControl="imageUrl" type="text" class="form-control" id="imageUrl" #imageUrlInput>
      </div>
      <div class="form-group">
        <label for='imageCaption'>Image Caption</label>
        <input ngControl="" type="text" class="form-control" id="imageCaption" #imageCaptionInput>
      </div>
      <div class="form-group">
        <label for='imageSource'>Image Source</label>
        <input ngControl="imageSource" type="text" class="form-control" id="imageSource" #imageSourceInput>
      </div>
      <button type="submit" class="btn btn-primary">Create Word</button>
    </form>
  </div>  
    `
})
export class WordInputComponent {

  constructor(private _wordService: WordService) {}

  onSubmit(form:any) {
    const word: Word = new Word(form.name, form.definition, form.origin, form.language, form.sentence, form.partOfSpeech, form.color, form.link, form.font, form.imageUrl, form.imageCaption, form.imageSource);
    this._wordService.addWord(word);
  }

}
