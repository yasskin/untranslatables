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
                        template: "\n      <div class=\"word\" [ngStyle]=\"{'background-image': 'url(' +  word.image + ')',\n      'background-repeat' : 'no-repeat',\n      'background-size' : 'cover',\n      'background-position' : 'center'}\">\n      <div class=\"center-header\">\n        <h2>{{ word.name }}</h2>\n      </div>\n      </div>\n      <div class=\"definition\">\n        <p>{{ word.definition }}</p>\n      </div>\n\n      "
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
                        new word_3.Word("Age-otori", "The feeling of looking worse after a haircut.", "images/age_otori.jpg"),
                        new word_3.Word("Leiliviskaja", "In Estonia, the Leiliviskaja is the person who adds steam in sauna by throwing water on hot hearth-stones.", "images/frottage.jpg"),
                        new word_3.Word("Hyggelig", "The Danish untranslatable word appears for example in the tragedy of Hamlet and designates the mentality and demeanor of being warm, accommodating and friendly.", "images/toska.jpg")
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
                        template: "\n         <my-words></my-words>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRzL3dvcmQudHMiLCJ3b3Jkcy93b3JkLnNlcnZpY2UudHMiLCJ3b3Jkcy93b3JkLWlucHV0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmQuY29tcG9uZW50LnRzIiwid29yZHMvd29yZC1saXN0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmRzLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFDRSxjQUNTLElBQVksRUFDWixVQUFrQixFQUNsQixLQUFjLEVBQ2QsTUFBZSxFQUNmLFFBQWlCLEVBQ2pCLFFBQWlCLEVBQ2pCLFlBQXFCLEVBQ3JCLEtBQWMsRUFDZCxJQUFhLEVBQ2IsSUFBYSxFQUNiLFlBQXFCLEVBQ3JCLFdBQW9CLEVBQ3BCLElBQWE7b0JBWmIsU0FBSSxHQUFKLElBQUksQ0FBUTtvQkFDWixlQUFVLEdBQVYsVUFBVSxDQUFRO29CQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFTO29CQUNkLFdBQU0sR0FBTixNQUFNLENBQVM7b0JBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FBUztvQkFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztvQkFDakIsaUJBQVksR0FBWixZQUFZLENBQVM7b0JBQ3JCLFVBQUssR0FBTCxLQUFLLENBQVM7b0JBQ2QsU0FBSSxHQUFKLElBQUksQ0FBUztvQkFDYixTQUFJLEdBQUosSUFBSSxDQUFTO29CQUNiLGlCQUFZLEdBQVosWUFBWSxDQUFTO29CQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBUztvQkFDcEIsU0FBSSxHQUFKLElBQUksQ0FBUztnQkFBSSxDQUFDO2dCQUM3QixXQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCx1QkFlQyxDQUFBOzs7Ozs7Ozs7OztZQ2JEO2dCQUFBO29CQUNFLFVBQUssR0FBVyxFQUFFLENBQUM7Z0JBY3JCLENBQUM7Z0JBWkMsNkJBQU8sR0FBUCxVQUFRLElBQVU7b0JBQ2hC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QUE7Z0JBRUEsQ0FBQztnQkFYRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUMsOEVBR1I7d0JBQ0QsVUFBVSxFQUFFLENBQUMseUNBQWtCLEVBQUUsdUNBQWlCLENBQUM7cUJBQ3BELENBQUM7O2tDQUFBO2dCQUlGLHFCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCwyQ0FFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNMRDtnQkFFRTtvQkFDRSxJQUFJLENBQUMsS0FBSyxHQUFHO3dCQUNYLElBQUksV0FBSSxDQUFDLGFBQWEsRUFBRSxpQ0FBaUMsRUFBRSx3QkFBd0IsQ0FBQzt3QkFDcEYsSUFBSSxXQUFJLENBQUMsZUFBZSxFQUFFLG9FQUFvRSxFQUFFLDBCQUEwQixDQUFDO3dCQUMzSCxJQUFJLFdBQUksQ0FBQyxXQUFXLEVBQUUsK0NBQStDLEVBQUUsc0JBQXNCLENBQUM7cUJBQy9GLENBQUM7Z0JBQ0osQ0FBQztnQkFoQkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHdDQUVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBRS9CLENBQUM7O2dDQUFBO2dCQVVGLG1CQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCx1Q0FTQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ2ZELG1CQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLDBCQUFXLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Ii4uLy4uLy4uL3VudHJhbnNsYXRhYmxlcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV29yZCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGRlZmluaXRpb246IHN0cmluZyxcbiAgICBwdWJsaWMgaW1hZ2U/OiBzdHJpbmcsICBcbiAgICBwdWJsaWMgb3JpZ2luPzogc3RyaW5nLFxuICAgIHB1YmxpYyBsYW5ndWFnZT86IHN0cmluZyxcbiAgICBwdWJsaWMgc2VudGVuY2U/OiBzdHJpbmcsXG4gICAgcHVibGljIHBhcnRPZlNwZWVjaD86IHN0cmluZyxcbiAgICBwdWJsaWMgY29sb3I/OiBzdHJpbmcsXG4gICAgcHVibGljIGxpbms/OiBzdHJpbmcsXG4gICAgcHVibGljIGZvbnQ/OiBzdHJpbmcsXG4gICAgcHVibGljIGltYWdlQ2FwdGlvbj86IHN0cmluZyxcbiAgICBwdWJsaWMgaW1hZ2VTb3VyY2U/OiBzdHJpbmcsXG4gICAgcHVibGljIHVzZXI/OiBzdHJpbmcgKSB7fVxufVxuIiwiaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5cbmV4cG9ydCBjbGFzcyBXb3JkU2VydmljZSB7XG4gIHdvcmRzOiBXb3JkW10gPSBbXTtcblxuICBhZGRXb3JkKHdvcmQ6IFdvcmQpIHtcbiAgICB0aGlzLndvcmRzLnB1c2god29yZCk7XG4gICAgY29uc29sZS5sb2codGhpcy53b3Jkcyk7XG4gIH1cblxuICBnZXRXb3JkcygpIHtcbiAgICByZXR1cm4gdGhpcy53b3JkcztcbiAgfVxuXG4gIGRlbGV0ZVdvcmQod29yZDogV29yZCkge1xuICAgIHRoaXMud29yZHMuc3BsaWNlKHRoaXMud29yZHMuaW5kZXhPZih3b3JkKSwgMSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5pbXBvcnQgeyBXb3JkU2VydmljZSB9IGZyb20gJy4vd29yZC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmQtaW5wdXQnLFxuICB0ZW1wbGF0ZTpgXG4gIDxkaXYgY2xhc3M9XCJoaWRlLWZvcm1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0nbmFtZSc+TmFtZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibmFtZVwiICNuYW1lSW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9J2RlZmluaXRpb24nPkRlZmluaXRpb248L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImRlZmluaXRpb25cIiAjZGVmaW5pdGlvbklucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSdvcmlnaW4nPk9yaWdpbjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwib3JpZ2luXCIgI29yaWdpbklucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSdsYW5ndWFnZSc+TGFuZ3VhZ2U8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImxhbmd1YWdlXCIgI2xhbmd1YWdlSW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9J3NlbnRlbmNlJz5TZW50ZW5jZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwic2VudGVuY2VcIiAjc2VudGVuY2VJbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0ncGFydE9mU3BlZWNoJz5QYXJ0IG9mIFNwZWVjaDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwicGFydE9mU3BlZWNoXCIgI3BhcnRPZlNwZWVjaElucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSdjb2xvcic+Q2FyZCBDb2xvcjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY29sb3JcIiAjY29sb3JJbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0nbGluayc+TGluazwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibGlua1wiICNsaW5rSW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9J2ZvbnQnPkZvbnQ8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImZvbnRcIiAjZm9udElucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSdpbWFnZVVybCc+SW1hZ2UgVVJMPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbWFnZVVybFwiICNpbWFnZVVybElucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSdpbWFnZUNhcHRpb24nPkltYWdlIENhcHRpb248L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImltYWdlQ2FwdGlvblwiICNpbWFnZUNhcHRpb25JbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0naW1hZ2VTb3VyY2UnPkltYWdlIFNvdXJjZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiaW1hZ2VTb3VyY2VcIiAjaW1hZ2VTb3VyY2VJbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvbkNyZWF0ZShuYW1lSW5wdXQudmFsdWUsIGRlZmluaXRpb25JbnB1dC52YWx1ZSwgb3JpZ2luSW5wdXQudmFsdWUsIGxhbmd1YWdlSW5wdXQudmFsdWUsIHNlbnRlbmNlSW5wdXQudmFsdWUsIHBhcnRPZlNwZWVjaElucHV0LnZhbHVlLCBjb2xvcklucHV0LnZhbHVlLCBsaW5rSW5wdXQudmFsdWUsIGZvbnRJbnB1dC52YWx1ZSwgaW1hZ2VVcmxJbnB1dC52YWx1ZSwgaW1hZ2VDYXB0aW9uSW5wdXQudmFsdWUsIGltYWdlU291cmNlSW5wdXQudmFsdWUpXCI+Q3JlYXRlIFdvcmQ8L2J1dHRvbj5cbiAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBXb3JkSW5wdXRDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dvcmRTZXJ2aWNlOiBXb3JkU2VydmljZSkge31cblxuICBvbkNyZWF0ZShuYW1lOiBzdHJpbmcsIGRlZmluaXRpb246IHN0cmluZywgb3JpZ2luOiBzdHJpbmcsIGxhbmd1YWdlOiBzdHJpbmcsIHNlbnRlbmNlOiBzdHJpbmcsIHBhcnRPZlNwZWVjaDogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBsaW5rOiBzdHJpbmcsIGZvbnQ6IHN0cmluZywgaW1hZ2VVcmw6IHN0cmluZywgaW1hZ2VDYXB0aW9uOiBzdHJpbmcsIGltYWdlU291cmNlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB3b3JkOiBXb3JkID0gbmV3IFdvcmQobmFtZSwgZGVmaW5pdGlvbiwgb3JpZ2luLCBsYW5ndWFnZSwgc2VudGVuY2UsIHBhcnRPZlNwZWVjaCwgY29sb3IsIGxpbmssIGZvbnQsIGltYWdlVXJsLCBpbWFnZUNhcHRpb24sIGltYWdlU291cmNlKTtcbiAgICB0aGlzLl93b3JkU2VydmljZS5hZGRXb3JkKHdvcmQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3JkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktd29yZCcsXG4gIHRlbXBsYXRlOmBcbiAgICAgIDxkaXYgY2xhc3M9XCJ3b3JkXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgIHdvcmQuaW1hZ2UgKyAnKScsXG4gICAgICAnYmFja2dyb3VuZC1yZXBlYXQnIDogJ25vLXJlcGVhdCcsXG4gICAgICAnYmFja2dyb3VuZC1zaXplJyA6ICdjb3ZlcicsXG4gICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbicgOiAnY2VudGVyJ31cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXItaGVhZGVyXCI+XG4gICAgICAgIDxoMj57eyB3b3JkLm5hbWUgfX08L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkZWZpbml0aW9uXCI+XG4gICAgICAgIDxwPnt7IHdvcmQuZGVmaW5pdGlvbiB9fTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFdvcmRDb21wb25lbnQge1xuICBASW5wdXQoKSB3b3JkOldvcmQ7XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3JkJztcbmltcG9ydCB7IFdvcmRDb21wb25lbnQgfSBmcm9tICcuL3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFdvcmRTZXJ2aWNlIH0gZnJvbSAnLi93b3JkLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktd29yZC1saXN0JyxcbiAgdGVtcGxhdGU6YFxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwXCI+XG4gICAgICA8bXktd29yZCAqbmdGb3I9XCIjd29yZCBvZiB3b3Jkc1wiIFt3b3JkXT1cIndvcmRcIj48L215LXdvcmQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtXb3JkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBXb3JkTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgX3dvcmRTZXJ2aWNlOiBXb3JkU2VydmljZSkge31cblxuICB3b3JkczogV29yZFtdO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMud29yZHMgPSB0aGlzLl93b3JkU2VydmljZS5nZXRXb3JkcygpO1xuICAgIHRoaXMud29yZHMgPSBbXG4gICAgICBuZXcgV29yZChcIlBpc2FuIFphcHJhXCIsIFwiVGhlIHRpbWUgbmVlZGVkIHRvIGVhdCBhIGJhbmFuYVwiLCBcImltYWdlcy9waXNhbl96YXByYTIuanBnXCIpLFxuICAgICAgbmV3IFdvcmQoXCJTY2hhZGVuZnJldWRlXCIsIFwiVGhlIHNhdGlzZmFjdGlvbiB3ZSBmaW5kIGluIGFub3RoZXIgcGVyc29u4oCZcyBmYWlsdXJlIG9yIHN1ZmZlcmluZy5cIiwgXCJpbWFnZXMvc2NoYWRlbmZyZXVkZS5wbmdcIiksXG4gICAgICBuZXcgV29yZChcIkFnZS1vdG9yaVwiLCBcIlRoZSBmZWVsaW5nIG9mIGxvb2tpbmcgd29yc2UgYWZ0ZXIgYSBoYWlyY3V0LlwiLCBcImltYWdlcy9hZ2Vfb3RvcmkuanBnXCIpLFxuICAgICAgbmV3IFdvcmQoXCJMZWlsaXZpc2thamFcIiwgXCJJbiBFc3RvbmlhLCB0aGUgTGVpbGl2aXNrYWphIGlzIHRoZSBwZXJzb24gd2hvIGFkZHMgc3RlYW0gaW4gc2F1bmEgYnkgdGhyb3dpbmcgd2F0ZXIgb24gaG90IGhlYXJ0aC1zdG9uZXMuXCIsIFwiaW1hZ2VzL2Zyb3R0YWdlLmpwZ1wiICksXG4gICAgICBuZXcgV29yZChcIkh5Z2dlbGlnXCIsIFwiVGhlIERhbmlzaCB1bnRyYW5zbGF0YWJsZSB3b3JkIGFwcGVhcnMgZm9yIGV4YW1wbGUgaW4gdGhlIHRyYWdlZHkgb2YgSGFtbGV0IGFuZCBkZXNpZ25hdGVzIHRoZSBtZW50YWxpdHkgYW5kIGRlbWVhbm9yIG9mIGJlaW5nIHdhcm0sIGFjY29tbW9kYXRpbmcgYW5kIGZyaWVuZGx5LlwiLCBcImltYWdlcy90b3NrYS5qcGdcIilcbiAgICBdO1xuXG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbmltcG9ydCB7IFdvcmRJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vd29yZC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV29yZExpc3RDb21wb25lbnQgfSBmcm9tICcuL3dvcmQtbGlzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS13b3JkcycsXG4gIHRlbXBsYXRlOmBcbiAgICA8bXktd29yZC1pbnB1dD48L215LXdvcmQtaW5wdXQ+XG4gICAgPG15LXdvcmQtbGlzdD48L215LXdvcmQtbGlzdD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW1dvcmRJbnB1dENvbXBvbmVudCwgV29yZExpc3RDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgV29yZHNDb21wb25lbnQge1xuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFdvcmRzQ29tcG9uZW50IH0gZnJvbSAnLi93b3Jkcy93b3Jkcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZHMvd29yZCc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgIDxteS13b3Jkcz48L215LXdvcmRzPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1dvcmRzQ29tcG9uZW50XVxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHB1YmxpYyB3b3JkczogV29yZFtdO1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMud29yZHMgPSBbXG4gICAgICBuZXcgV29yZChcIlBpc2FuIFphcHJhXCIsIFwiVGhlIHRpbWUgbmVlZGVkIHRvIGVhdCBhIGJhbmFuYVwiLCBcImltYWdlcy9waXNhbl96YXByYS5qcGdcIiksXG4gICAgICBuZXcgV29yZChcIlNjaGFkZW5mcmV1ZGVcIiwgXCJUaGUgc2F0aXNmYWN0aW9uIHdlIGZpbmQgaW4gYW5vdGhlciBwZXJzb27igJlzIGZhaWx1cmUgb3Igc3VmZmVyaW5nLlwiLCBcImltYWdlcy9zY2hhZGVuZnJldWRlLnBuZ1wiKSxcbiAgICAgIG5ldyBXb3JkKFwiQWdlLW90b3JpXCIsIFwiVGhlIGZlZWxpbmcgb2YgbG9va2luZyB3b3JzZSBhZnRlciBhIGhhaXJjdXQuXCIsIFwiaW1hZ2VzL2FnZV9vdG9yaS5qcGdcIilcbiAgICBdO1xuICB9XG59XG4iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXb3JkU2VydmljZX0gZnJvbSAnLi93b3Jkcy93b3JkLnNlcnZpY2UnO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbV29yZFNlcnZpY2VdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
