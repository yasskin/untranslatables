import { Word } from './word';

export class WordService {
  words: Word[] = [];

  addWord(word: Word) {
    this.words.push(word);
    console.log(this.words);
  }

  getWords() {
    return this.words;
  }

  deleteWord(word: Word) {
    this.words.splice(this.words.indexOf(word), 1);
  }
}
