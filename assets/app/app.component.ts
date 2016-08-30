import {Component} from 'angular2/core';
import { WordsComponent } from './words/words.component'
@Component({
    selector: 'my-app',
    template: `
        <my-words></my-words>
    `,
    directives: [WordsComponent]
})
export class AppComponent {

}
