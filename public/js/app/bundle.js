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
                        template: "\n    <div class=\"word\">\n      <div>\n        {{ word.name }}\n      </div>\n      <div>\n        {{ word.definition }}\n      </div>\n      <div>\n        {{ word.origin }}\n      </div>\n    </div>\n      "
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
                        template: "\n    <div class=\"wrap\"\n      <my-word *ngFor=\"#word of words\" [word]=\"word\"></my-word>\n    </div>\n  ",
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
    var core_5, words_component_1, word_3;
    var AppComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (words_component_1_1) {
                words_component_1 = words_component_1_1;
            },
            function (word_3_1) {
                word_3 = word_3_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.words = [
                        new word_3.Word("Pisan Zapra", "The time needed to eat a banana", "images/pisan_zapra.jpg"),
                        new word_3.Word("Schadenfreude", "The satisfaction we find in another person’s failure or suffering.", "images/schadenfreude.png"),
                        new word_3.Word("Age-otori", "The feeling of looking worse after a haircut.", "images/age_otori.jpg")
                    ];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRzL3dvcmQudHMiLCJ3b3Jkcy93b3JkLnNlcnZpY2UudHMiLCJ3b3Jkcy93b3JkLWlucHV0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmQuY29tcG9uZW50LnRzIiwid29yZHMvd29yZC1saXN0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmRzLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFDRSxjQUFvQixJQUFZLEVBQVMsVUFBa0IsRUFBVSxNQUFlLEVBQVMsUUFBaUIsRUFBUyxLQUFjLEVBQVMsWUFBcUIsRUFBUyxXQUFvQixFQUFTLFFBQWlCLEVBQVMsWUFBcUIsRUFBUyxLQUFjLEVBQVMsSUFBYSxFQUFTLElBQWEsRUFBUyxJQUFhO29CQUE3VCxTQUFJLEdBQUosSUFBSSxDQUFRO29CQUFTLGVBQVUsR0FBVixVQUFVLENBQVE7b0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUztvQkFBUyxhQUFRLEdBQVIsUUFBUSxDQUFTO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVM7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQVM7b0JBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVM7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUztvQkFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBUztvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFTO29CQUFTLFNBQUksR0FBSixJQUFJLENBQVM7b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBUztvQkFBUyxTQUFJLEdBQUosSUFBSSxDQUFTO2dCQUFJLENBQUM7Z0JBQ3hWLFdBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVCQUVDLENBQUE7Ozs7Ozs7Ozs7O1lDQUQ7Z0JBQUE7b0JBQ0UsVUFBSyxHQUFXLEVBQUUsQ0FBQztnQkFjckIsQ0FBQztnQkFaQyw2QkFBTyxHQUFQLFVBQVEsSUFBVTtvQkFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVELDhCQUFRLEdBQVI7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3BCLENBQUM7Z0JBRUQsZ0NBQVUsR0FBVixVQUFXLElBQVU7b0JBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQUNILGtCQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCxxQ0FlQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUN3Q0Q7Z0JBRUUsNEJBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQUVqRCxxQ0FBUSxHQUFSLFVBQVMsSUFBWSxFQUFFLFVBQWtCLEVBQUUsTUFBYyxFQUFFLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxZQUFvQixFQUFFLEtBQWEsRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFFLFFBQWdCLEVBQUUsWUFBb0IsRUFBRSxXQUFtQjtvQkFDek4sSUFBTSxJQUFJLEdBQVMsSUFBSSxXQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFDaEosSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBN0RIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBQyx1M0VBa0ROO3FCQUNKLENBQUM7O3NDQUFBO2dCQVNGLHlCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCxtREFRQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUM5Q0Q7Z0JBQUE7Z0JBR0EsQ0FBQztnQkFGQztvQkFBQyxZQUFLLEVBQUU7OzJEQUFBO2dCQWpCVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxTQUFTO3dCQUNuQixRQUFRLEVBQUMsb05BWUo7cUJBQ04sQ0FBQzs7aUNBQUE7Z0JBSUYsb0JBQUM7WUFBRCxDQUhBLEFBR0MsSUFBQTtZQUhELHlDQUdDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ1REO2dCQUVFLDJCQUFxQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFJbEQsb0NBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzVDLENBQUM7Z0JBakJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBQyxnSEFJUjt3QkFDRCxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUM1QixDQUFDOztxQ0FBQTtnQkFVRix3QkFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQsaURBU0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDUkQ7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFYRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUMsOEVBR1I7d0JBQ0QsVUFBVSxFQUFFLENBQUMseUNBQWtCLEVBQUUsdUNBQWlCLENBQUM7cUJBQ3BELENBQUM7O2tDQUFBO2dCQUlGLHFCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCwyQ0FFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNMRDtnQkFFRTtvQkFDRSxJQUFJLENBQUMsS0FBSyxHQUFHO3dCQUNYLElBQUksV0FBSSxDQUFDLGFBQWEsRUFBRSxpQ0FBaUMsRUFBRSx3QkFBd0IsQ0FBQzt3QkFDcEYsSUFBSSxXQUFJLENBQUMsZUFBZSxFQUFFLG9FQUFvRSxFQUFFLDBCQUEwQixDQUFDO3dCQUMzSCxJQUFJLFdBQUksQ0FBQyxXQUFXLEVBQUUsK0NBQStDLEVBQUUsc0JBQXNCLENBQUM7cUJBQy9GLENBQUM7Z0JBQ0osQ0FBQztnQkFoQkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHVDQUVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBRS9CLENBQUM7O2dDQUFBO2dCQVVGLG1CQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCx1Q0FTQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ2ZELG1CQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLDBCQUFXLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Ii4uLy4uLy4uL3VudHJhbnNsYXRhYmxlcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV29yZCB7XG4gIGNvbnN0cnVjdG9yKCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgZGVmaW5pdGlvbjogc3RyaW5nLCAgcHVibGljIG9yaWdpbj86IHN0cmluZywgcHVibGljIGxhbmd1YWdlPzogc3RyaW5nLCBwdWJsaWMgaW1hZ2U/OiBzdHJpbmcsIHB1YmxpYyBpbWFnZUNhcHRpb24/OiBzdHJpbmcsIHB1YmxpYyBpbWFnZVNvdXJjZT86IHN0cmluZywgcHVibGljIHNlbnRlbmNlPzogc3RyaW5nLCBwdWJsaWMgcGFydE9mU3BlZWNoPzogc3RyaW5nLCBwdWJsaWMgY29sb3I/OiBzdHJpbmcsIHB1YmxpYyBsaW5rPzogc3RyaW5nLCBwdWJsaWMgZm9udD86IHN0cmluZywgcHVibGljIHVzZXI/OiBzdHJpbmcgKSB7fVxufVxuIiwiaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5cbmV4cG9ydCBjbGFzcyBXb3JkU2VydmljZSB7XG4gIHdvcmRzOiBXb3JkW10gPSBbXTtcblxuICBhZGRXb3JkKHdvcmQ6IFdvcmQpIHtcbiAgICB0aGlzLndvcmRzLnB1c2god29yZCk7XG4gICAgY29uc29sZS5sb2codGhpcy53b3Jkcyk7XG4gIH1cblxuICBnZXRXb3JkcygpIHtcbiAgICByZXR1cm4gdGhpcy53b3JkcztcbiAgfVxuXG4gIGRlbGV0ZVdvcmQod29yZDogV29yZCkge1xuICAgIHRoaXMud29yZHMuc3BsaWNlKHRoaXMud29yZHMuaW5kZXhPZih3b3JkKSwgMSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5pbXBvcnQgeyBXb3JkU2VydmljZSB9IGZyb20gJy4vd29yZC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmQtaW5wdXQnLFxuICB0ZW1wbGF0ZTpgXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9J25hbWUnPk5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm5hbWVcIiAjbmFtZUlucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSdkZWZpbml0aW9uJz5EZWZpbml0aW9uPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJkZWZpbml0aW9uXCIgI2RlZmluaXRpb25JbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0nb3JpZ2luJz5PcmlnaW48L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm9yaWdpblwiICNvcmlnaW5JbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0nbGFuZ3VhZ2UnPkxhbmd1YWdlPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJsYW5ndWFnZVwiICNsYW5ndWFnZUlucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSdzZW50ZW5jZSc+U2VudGVuY2U8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInNlbnRlbmNlXCIgI3NlbnRlbmNlSW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9J3BhcnRPZlNwZWVjaCc+UGFydCBvZiBTcGVlY2g8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhcnRPZlNwZWVjaFwiICNwYXJ0T2ZTcGVlY2hJbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0nY29sb3InPkNhcmQgQ29sb3I8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNvbG9yXCIgI2NvbG9ySW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9J2xpbmsnPkxpbms8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImxpbmtcIiAjbGlua0lucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSdmb250Jz5Gb250PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJmb250XCIgI2ZvbnRJbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0naW1hZ2VVcmwnPkltYWdlIFVSTDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiaW1hZ2VVcmxcIiAjaW1hZ2VVcmxJbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj0naW1hZ2VDYXB0aW9uJz5JbWFnZSBDYXB0aW9uPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbWFnZUNhcHRpb25cIiAjaW1hZ2VDYXB0aW9uSW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9J2ltYWdlU291cmNlJz5JbWFnZSBTb3VyY2U8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImltYWdlU291cmNlXCIgI2ltYWdlU291cmNlSW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib25DcmVhdGUobmFtZUlucHV0LnZhbHVlLCBkZWZpbml0aW9uSW5wdXQudmFsdWUsIG9yaWdpbklucHV0LnZhbHVlLCBsYW5ndWFnZUlucHV0LnZhbHVlLCBzZW50ZW5jZUlucHV0LnZhbHVlLCBwYXJ0T2ZTcGVlY2hJbnB1dC52YWx1ZSwgY29sb3JJbnB1dC52YWx1ZSwgbGlua0lucHV0LnZhbHVlLCBmb250SW5wdXQudmFsdWUsIGltYWdlVXJsSW5wdXQudmFsdWUsIGltYWdlQ2FwdGlvbklucHV0LnZhbHVlLCBpbWFnZVNvdXJjZUlucHV0LnZhbHVlKVwiPkNyZWF0ZSBXb3JkPC9idXR0b24+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBXb3JkSW5wdXRDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dvcmRTZXJ2aWNlOiBXb3JkU2VydmljZSkge31cblxuICBvbkNyZWF0ZShuYW1lOiBzdHJpbmcsIGRlZmluaXRpb246IHN0cmluZywgb3JpZ2luOiBzdHJpbmcsIGxhbmd1YWdlOiBzdHJpbmcsIHNlbnRlbmNlOiBzdHJpbmcsIHBhcnRPZlNwZWVjaDogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBsaW5rOiBzdHJpbmcsIGZvbnQ6IHN0cmluZywgaW1hZ2VVcmw6IHN0cmluZywgaW1hZ2VDYXB0aW9uOiBzdHJpbmcsIGltYWdlU291cmNlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB3b3JkOiBXb3JkID0gbmV3IFdvcmQobmFtZSwgZGVmaW5pdGlvbiwgb3JpZ2luLCBsYW5ndWFnZSwgc2VudGVuY2UsIHBhcnRPZlNwZWVjaCwgY29sb3IsIGxpbmssIGZvbnQsIGltYWdlVXJsLCBpbWFnZUNhcHRpb24sIGltYWdlU291cmNlKTtcbiAgICB0aGlzLl93b3JkU2VydmljZS5hZGRXb3JkKHdvcmQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3JkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktd29yZCcsXG4gIHRlbXBsYXRlOmBcbiAgICA8ZGl2IGNsYXNzPVwid29yZFwiPlxuICAgICAgPGRpdj5cbiAgICAgICAge3sgd29yZC5uYW1lIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHt7IHdvcmQuZGVmaW5pdGlvbiB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7eyB3b3JkLm9yaWdpbiB9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFdvcmRDb21wb25lbnQge1xuICBASW5wdXQoKSB3b3JkOldvcmQ7XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3JkJztcbmltcG9ydCB7IFdvcmRDb21wb25lbnQgfSBmcm9tICcuL3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFdvcmRTZXJ2aWNlIH0gZnJvbSAnLi93b3JkLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktd29yZC1saXN0JyxcbiAgdGVtcGxhdGU6YFxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwXCJcbiAgICAgIDxteS13b3JkICpuZ0Zvcj1cIiN3b3JkIG9mIHdvcmRzXCIgW3dvcmRdPVwid29yZFwiPjwvbXktd29yZD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgZGlyZWN0aXZlczogW1dvcmRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFdvcmRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfd29yZFNlcnZpY2U6IFdvcmRTZXJ2aWNlKSB7fVxuXG4gIHdvcmRzOiBXb3JkW107XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy53b3JkcyA9IHRoaXMuX3dvcmRTZXJ2aWNlLmdldFdvcmRzKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbmltcG9ydCB7IFdvcmRJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vd29yZC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV29yZExpc3RDb21wb25lbnQgfSBmcm9tICcuL3dvcmQtbGlzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS13b3JkcycsXG4gIHRlbXBsYXRlOmBcbiAgICA8bXktd29yZC1pbnB1dD48L215LXdvcmQtaW5wdXQ+XG4gICAgPG15LXdvcmQtbGlzdD48L215LXdvcmQtbGlzdD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW1dvcmRJbnB1dENvbXBvbmVudCwgV29yZExpc3RDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgV29yZHNDb21wb25lbnQge1xuXG59XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3Jkc0NvbXBvbmVudCB9IGZyb20gJy4vd29yZHMvd29yZHMuY29tcG9uZW50JztcbmltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmRzL3dvcmQnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxteS13b3Jkcz48L215LXdvcmRzPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1dvcmRzQ29tcG9uZW50XVxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHB1YmxpYyB3b3JkczogV29yZFtdO1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMud29yZHMgPSBbXG4gICAgICBuZXcgV29yZChcIlBpc2FuIFphcHJhXCIsIFwiVGhlIHRpbWUgbmVlZGVkIHRvIGVhdCBhIGJhbmFuYVwiLCBcImltYWdlcy9waXNhbl96YXByYS5qcGdcIiksXG4gICAgICBuZXcgV29yZChcIlNjaGFkZW5mcmV1ZGVcIiwgXCJUaGUgc2F0aXNmYWN0aW9uIHdlIGZpbmQgaW4gYW5vdGhlciBwZXJzb27igJlzIGZhaWx1cmUgb3Igc3VmZmVyaW5nLlwiLCBcImltYWdlcy9zY2hhZGVuZnJldWRlLnBuZ1wiKSxcbiAgICAgIG5ldyBXb3JkKFwiQWdlLW90b3JpXCIsIFwiVGhlIGZlZWxpbmcgb2YgbG9va2luZyB3b3JzZSBhZnRlciBhIGhhaXJjdXQuXCIsIFwiaW1hZ2VzL2FnZV9vdG9yaS5qcGdcIilcbiAgICBdO1xuICB9XG59XG4iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXb3JkU2VydmljZX0gZnJvbSAnLi93b3Jkcy93b3JkLnNlcnZpY2UnO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbV29yZFNlcnZpY2VdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
