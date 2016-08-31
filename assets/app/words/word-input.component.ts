import { Component, OnInit } from 'angular2/core';
import { Word } from './word';
import { WordService } from './word.service';
@Component({
  selector: 'my-word-input',
  template:`
  <div class="hide-form">
    <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
      <div class="form-group">
        <label for='name'>Name</label>
        <input ngControl="name" type="text" class="form-control" id="name" #nameInput [ngModel]="word?.name">
      </div>
      <div class="form-group">
        <label for='definition'>Definition</label>
        <input ngControl="definition" type="text" class="form-control" id="definition" #definitionInput [ngModel]="word?.definition" >
      </div>
      <div class="form-group">
        <label for='origin'>Origin</label>
        <input ngControl="origin" type="text" class="form-control" id="origin" #originInput [ngModel]="word?.origin">
      </div>
      <div class="form-group">
        <label for='language'>Language</label>
        <input ngControl="language" type="text" class="form-control" id="language" #languageInput [ngModel]="word?.language">
      </div>
      <div class="form-group">
        <label for='sentence'>Sentence</label>
        <input ngControl="sentence" type="text" class="form-control" id="sentence" #sentenceInput [ngModel]="word?.sentence">
      </div>
      <div class="form-group">
        <label for='partOfSpeech'>Part of Speech</label>
        <input ngControl="partOfSpeech" type="text" class="form-control" id="partOfSpeech" #partOfSpeechInput [ngModel]="word?.partOfSpeech">
      </div>
      <div class="form-group">
        <label for='color'>Card Color</label>
        <input ngControl="color" type="text" class="form-control" id="color" #colorInput [ngModel]="word?.color" >
      </div>
      <div class="form-group">
        <label for='link'>Link</label>
        <input ngControl="link" type="text" class="form-control" id="link" #linkInput [ngModel]="word?.link">
      </div>
      <div class="form-group">
        <label for='font'>Font</label>
        <input ngControl="font" type="text" class="form-control" id="font" #fontInput [ngModel]="word?.font">
      </div>
      <div class="form-group">
        <label for='imageUrl'>Image URL</label>
        <input ngControl="imageUrl" type="text" class="form-control" id="imageUrl" #imageUrlInput [ngModel]="word?.imageUrl">
      </div>
      <div class="form-group">
        <label for='imageCaption'>Image Caption</label>
        <input ngControl="" type="text" class="form-control" id="imageCaption" #imageCaptionInput [ngModel]="word?.imageCaption">
      </div>
      <div class="form-group">
        <label for='imageSource'>Image Source</label>
        <input ngControl="imageSource" type="text" class="form-control" id="imageSource" #imageSourceInput [ngModel]="word?.imageSource">
      </div>
      <button type="submit" class="btn btn-primary"> {{ !word ? 'Send Word' : 'Save Word' }}</button>
      <button class ="btn btn-danger" type="button" (click)="onCancel()" *ngIf="word">Cancel</button>
    </form>
  </div>
    `
})
export class WordInputComponent implements OnInit {
  word: Word = null;

  constructor(private _wordService: WordService) {}

  onSubmit(form:any) {
    if (this.word) {
      // Edit
      this.word.name = form.name;
      this.word.definition = form.definition;
      this.word.origin = form.origin;
      this.word.language = form.language;
      this.word.sentence = form.sentence;
      this.word.partOfSpeech = form.partOfSpeech;
      this.word.color = form.color;
      this.word.link = form.link;
      this.word.font = form.font;
      this.word.imageUrl = form.imageUrl;
      this.word.imageCaption = form.imageCaption;
      this.word.imageSource = form.imageSource;
    }else {
    const word: Word = new Word(form.name, form.definition, form.origin, form.language, form.sentence, form.partOfSpeech, form.color, form.link, form.font, form.imageUrl, form.imageCaption, form.imageSource);
    this._wordService.addWord(word)
      .subscribe(
        data => {
          console.log(data);
          this._wordService.words.push(data);
        },
        error => console.error(error)
      );
    }
  }

  onCancel() {
    this.word = null;
  }

  ngOnInit() {
    this._wordService.wordUpdate.subscribe(
      word => {
        this.word = word;
      }
    );
  }

}
