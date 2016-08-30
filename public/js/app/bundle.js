var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("words/word", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Word;
    return {
        setters:[],
        execute: function() {
            Word = (function () {
                function Word(name, definition, image, origin, language, sentence, partOfSpeech, color, link, font, imageCaption, imageSource, user) {
                    this.name = name;
                    this.definition = definition;
                    this.image = image;
                    this.origin = origin;
                    this.language = language;
                    this.sentence = sentence;
                    this.partOfSpeech = partOfSpeech;
                    this.color = color;
                    this.link = link;
                    this.font = font;
                    this.imageCaption = imageCaption;
                    this.imageSource = imageSource;
                    this.user = user;
                }
                return Word;
            }());
            exports_1("Word", Word);
        }
    }
});
System.register("words/word.service", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var WordService;
    return {
        setters:[],
        execute: function() {
            WordService = (function () {
                function WordService() {
                    this.words = [];
                }
                WordService.prototype.addWord = function (word) {
                    this.words.push(word);
                    console.log(this.words);
                };
                WordService.prototype.getWords = function () {
                    return this.words;
                };
                WordService.prototype.deleteWord = function (word) {
                    this.words.splice(this.words.indexOf(word), 1);
                };
                return WordService;
            }());
            exports_2("WordService", WordService);
        }
    }
});
System.register("words/word-input.component", ['angular2/core', "words/word", "words/word.service"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_1, word_1, word_service_1;
    var WordInputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (word_1_1) {
                word_1 = word_1_1;
            },
            function (word_service_1_1) {
                word_service_1 = word_service_1_1;
            }],
        execute: function() {
            WordInputComponent = (function () {
                function WordInputComponent(_wordService) {
                    this._wordService = _wordService;
                }
                WordInputComponent.prototype.onCreate = function (name, definition, origin, language, sentence, partOfSpeech, color, link, font, imageUrl, imageCaption, imageSource) {
                    var word = new word_1.Word(name, definition, origin, language, sentence, partOfSpeech, color, link, font, imageUrl, imageCaption, imageSource);
                    this._wordService.addWord(word);
                };
                WordInputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-word-input',
                        template: "\n  <div class=\"hide-form\">\n    <div class=\"form-group\">\n      <label for='name'>Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" #nameInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='definition'>Definition</label>\n      <input type=\"text\" class=\"form-control\" id=\"definition\" #definitionInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='origin'>Origin</label>\n      <input type=\"text\" class=\"form-control\" id=\"origin\" #originInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='language'>Language</label>\n      <input type=\"text\" class=\"form-control\" id=\"language\" #languageInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='sentence'>Sentence</label>\n      <input type=\"text\" class=\"form-control\" id=\"sentence\" #sentenceInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='partOfSpeech'>Part of Speech</label>\n      <input type=\"text\" class=\"form-control\" id=\"partOfSpeech\" #partOfSpeechInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='color'>Card Color</label>\n      <input type=\"text\" class=\"form-control\" id=\"color\" #colorInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='link'>Link</label>\n      <input type=\"text\" class=\"form-control\" id=\"link\" #linkInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='font'>Font</label>\n      <input type=\"text\" class=\"form-control\" id=\"font\" #fontInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='imageUrl'>Image URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"imageUrl\" #imageUrlInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='imageCaption'>Image Caption</label>\n      <input type=\"text\" class=\"form-control\" id=\"imageCaption\" #imageCaptionInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='imageSource'>Image Source</label>\n      <input type=\"text\" class=\"form-control\" id=\"imageSource\" #imageSourceInput>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onCreate(nameInput.value, definitionInput.value, originInput.value, languageInput.value, sentenceInput.value, partOfSpeechInput.value, colorInput.value, linkInput.value, fontInput.value, imageUrlInput.value, imageCaptionInput.value, imageSourceInput.value)\">Create Word</button>\n  </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [word_service_1.WordService])
                ], WordInputComponent);
                return WordInputComponent;
            }());
            exports_3("WordInputComponent", WordInputComponent);
        }
    }
});
System.register("words/word.component", ['angular2/core', "words/word"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_2, word_2;
    var WordComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (word_2_1) {
                word_2 = word_2_1;
            }],
        execute: function() {
            WordComponent = (function () {
                function WordComponent() {
                }
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', word_2.Word)
                ], WordComponent.prototype, "word", void 0);
                WordComponent = __decorate([
                    core_2.Component({
                        selector: 'my-word',
                        template: "\n      <div class=\"word\" [ngStyle]=\"{'background-image': 'url(' +  word.image + ')',\n    'background-repeat' : 'no-repeat',\n    'background-size' : 'cover',\n    'background-position' : 'center'}\">\n      <div class=\"center-header\">\n        <h2>{{ word.name }}</h2>\n      </div>\n      </div>\n      <div class=\"definition\">\n        <p>{{ word.definition }}</p>\n      </div>\n\n      "
                    }), 
                    __metadata('design:paramtypes', [])
                ], WordComponent);
                return WordComponent;
            }());
            exports_4("WordComponent", WordComponent);
        }
    }
});
System.register("words/word-list.component", ['angular2/core', "words/word", "words/word.component", "words/word.service"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_3, word_3, word_component_1, word_service_2;
    var WordListComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (word_3_1) {
                word_3 = word_3_1;
            },
            function (word_component_1_1) {
                word_component_1 = word_component_1_1;
            },
            function (word_service_2_1) {
                word_service_2 = word_service_2_1;
            }],
        execute: function() {
            WordListComponent = (function () {
                function WordListComponent(_wordService) {
                    this._wordService = _wordService;
                }
                WordListComponent.prototype.ngOnInit = function () {
                    // this.words = this._wordService.getWords();
                    this.words = [
                        new word_3.Word("Pisan Zapra", "The time needed to eat a banana", "images/pisan_zapra2.jpg"),
                        new word_3.Word("Schadenfreude", "The satisfaction we find in another person’s failure or suffering.", "images/schadenfreude.png"),
                        new word_3.Word("Age-otori", "The feeling of looking worse after a haircut.", "images/age_otori.jpg")
                    ];
                };
                WordListComponent = __decorate([
                    core_3.Component({
                        selector: 'my-word-list',
                        template: "\n    <div class=\"wrap\">\n      <my-word *ngFor=\"#word of words\" [word]=\"word\"></my-word>\n    </div>\n  ",
                        directives: [word_component_1.WordComponent]
                    }), 
                    __metadata('design:paramtypes', [word_service_2.WordService])
                ], WordListComponent);
                return WordListComponent;
            }());
            exports_5("WordListComponent", WordListComponent);
        }
    }
});
System.register("words/words.component", ["angular2/core", "words/word-input.component", "words/word-list.component"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_4, word_input_component_1, word_list_component_1;
    var WordsComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (word_input_component_1_1) {
                word_input_component_1 = word_input_component_1_1;
            },
            function (word_list_component_1_1) {
                word_list_component_1 = word_list_component_1_1;
            }],
        execute: function() {
            WordsComponent = (function () {
                function WordsComponent() {
                }
                WordsComponent = __decorate([
                    core_4.Component({
                        selector: 'my-words',
                        template: "\n    <my-word-input></my-word-input>\n    <my-word-list></my-word-list>\n  ",
                        directives: [word_input_component_1.WordInputComponent, word_list_component_1.WordListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WordsComponent);
                return WordsComponent;
            }());
            exports_6("WordsComponent", WordsComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "words/words.component", "words/word"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_5, words_component_1, word_4;
    var AppComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (words_component_1_1) {
                words_component_1 = words_component_1_1;
            },
            function (word_4_1) {
                word_4 = word_4_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.words = [
                        new word_4.Word("Pisan Zapra", "The time needed to eat a banana", "images/pisan_zapra.jpg"),
                        new word_4.Word("Schadenfreude", "The satisfaction we find in another person’s failure or suffering.", "images/schadenfreude.png"),
                        new word_4.Word("Age-otori", "The feeling of looking worse after a haircut.", "images/age_otori.jpg")
                    ];
                }
                AppComponent = __decorate([
                    core_5.Component({
                        selector: 'my-app',
                        template: "\n        <my-words></my-words>\n\n\n    ",
                        directives: [words_component_1.WordsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_7("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component", "words/word.service"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var browser_1, app_component_1, word_service_3;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (word_service_3_1) {
                word_service_3 = word_service_3_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [word_service_3.WordService]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRzL3dvcmQudHMiLCJ3b3Jkcy93b3JkLnNlcnZpY2UudHMiLCJ3b3Jkcy93b3JkLWlucHV0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmQuY29tcG9uZW50LnRzIiwid29yZHMvd29yZC1saXN0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmRzLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFDRSxjQUNTLElBQVksRUFDWixVQUFrQixFQUNsQixLQUFjLEVBQ2QsTUFBZSxFQUNmLFFBQWlCLEVBQ2pCLFFBQWlCLEVBQ2pCLFlBQXFCLEVBQ3JCLEtBQWMsRUFDZCxJQUFhLEVBQ2IsSUFBYSxFQUNiLFlBQXFCLEVBQ3JCLFdBQW9CLEVBQ3BCLElBQWE7b0JBWmIsU0FBSSxHQUFKLElBQUksQ0FBUTtvQkFDWixlQUFVLEdBQVYsVUFBVSxDQUFRO29CQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFTO29CQUNkLFdBQU0sR0FBTixNQUFNLENBQVM7b0JBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FBUztvQkFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztvQkFDakIsaUJBQVksR0FBWixZQUFZLENBQVM7b0JBQ3JCLFVBQUssR0FBTCxLQUFLLENBQVM7b0JBQ2QsU0FBSSxHQUFKLElBQUksQ0FBUztvQkFDYixTQUFJLEdBQUosSUFBSSxDQUFTO29CQUNiLGlCQUFZLEdBQVosWUFBWSxDQUFTO29CQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBUztvQkFDcEIsU0FBSSxHQUFKLElBQUksQ0FBUztnQkFBSSxDQUFDO2dCQUM3QixXQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCx1QkFlQyxDQUFBOzs7Ozs7Ozs7OztZQ2JEO2dCQUFBO29CQUNFLFVBQUssR0FBVyxFQUFFLENBQUM7Z0JBY3JCLENBQUM7Z0JBWkMsNkJBQU8sR0FBUCxVQUFRLElBQVU7b0JBQ2hC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QWlCLENBQUM7cUJBQ3BELENBQUM7O2tDQUFBO2dCQUlGLHFCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCwyQ0FFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNGRDtnQkFFRTtvQkFDRSxJQUFJLENBQUMsS0FBSyxHQUFHO3dCQUNYLElBQUksV0FBSSxDQUFDLGFBQWEsRUFBRSxpQ0FBaUMsRUFBRSx3QkFBd0IsQ0FBQzt3QkFDcEYsSUFBSSxXQUFJLENBQUMsZUFBZSxFQUFFLG9FQUFvRSxFQUFFLDBCQUEwQixDQUFDO3dCQUMzSCxJQUFJLFdBQUksQ0FBQyxXQUFXLEVBQUUsK0NBQStDLEVBQUUsc0JBQXNCLENBQUM7cUJBQy9GLENBQUM7Z0JBQ0osQ0FBQztnQkFsQkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDJDQUlUO3dCQUNELFVBQVUsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBRS9CLENBQUM7O2dDQUFBO2dCQVVGLG1CQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCx1Q0FTQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ2xCRCxtQkFBUyxDQUFDLDRCQUFZLEVBQUUsQ0FBQywwQkFBVyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIuLi8uLi8uLi91bnRyYW5zbGF0YWJsZXMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFdvcmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyBkZWZpbml0aW9uOiBzdHJpbmcsXG4gICAgcHVibGljIGltYWdlPzogc3RyaW5nLCAgXG4gICAgcHVibGljIG9yaWdpbj86IHN0cmluZyxcbiAgICBwdWJsaWMgbGFuZ3VhZ2U/OiBzdHJpbmcsXG4gICAgcHVibGljIHNlbnRlbmNlPzogc3RyaW5nLFxuICAgIHB1YmxpYyBwYXJ0T2ZTcGVlY2g/OiBzdHJpbmcsXG4gICAgcHVibGljIGNvbG9yPzogc3RyaW5nLFxuICAgIHB1YmxpYyBsaW5rPzogc3RyaW5nLFxuICAgIHB1YmxpYyBmb250Pzogc3RyaW5nLFxuICAgIHB1YmxpYyBpbWFnZUNhcHRpb24/OiBzdHJpbmcsXG4gICAgcHVibGljIGltYWdlU291cmNlPzogc3RyaW5nLFxuICAgIHB1YmxpYyB1c2VyPzogc3RyaW5nICkge31cbn1cbiIsImltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmQnO1xuXG5leHBvcnQgY2xhc3MgV29yZFNlcnZpY2Uge1xuICB3b3JkczogV29yZFtdID0gW107XG5cbiAgYWRkV29yZCh3b3JkOiBXb3JkKSB7XG4gICAgdGhpcy53b3Jkcy5wdXNoKHdvcmQpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMud29yZHMpO1xuICB9XG5cbiAgZ2V0V29yZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMud29yZHM7XG4gIH1cblxuICBkZWxldGVXb3JkKHdvcmQ6IFdvcmQpIHtcbiAgICB0aGlzLndvcmRzLnNwbGljZSh0aGlzLndvcmRzLmluZGV4T2Yod29yZCksIDEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmQnO1xuaW1wb3J0IHsgV29yZFNlcnZpY2UgfSBmcm9tICcuL3dvcmQuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS13b3JkLWlucHV0JyxcbiAgdGVtcGxhdGU6YFxuICA8ZGl2IGNsYXNzPVwiaGlkZS1mb3JtXCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9J25hbWUnPk5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm5hbWVcIiAjbmFtZUlucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSdkZWZpbml0aW9uJz5EZWZpbml0aW9uPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJkZWZpbml0aW9uXCIgI2RlZmluaXRpb25JbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0nb3JpZ2luJz5PcmlnaW48L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm9yaWdpblwiICNvcmlnaW5JbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0nbGFuZ3VhZ2UnPkxhbmd1YWdlPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJsYW5ndWFnZVwiICNsYW5ndWFnZUlucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSdzZW50ZW5jZSc+U2VudGVuY2U8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInNlbnRlbmNlXCIgI3NlbnRlbmNlSW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9J3BhcnRPZlNwZWVjaCc+UGFydCBvZiBTcGVlY2g8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhcnRPZlNwZWVjaFwiICNwYXJ0T2ZTcGVlY2hJbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0nY29sb3InPkNhcmQgQ29sb3I8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNvbG9yXCIgI2NvbG9ySW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9J2xpbmsnPkxpbms8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImxpbmtcIiAjbGlua0lucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSdmb250Jz5Gb250PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJmb250XCIgI2ZvbnRJbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0naW1hZ2VVcmwnPkltYWdlIFVSTDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiaW1hZ2VVcmxcIiAjaW1hZ2VVcmxJbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0naW1hZ2VDYXB0aW9uJz5JbWFnZSBDYXB0aW9uPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbWFnZUNhcHRpb25cIiAjaW1hZ2VDYXB0aW9uSW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9J2ltYWdlU291cmNlJz5JbWFnZSBTb3VyY2U8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImltYWdlU291cmNlXCIgI2ltYWdlU291cmNlSW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib25DcmVhdGUobmFtZUlucHV0LnZhbHVlLCBkZWZpbml0aW9uSW5wdXQudmFsdWUsIG9yaWdpbklucHV0LnZhbHVlLCBsYW5ndWFnZUlucHV0LnZhbHVlLCBzZW50ZW5jZUlucHV0LnZhbHVlLCBwYXJ0T2ZTcGVlY2hJbnB1dC52YWx1ZSwgY29sb3JJbnB1dC52YWx1ZSwgbGlua0lucHV0LnZhbHVlLCBmb250SW5wdXQudmFsdWUsIGltYWdlVXJsSW5wdXQudmFsdWUsIGltYWdlQ2FwdGlvbklucHV0LnZhbHVlLCBpbWFnZVNvdXJjZUlucHV0LnZhbHVlKVwiPkNyZWF0ZSBXb3JkPC9idXR0b24+XG4gIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgV29yZElucHV0Q29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93b3JkU2VydmljZTogV29yZFNlcnZpY2UpIHt9XG5cbiAgb25DcmVhdGUobmFtZTogc3RyaW5nLCBkZWZpbml0aW9uOiBzdHJpbmcsIG9yaWdpbjogc3RyaW5nLCBsYW5ndWFnZTogc3RyaW5nLCBzZW50ZW5jZTogc3RyaW5nLCBwYXJ0T2ZTcGVlY2g6IHN0cmluZywgY29sb3I6IHN0cmluZywgbGluazogc3RyaW5nLCBmb250OiBzdHJpbmcsIGltYWdlVXJsOiBzdHJpbmcsIGltYWdlQ2FwdGlvbjogc3RyaW5nLCBpbWFnZVNvdXJjZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgd29yZDogV29yZCA9IG5ldyBXb3JkKG5hbWUsIGRlZmluaXRpb24sIG9yaWdpbiwgbGFuZ3VhZ2UsIHNlbnRlbmNlLCBwYXJ0T2ZTcGVlY2gsIGNvbG9yLCBsaW5rLCBmb250LCBpbWFnZVVybCwgaW1hZ2VDYXB0aW9uLCBpbWFnZVNvdXJjZSk7XG4gICAgdGhpcy5fd29yZFNlcnZpY2UuYWRkV29yZCh3b3JkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmQnLFxuICB0ZW1wbGF0ZTpgXG4gICAgICA8ZGl2IGNsYXNzPVwid29yZFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArICB3b3JkLmltYWdlICsgJyknLFxuICAgICdiYWNrZ3JvdW5kLXJlcGVhdCcgOiAnbm8tcmVwZWF0JyxcbiAgICAnYmFja2dyb3VuZC1zaXplJyA6ICdjb3ZlcicsXG4gICAgJ2JhY2tncm91bmQtcG9zaXRpb24nIDogJ2NlbnRlcid9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyLWhlYWRlclwiPlxuICAgICAgICA8aDI+e3sgd29yZC5uYW1lIH19PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGVmaW5pdGlvblwiPlxuICAgICAgICA8cD57eyB3b3JkLmRlZmluaXRpb24gfX08L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgYFxufSlcbmV4cG9ydCBjbGFzcyBXb3JkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgd29yZDpXb3JkO1xuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5pbXBvcnQgeyBXb3JkQ29tcG9uZW50IH0gZnJvbSAnLi93b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3JkU2VydmljZSB9IGZyb20gJy4vd29yZC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmQtbGlzdCcsXG4gIHRlbXBsYXRlOmBcbiAgICA8ZGl2IGNsYXNzPVwid3JhcFwiPlxuICAgICAgPG15LXdvcmQgKm5nRm9yPVwiI3dvcmQgb2Ygd29yZHNcIiBbd29yZF09XCJ3b3JkXCI+PC9teS13b3JkPlxuICAgIDwvZGl2PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbV29yZENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgV29yZExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIF93b3JkU2VydmljZTogV29yZFNlcnZpY2UpIHt9XG5cbiAgd29yZHM6IFdvcmRbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyB0aGlzLndvcmRzID0gdGhpcy5fd29yZFNlcnZpY2UuZ2V0V29yZHMoKTtcbiAgICB0aGlzLndvcmRzID0gW1xuICAgICAgbmV3IFdvcmQoXCJQaXNhbiBaYXByYVwiLCBcIlRoZSB0aW1lIG5lZWRlZCB0byBlYXQgYSBiYW5hbmFcIiwgXCJpbWFnZXMvcGlzYW5femFwcmEyLmpwZ1wiKSxcbiAgICAgIG5ldyBXb3JkKFwiU2NoYWRlbmZyZXVkZVwiLCBcIlRoZSBzYXRpc2ZhY3Rpb24gd2UgZmluZCBpbiBhbm90aGVyIHBlcnNvbuKAmXMgZmFpbHVyZSBvciBzdWZmZXJpbmcuXCIsIFwiaW1hZ2VzL3NjaGFkZW5mcmV1ZGUucG5nXCIpLFxuICAgICAgbmV3IFdvcmQoXCJBZ2Utb3RvcmlcIiwgXCJUaGUgZmVlbGluZyBvZiBsb29raW5nIHdvcnNlIGFmdGVyIGEgaGFpcmN1dC5cIiwgXCJpbWFnZXMvYWdlX290b3JpLmpwZ1wiKVxuICAgIF07XG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuaW1wb3J0IHsgV29yZElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi93b3JkLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3JkTGlzdENvbXBvbmVudCB9IGZyb20gJy4vd29yZC1saXN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmRzJyxcbiAgdGVtcGxhdGU6YFxuICAgIDxteS13b3JkLWlucHV0PjwvbXktd29yZC1pbnB1dD5cbiAgICA8bXktd29yZC1saXN0PjwvbXktd29yZC1saXN0PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbV29yZElucHV0Q29tcG9uZW50LCBXb3JkTGlzdENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBXb3Jkc0NvbXBvbmVudCB7XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZHNDb21wb25lbnQgfSBmcm9tICcuL3dvcmRzL3dvcmRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3Jkcy93b3JkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxteS13b3Jkcz48L215LXdvcmRzPlxuXG5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtXb3Jkc0NvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwdWJsaWMgd29yZHM6IFdvcmRbXTtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLndvcmRzID0gW1xuICAgICAgbmV3IFdvcmQoXCJQaXNhbiBaYXByYVwiLCBcIlRoZSB0aW1lIG5lZWRlZCB0byBlYXQgYSBiYW5hbmFcIiwgXCJpbWFnZXMvcGlzYW5femFwcmEuanBnXCIpLFxuICAgICAgbmV3IFdvcmQoXCJTY2hhZGVuZnJldWRlXCIsIFwiVGhlIHNhdGlzZmFjdGlvbiB3ZSBmaW5kIGluIGFub3RoZXIgcGVyc29u4oCZcyBmYWlsdXJlIG9yIHN1ZmZlcmluZy5cIiwgXCJpbWFnZXMvc2NoYWRlbmZyZXVkZS5wbmdcIiksXG4gICAgICBuZXcgV29yZChcIkFnZS1vdG9yaVwiLCBcIlRoZSBmZWVsaW5nIG9mIGxvb2tpbmcgd29yc2UgYWZ0ZXIgYSBoYWlyY3V0LlwiLCBcImltYWdlcy9hZ2Vfb3RvcmkuanBnXCIpXG4gICAgXTtcbiAgfVxufVxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7V29yZFNlcnZpY2V9IGZyb20gJy4vd29yZHMvd29yZC5zZXJ2aWNlJztcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1dvcmRTZXJ2aWNlXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
