import { Component } from 'angular2/core';
@Component({
    selector: 'my-app',
    template: `
      <div class="wrap">
        <h1>Hello World!</h1>
        <h3 *ngFor="#word of words">{{ word.name }}</h3>
      </div>
    `
})
export class AppComponent {
  public word: Word[];
  constructor(){
    this.words = [
      new Word("Pisan Zapra", 0),
      new Word("Schadenfreude", 1),
      new Word("Age-otori", 2),
      new Word("Boketto", 3)
    ];
  }
}

export class Word {
  constructor(public name: string, public id: number) {

  }
}
