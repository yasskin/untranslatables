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
                function Word(name, definition, origin, language, image, imageCaption, imageSource, sentence, partOfSpeech, color, link, font, user) {
                    this.name = name;
                    this.definition = definition;
                    this.origin = origin;
                    this.language = language;
                    this.image = image;
                    this.imageCaption = imageCaption;
                    this.imageSource = imageSource;
                    this.sentence = sentence;
                    this.partOfSpeech = partOfSpeech;
                    this.color = color;
                    this.link = link;
                    this.font = font;
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
                        template: "\n    <div class=\"form-group\">\n      <label for='name'>Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" #nameInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='definition'>Definition</label>\n      <input type=\"text\" class=\"form-control\" id=\"definition\" #definitionInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='origin'>Origin</label>\n      <input type=\"text\" class=\"form-control\" id=\"origin\" #originInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='language'>Language</label>\n      <input type=\"text\" class=\"form-control\" id=\"language\" #languageInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='sentence'>Sentence</label>\n      <input type=\"text\" class=\"form-control\" id=\"sentence\" #sentenceInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='partOfSpeech'>Part of Speech</label>\n      <input type=\"text\" class=\"form-control\" id=\"partOfSpeech\" #partOfSpeechInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='color'>Card Color</label>\n      <input type=\"text\" class=\"form-control\" id=\"color\" #colorInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='link'>Link</label>\n      <input type=\"text\" class=\"form-control\" id=\"link\" #linkInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='font'>Font</label>\n      <input type=\"text\" class=\"form-control\" id=\"font\" #fontInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='imageUrl'>Image URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"imageUrl\" #imageUrlInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='imageCaption'>Image Caption</label>\n      <input type=\"text\" class=\"form-control\" id=\"imageCaption\" #imageCaptionInput>\n    </div>\n    <div class=\"form-group\">\n      <label for='imageSource'>Image Source</label>\n      <input type=\"text\" class=\"form-control\" id=\"imageSource\" #imageSourceInput>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onCreate(nameInput.value, definitionInput.value, originInput.value, languageInput.value, sentenceInput.value, partOfSpeechInput.value, colorInput.value, linkInput.value, fontInput.value, imageUrlInput.value, imageCaptionInput.value, imageSourceInput.value)\">Create Word</button>\n    "
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
                        template: "\n    <div>\n      {{ word.name }}\n    </div>\n    <div>\n      {{ word.definition }}\n    </div>\n    <div>\n      {{ word.origin }}\n    </div>  \n      "
                    }), 
                    __metadata('design:paramtypes', [])
                ], WordComponent);
                return WordComponent;
            }());
            exports_4("WordComponent", WordComponent);
        }
    }
});
System.register("words/word-list.component", ['angular2/core', "words/word.component", "words/word.service"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_3, word_component_1, word_service_2;
    var WordListComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
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
                    this.words = this._wordService.getWords();
                };
                WordListComponent = __decorate([
                    core_3.Component({
                        selector: 'my-word-list',
                        template: "\n    <my-word *ngFor=\"#word of words\" [word]=\"word\"></my-word>\n  ",
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
System.register("app.component", ['angular2/core', "words/words.component"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_5, words_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (words_component_1_1) {
                words_component_1 = words_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_5.Component({
                        selector: 'my-app',
                        template: "\n        <my-words></my-words>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRzL3dvcmQudHMiLCJ3b3Jkcy93b3JkLnNlcnZpY2UudHMiLCJ3b3Jkcy93b3JkLWlucHV0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmQuY29tcG9uZW50LnRzIiwid29yZHMvd29yZC1saXN0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmRzLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFDRSxjQUFvQixJQUFZLEVBQVMsVUFBa0IsRUFBVSxNQUFlLEVBQVMsUUFBaUIsRUFBUyxLQUFjLEVBQVMsWUFBcUIsRUFBUyxXQUFvQixFQUFTLFFBQWlCLEVBQVMsWUFBcUIsRUFBUyxLQUFjLEVBQVMsSUFBYSxFQUFTLElBQWEsRUFBUyxJQUFhO29CQUE3VCxTQUFJLEdBQUosSUFBSSxDQUFRO29CQUFTLGVBQVUsR0FBVixVQUFVLENBQVE7b0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUztvQkFBUyxhQUFRLEdBQVIsUUFBUSxDQUFTO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVM7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQVM7b0JBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVM7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUztvQkFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBUztvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFTO29CQUFTLFNBQUksR0FBSixJQUFJLENBQVM7b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBUztvQkFBUyxTQUFJLEdBQUosSUFBSSxDQUFTO2dCQUFJLENBQUM7Z0JBQ3hWLFdBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVCQUVDLENBQUE7Ozs7Ozs7Ozs7O1lDQUQ7Z0JBQUE7b0JBQ0UsVUFBSyxHQUFXLEVBQUUsQ0FBQztnQkFjckIsQ0FBQztnQkFaQyw2QkFBTyxHQUFQLFVBQVEsSUFBVTtvQkFDaEIsSUFBSSxDQUFD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QUUsdUNBRVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsZ0NBQWMsQ0FBQztxQkFDL0IsQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDTkQsbUJBQVMsQ0FBQyw0QkFBWSxFQUFFLENBQUMsMEJBQVcsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiLi4vLi4vLi4vdW50cmFuc2xhdGFibGVzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBXb3JkIHtcbiAgY29uc3RydWN0b3IoIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBkZWZpbml0aW9uOiBzdHJpbmcsICBwdWJsaWMgb3JpZ2luPzogc3RyaW5nLCBwdWJsaWMgbGFuZ3VhZ2U/OiBzdHJpbmcsIHB1YmxpYyBpbWFnZT86IHN0cmluZywgcHVibGljIGltYWdlQ2FwdGlvbj86IHN0cmluZywgcHVibGljIGltYWdlU291cmNlPzogc3RyaW5nLCBwdWJsaWMgc2VudGVuY2U/OiBzdHJpbmcsIHB1YmxpYyBwYXJ0T2ZTcGVlY2g/OiBzdHJpbmcsIHB1YmxpYyBjb2xvcj86IHN0cmluZywgcHVibGljIGxpbms/OiBzdHJpbmcsIHB1YmxpYyBmb250Pzogc3RyaW5nLCBwdWJsaWMgdXNlcj86IHN0cmluZyApIHt9XG59XG4iLCJpbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3JkJztcblxuZXhwb3J0IGNsYXNzIFdvcmRTZXJ2aWNlIHtcbiAgd29yZHM6IFdvcmRbXSA9IFtdO1xuXG4gIGFkZFdvcmQod29yZDogV29yZCkge1xuICAgIHRoaXMud29yZHMucHVzaCh3b3JkKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLndvcmRzKTtcbiAgfVxuXG4gIGdldFdvcmRzKCkge1xuICAgIHJldHVybiB0aGlzLndvcmRzO1xuICB9XG5cbiAgZGVsZXRlV29yZCh3b3JkOiBXb3JkKSB7XG4gICAgdGhpcy53b3Jkcy5zcGxpY2UodGhpcy53b3Jkcy5pbmRleE9mKHdvcmQpLCAxKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3JkJztcbmltcG9ydCB7IFdvcmRTZXJ2aWNlIH0gZnJvbSAnLi93b3JkLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktd29yZC1pbnB1dCcsXG4gIHRlbXBsYXRlOmBcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0nbmFtZSc+TmFtZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibmFtZVwiICNuYW1lSW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9J2RlZmluaXRpb24nPkRlZmluaXRpb248L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImRlZmluaXRpb25cIiAjZGVmaW5pdGlvbklucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSdvcmlnaW4nPk9yaWdpbjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwib3JpZ2luXCIgI29yaWdpbklucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSdsYW5ndWFnZSc+TGFuZ3VhZ2U8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImxhbmd1YWdlXCIgI2xhbmd1YWdlSW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9J3NlbnRlbmNlJz5TZW50ZW5jZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwic2VudGVuY2VcIiAjc2VudGVuY2VJbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0ncGFydE9mU3BlZWNoJz5QYXJ0IG9mIFNwZWVjaDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwicGFydE9mU3BlZWNoXCIgI3BhcnRPZlNwZWVjaElucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSdjb2xvcic+Q2FyZCBDb2xvcjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY29sb3JcIiAjY29sb3JJbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0nbGluayc+TGluazwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibGlua1wiICNsaW5rSW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9J2ZvbnQnPkZvbnQ8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImZvbnRcIiAjZm9udElucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSdpbWFnZVVybCc+SW1hZ2UgVVJMPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbWFnZVVybFwiICNpbWFnZVVybElucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSdpbWFnZUNhcHRpb24nPkltYWdlIENhcHRpb248L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImltYWdlQ2FwdGlvblwiICNpbWFnZUNhcHRpb25JbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0naW1hZ2VTb3VyY2UnPkltYWdlIFNvdXJjZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiaW1hZ2VTb3VyY2VcIiAjaW1hZ2VTb3VyY2VJbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvbkNyZWF0ZShuYW1lSW5wdXQudmFsdWUsIGRlZmluaXRpb25JbnB1dC52YWx1ZSwgb3JpZ2luSW5wdXQudmFsdWUsIGxhbmd1YWdlSW5wdXQudmFsdWUsIHNlbnRlbmNlSW5wdXQudmFsdWUsIHBhcnRPZlNwZWVjaElucHV0LnZhbHVlLCBjb2xvcklucHV0LnZhbHVlLCBsaW5rSW5wdXQudmFsdWUsIGZvbnRJbnB1dC52YWx1ZSwgaW1hZ2VVcmxJbnB1dC52YWx1ZSwgaW1hZ2VDYXB0aW9uSW5wdXQudmFsdWUsIGltYWdlU291cmNlSW5wdXQudmFsdWUpXCI+Q3JlYXRlIFdvcmQ8L2J1dHRvbj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFdvcmRJbnB1dENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd29yZFNlcnZpY2U6IFdvcmRTZXJ2aWNlKSB7fVxuXG4gIG9uQ3JlYXRlKG5hbWU6IHN0cmluZywgZGVmaW5pdGlvbjogc3RyaW5nLCBvcmlnaW46IHN0cmluZywgbGFuZ3VhZ2U6IHN0cmluZywgc2VudGVuY2U6IHN0cmluZywgcGFydE9mU3BlZWNoOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcsIGxpbms6IHN0cmluZywgZm9udDogc3RyaW5nLCBpbWFnZVVybDogc3RyaW5nLCBpbWFnZUNhcHRpb246IHN0cmluZywgaW1hZ2VTb3VyY2U6IHN0cmluZykge1xuICAgIGNvbnN0IHdvcmQ6IFdvcmQgPSBuZXcgV29yZChuYW1lLCBkZWZpbml0aW9uLCBvcmlnaW4sIGxhbmd1YWdlLCBzZW50ZW5jZSwgcGFydE9mU3BlZWNoLCBjb2xvciwgbGluaywgZm9udCwgaW1hZ2VVcmwsIGltYWdlQ2FwdGlvbiwgaW1hZ2VTb3VyY2UpO1xuICAgIHRoaXMuX3dvcmRTZXJ2aWNlLmFkZFdvcmQod29yZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS13b3JkJyxcbiAgdGVtcGxhdGU6YFxuICAgIDxkaXY+XG4gICAgICB7eyB3b3JkLm5hbWUgfX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAge3sgd29yZC5kZWZpbml0aW9uIH19XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIHt7IHdvcmQub3JpZ2luIH19XG4gICAgPC9kaXY+ICBcbiAgICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgV29yZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHdvcmQ6V29yZDtcblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmQnO1xuaW1wb3J0IHsgV29yZENvbXBvbmVudCB9IGZyb20gJy4vd29yZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV29yZFNlcnZpY2UgfSBmcm9tICcuL3dvcmQuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS13b3JkLWxpc3QnLFxuICB0ZW1wbGF0ZTpgXG4gICAgPG15LXdvcmQgKm5nRm9yPVwiI3dvcmQgb2Ygd29yZHNcIiBbd29yZF09XCJ3b3JkXCI+PC9teS13b3JkPlxuICBgLFxuICBkaXJlY3RpdmVzOiBbV29yZENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgV29yZExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIF93b3JkU2VydmljZTogV29yZFNlcnZpY2UpIHt9XG5cbiAgd29yZHM6IFdvcmRbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndvcmRzID0gdGhpcy5fd29yZFNlcnZpY2UuZ2V0V29yZHMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuaW1wb3J0IHsgV29yZElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi93b3JkLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3JkTGlzdENvbXBvbmVudCB9IGZyb20gJy4vd29yZC1saXN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmRzJyxcbiAgdGVtcGxhdGU6YFxuICAgIDxteS13b3JkLWlucHV0PjwvbXktd29yZC1pbnB1dD5cbiAgICA8bXktd29yZC1saXN0PjwvbXktd29yZC1saXN0PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbV29yZElucHV0Q29tcG9uZW50LCBXb3JkTGlzdENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBXb3Jkc0NvbXBvbmVudCB7XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFdvcmRzQ29tcG9uZW50IH0gZnJvbSAnLi93b3Jkcy93b3Jkcy5jb21wb25lbnQnXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG15LXdvcmRzPjwvbXktd29yZHM+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbV29yZHNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn1cbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge1dvcmRTZXJ2aWNlfSBmcm9tICcuL3dvcmRzL3dvcmQuc2VydmljZSc7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtXb3JkU2VydmljZV0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
