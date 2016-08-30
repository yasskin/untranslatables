import { Component } from 'angular2/core';
@Component({
    selector: 'my-app',
    template: `
      <div class="wrap">
        <h1>Hello World!</h1>
        <h3 *ngFor="#word of words">
        {{ word.name }}
        "{{ word.definition}}"
        <img src={{word.image}}>
        </h3>
      </div>
    `
})
export class AppComponent {
  public word: Word[];
  constructor(){
    this.words = [
      new Word("Pisan Zapra", "The time needed to eat a banana", "images/pisan_zapra.jpg", 0),
      new Word("Schadenfreude", "The satisfaction we find in another person’s failure or suffering.", "images/schadenfreude.png", 1),
      new Word("Age-otori", "The feeling of looking worse after a haircut.", "images/age_otori.jpg", 2)
    ];
  }
}

export class Word {
  constructor(public name: string, public definition: string, public image: string, public id: number) {

  }
}
