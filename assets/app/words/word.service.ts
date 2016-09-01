import { Word } from './word';
import {Http, Headers} from 'angular2/http';
import {Injectable, EventEmitter} from 'angular2/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class WordService {
  words: Word[] = [];
  wordUpdate = new EventEmitter<Word>();

  constructor (private _http: Http) {}

  addWord(word: Word) {
    const body = JSON.stringify(word);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post('http://localhost:3000/word', body, {headers: headers})
      .map(response => {
        const data = response.json().obj;
        let word = new Word(data.name, data.definition, data.origin, data.language, data.sentence, data.partOfSpeech, data.color, data.link, data.font, data.imageUrl, data.imageCaption, data.imageSource, data._id);
        return word;
      })
      .catch(error => Observable.throw(error.json()));
  }

  getWords() {
    return this._http.get('http://localhost:3000/word')
      .map(response => {
        const data = response.json().obj;
        let objs: any[] = [];
        for (let i =0; i < data.length; i++) {
          let word = new Word(data[i].name, data[i].definition, data[i].origin, data[i].language, data[i].sentence, data[i].partOfSpeech, data[i].color, data[i].link, data[i].font, data[i].imageUrl, data[i].imageCaption, data[i].imageSource, data[i]._id);
          objs.push(word);
        };
        return objs;
      })
      .catch(error => Observable.throw(error.json()));
  }

  updateWord(word: Word) {
    const body = JSON.stringify(word);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.patch('http://localhost:3000/word/' + word.wordId, body, {headers: headers})
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  editWord(word: Word) {
    this.wordUpdate.emit(word);
  }

  deleteWord(word: Word) {
    this.words.splice(this.words.indexOf(word), 1);
    return this._http.delete('http://localhost:3000/word/' + word.wordId)
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }
}
