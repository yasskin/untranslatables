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
                WordInputComponent.prototype.onSubmit = function (form) {
                    var word = new word_1.Word(form.name, form.definition, form.origin, form.language, form.sentence, form.partOfSpeech, form.color, form.link, form.font, form.imageUrl, form.imageCaption, form.imageSource);
                    this._wordService.addWord(word);
                };
                WordInputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-word-input',
                        template: "\n    <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for='name'>Name</label>\n        <input ngControl=\"name\" type=\"text\" class=\"form-control\" id=\"name\" #nameInput>\n      </div>\n      <div class=\"form-group\">\n        <label for='definition'>Definition</label>\n        <input ngControl=\"definition\" type=\"text\" class=\"form-control\" id=\"definition\" #definitionInput>\n      </div>\n      <div class=\"form-group\">\n        <label for='origin'>Origin</label>\n        <input ngControl=\"origin\" type=\"text\" class=\"form-control\" id=\"origin\" #originInput>\n      </div>\n      <div class=\"form-group\">\n        <label for='language'>Language</label>\n        <input ngControl=\"language\" type=\"text\" class=\"form-control\" id=\"language\" #languageInput>\n      </div>\n      <div class=\"form-group\">\n        <label for='sentence'>Sentence</label>\n        <input ngControl=\"sentence\" type=\"text\" class=\"form-control\" id=\"sentence\" #sentenceInput>\n      </div>\n      <div class=\"form-group\">\n        <label for='partOfSpeech'>Part of Speech</label>\n        <input ngControl=\"partOfSpeech\" type=\"text\" class=\"form-control\" id=\"partOfSpeech\" #partOfSpeechInput>\n      </div>\n      <div class=\"form-group\">\n        <label for='color'>Card Color</label>\n        <input ngControl=\"color\" type=\"text\" class=\"form-control\" id=\"color\" #colorInput>\n      </div>\n      <div class=\"form-group\">\n        <label for='link'>Link</label>\n        <input ngControl=\"link\" type=\"text\" class=\"form-control\" id=\"link\" #linkInput>\n      </div>\n      <div class=\"form-group\">\n        <label for='font'>Font</label>\n        <input ngControl=\"font\" type=\"text\" class=\"form-control\" id=\"font\" #fontInput>\n      </div>\n      <div class=\"form-group\">\n        <label for='imageUrl'>Image URL</label>\n        <input ngControl=\"imageUrl\" type=\"text\" class=\"form-control\" id=\"imageUrl\" #imageUrlInput>\n      </div>\n      <div class=\"form-group\">\n        <label for='imageCaption'>Image Caption</label>\n        <input ngControl=\"\" type=\"text\" class=\"form-control\" id=\"imageCaption\" #imageCaptionInput>\n      </div>\n      <div class=\"form-group\">\n        <label for='imageSource'>Image Source</label>\n        <input ngControl=\"imageSource\" type=\"text\" class=\"form-control\" id=\"imageSource\" #imageSourceInput>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Create Word</button>\n    </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [word_service_1.WordService])
                ], WordInputComponent);
                return WordInputComponent;
            }());
            exports_3("WordInputComponent", WordInputComponent);
        }
    }
});
System.register("words/word.component", ['angular2/core', "words/word", "words/word.service"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_2, word_2, word_service_2;
    var WordComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (word_2_1) {
                word_2 = word_2_1;
            },
            function (word_service_2_1) {
                word_service_2 = word_service_2_1;
            }],
        execute: function() {
            WordComponent = (function () {
                function WordComponent(_wordService) {
                    this._wordService = _wordService;
                }
                WordComponent.prototype.delete = function (word) {
                    this._wordService.deleteWord(word);
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', word_2.Word)
                ], WordComponent.prototype, "word", void 0);
                WordComponent = __decorate([
                    core_2.Component({
                        selector: 'my-word',
                        template: "\n    <div class=\"word\">\n      <div>\n        {{ word.name }}\n      </div>\n      <div>\n        {{ word.definition }}\n      </div>\n      <div>\n        {{ word.origin }}\n      </div>\n    </div>\n    <button (click)=\"delete(word)\"> Delete </button>\n      "
                    }), 
                    __metadata('design:paramtypes', [word_service_2.WordService])
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
    var core_3, word_component_1, word_service_3;
    var WordListComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (word_component_1_1) {
                word_component_1 = word_component_1_1;
            },
            function (word_service_3_1) {
                word_service_3 = word_service_3_1;
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
                        template: "\n    <div class=\"wrap\">\n      <my-word *ngFor=\"#word of words\" [word]=\"word\"></my-word>\n    </div>\n  ",
                        directives: [word_component_1.WordComponent]
                    }), 
                    __metadata('design:paramtypes', [word_service_3.WordService])
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
System.register("auth/authentication.component", ['angular2/core'], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_5;
    var AuthenticationComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            }],
        execute: function() {
            AuthenticationComponent = (function () {
                function AuthenticationComponent() {
                }
                AuthenticationComponent = __decorate([
                    core_5.Component({
                        selector: 'my-auth',
                        template: "\n    <h1>Auth</h1>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AuthenticationComponent);
                return AuthenticationComponent;
            }());
            exports_7("AuthenticationComponent", AuthenticationComponent);
        }
    }
});
System.register("header.component", ["angular2/core", "angular2/router"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_6, router_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_6.Component({
                        selector: 'my-header',
                        template: "\n    <header class=\"\">\n      <nav class=\"\">\n        <ul class=\"\">\n          <li><a [routerLink]=\"['Words']\">Home</a></li>\n          <li><a [routerLink]=\"['Auth']\">Authentication</a></li>\n        </ul>\n      </nav>\n    </header>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_8("HeaderComponent", HeaderComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "words/words.component", "words/word", 'angular2/router', "auth/authentication.component", "header.component"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_7, words_component_1, word_3, router_2, authentication_component_1, header_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (words_component_1_1) {
                words_component_1 = words_component_1_1;
            },
            function (word_3_1) {
                word_3 = word_3_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (authentication_component_1_1) {
                authentication_component_1 = authentication_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
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
                    core_7.Component({
                        selector: 'my-app',
                        template: "\n        <my-header></my-header>\n        <router-outlet></router-outlet>\n    ",
                        directives: [words_component_1.WordsComponent, router_2.ROUTER_DIRECTIVES, header_component_1.HeaderComponent]
                    }),
                    router_2.RouteConfig([
                        { path: '/', name: 'Words', component: words_component_1.WordsComponent, useAsDefault: true },
                        { path: '/auth', name: 'Auth', component: authentication_component_1.AuthenticationComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_9("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component", "words/word.service", "angular2/router", "angular2/core"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var browser_1, app_component_1, word_service_4, router_3, router_4, core_8;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (word_service_4_1) {
                word_service_4 = word_service_4_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
                router_4 = router_3_1;
            },
            function (core_8_1) {
                core_8 = core_8_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [word_service_4.WordService, router_3.ROUTER_PROVIDERS, core_8.provide(router_4.LocationStrategy, { useClass: router_4.HashLocationStrategy })]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRzL3dvcmQudHMiLCJ3b3Jkcy93b3JkLnNlcnZpY2UudHMiLCJ3b3Jkcy93b3JkLWlucHV0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmQuY29tcG9uZW50LnRzIiwid29yZHMvd29yZC1saXN0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmRzLmNvbXBvbmVudC50cyIsImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIiwiaGVhZGVyLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFDRSxjQUFvQixJQUFZLEVBQVMsVUFBa0IsRUFBVSxNQUFlLEVBQVMsUUFBaUIsRUFBUyxLQUFjLEVBQVMsWUFBcUIsRUFBUyxXQUFvQixFQUFTLFFBQWlCLEVBQVMsWUFBcUIsRUFBUyxLQUFjLEVBQVMsSUFBYSxFQUFTLElBQWEsRUFBUyxJQUFhO29CQUE3VCxTQUFJLEdBQUosSUFBSSxDQUFRO29CQUFTLGVBQVUsR0FBVixVQUFVLENBQVE7b0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUztvQkFBUyxhQUFRLEdBQVIsUUFBUSxDQUFTO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVM7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQVM7b0JBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVM7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUztvQkFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBUztvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFTO29CQUFTLFNBQUksR0FBSixJQUFJLENBQVM7b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBUztvQkFBUyxTQUFJLEdBQUosSUFBSSxDQUFTO2dCQUFJLENBQUM7Z0JBQ3hWLFdBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVCQUVDLENBQUE7Ozs7Ozs7Ozs7O1lDQUQ7Z0JBQUE7b0JBQ0UsVUFBSyxHQUFXLEVBQUUsQ0FB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RUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUN6RSxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsa0RBQXVCLEVBQUM7cUJBQ2xFLENBQUM7O2dDQUFBO2dCQVVGLG1CQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCx1Q0FTQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNyQkQsbUJBQVMsQ0FBQyw0QkFBWSxFQUFFLENBQUMsMEJBQVcsRUFBRSx5QkFBZ0IsRUFBRSxjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQW9CLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIuLi8uLi8uLi91bnRyYW5zbGF0YWJsZXMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFdvcmQge1xuICBjb25zdHJ1Y3RvciggcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGRlZmluaXRpb246IHN0cmluZywgIHB1YmxpYyBvcmlnaW4/OiBzdHJpbmcsIHB1YmxpYyBsYW5ndWFnZT86IHN0cmluZywgcHVibGljIGltYWdlPzogc3RyaW5nLCBwdWJsaWMgaW1hZ2VDYXB0aW9uPzogc3RyaW5nLCBwdWJsaWMgaW1hZ2VTb3VyY2U/OiBzdHJpbmcsIHB1YmxpYyBzZW50ZW5jZT86IHN0cmluZywgcHVibGljIHBhcnRPZlNwZWVjaD86IHN0cmluZywgcHVibGljIGNvbG9yPzogc3RyaW5nLCBwdWJsaWMgbGluaz86IHN0cmluZywgcHVibGljIGZvbnQ/OiBzdHJpbmcsIHB1YmxpYyB1c2VyPzogc3RyaW5nICkge31cbn1cbiIsImltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmQnO1xuXG5leHBvcnQgY2xhc3MgV29yZFNlcnZpY2Uge1xuICB3b3JkczogV29yZFtdID0gW107XG5cbiAgYWRkV29yZCh3b3JkOiBXb3JkKSB7XG4gICAgdGhpcy53b3Jkcy5wdXNoKHdvcmQpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMud29yZHMpO1xuICB9XG5cbiAgZ2V0V29yZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMud29yZHM7XG4gIH1cblxuICBkZWxldGVXb3JkKHdvcmQ6IFdvcmQpIHtcbiAgICB0aGlzLndvcmRzLnNwbGljZSh0aGlzLndvcmRzLmluZGV4T2Yod29yZCksIDEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmQnO1xuaW1wb3J0IHsgV29yZFNlcnZpY2UgfSBmcm9tICcuL3dvcmQuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS13b3JkLWlucHV0JyxcbiAgdGVtcGxhdGU6YFxuICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmLnZhbHVlKVwiICNmPVwibmdGb3JtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSduYW1lJz5OYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJuYW1lXCIgI25hbWVJbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nZGVmaW5pdGlvbic+RGVmaW5pdGlvbjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJkZWZpbml0aW9uXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZGVmaW5pdGlvblwiICNkZWZpbml0aW9uSW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9J29yaWdpbic+T3JpZ2luPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cIm9yaWdpblwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm9yaWdpblwiICNvcmlnaW5JbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nbGFuZ3VhZ2UnPkxhbmd1YWdlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImxhbmd1YWdlXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibGFuZ3VhZ2VcIiAjbGFuZ3VhZ2VJbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nc2VudGVuY2UnPlNlbnRlbmNlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cInNlbnRlbmNlXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwic2VudGVuY2VcIiAjc2VudGVuY2VJbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0ncGFydE9mU3BlZWNoJz5QYXJ0IG9mIFNwZWVjaDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJwYXJ0T2ZTcGVlY2hcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwYXJ0T2ZTcGVlY2hcIiAjcGFydE9mU3BlZWNoSW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9J2NvbG9yJz5DYXJkIENvbG9yPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImNvbG9yXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY29sb3JcIiAjY29sb3JJbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nbGluayc+TGluazwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJsaW5rXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibGlua1wiICNsaW5rSW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9J2ZvbnQnPkZvbnQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiZm9udFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImZvbnRcIiAjZm9udElucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdpbWFnZVVybCc+SW1hZ2UgVVJMPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImltYWdlVXJsXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiaW1hZ2VVcmxcIiAjaW1hZ2VVcmxJbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0naW1hZ2VDYXB0aW9uJz5JbWFnZSBDYXB0aW9uPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cIlwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImltYWdlQ2FwdGlvblwiICNpbWFnZUNhcHRpb25JbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0naW1hZ2VTb3VyY2UnPkltYWdlIFNvdXJjZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJpbWFnZVNvdXJjZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImltYWdlU291cmNlXCIgI2ltYWdlU291cmNlSW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+Q3JlYXRlIFdvcmQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBXb3JkSW5wdXRDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dvcmRTZXJ2aWNlOiBXb3JkU2VydmljZSkge31cblxuICBvblN1Ym1pdChmb3JtOmFueSkge1xuICAgIGNvbnN0IHdvcmQ6IFdvcmQgPSBuZXcgV29yZChmb3JtLm5hbWUsIGZvcm0uZGVmaW5pdGlvbiwgZm9ybS5vcmlnaW4sIGZvcm0ubGFuZ3VhZ2UsIGZvcm0uc2VudGVuY2UsIGZvcm0ucGFydE9mU3BlZWNoLCBmb3JtLmNvbG9yLCBmb3JtLmxpbmssIGZvcm0uZm9udCwgZm9ybS5pbWFnZVVybCwgZm9ybS5pbWFnZUNhcHRpb24sIGZvcm0uaW1hZ2VTb3VyY2UpO1xuICAgIHRoaXMuX3dvcmRTZXJ2aWNlLmFkZFdvcmQod29yZCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5pbXBvcnQgeyBXb3JkU2VydmljZSB9IGZyb20gJy4vd29yZC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktd29yZCcsXG4gIHRlbXBsYXRlOmBcbiAgICA8ZGl2IGNsYXNzPVwid29yZFwiPlxuICAgICAgPGRpdj5cbiAgICAgICAge3sgd29yZC5uYW1lIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHt7IHdvcmQuZGVmaW5pdGlvbiB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7eyB3b3JkLm9yaWdpbiB9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlKHdvcmQpXCI+IERlbGV0ZSA8L2J1dHRvbj5cbiAgICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgV29yZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHdvcmQ6V29yZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93b3JkU2VydmljZTogV29yZFNlcnZpY2UpIHt9XG5cbiAgZGVsZXRlKHdvcmQpIHtcbiAgICB0aGlzLl93b3JkU2VydmljZS5kZWxldGVXb3JkKHdvcmQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5pbXBvcnQgeyBXb3JkQ29tcG9uZW50IH0gZnJvbSAnLi93b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3JkU2VydmljZSB9IGZyb20gJy4vd29yZC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmQtbGlzdCcsXG4gIHRlbXBsYXRlOmBcbiAgICA8ZGl2IGNsYXNzPVwid3JhcFwiPlxuICAgICAgPG15LXdvcmQgKm5nRm9yPVwiI3dvcmQgb2Ygd29yZHNcIiBbd29yZF09XCJ3b3JkXCI+PC9teS13b3JkPlxuICAgIDwvZGl2PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbV29yZENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgV29yZExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIF93b3JkU2VydmljZTogV29yZFNlcnZpY2UpIHt9XG5cbiAgd29yZHM6IFdvcmRbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndvcmRzID0gdGhpcy5fd29yZFNlcnZpY2UuZ2V0V29yZHMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuaW1wb3J0IHsgV29yZElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi93b3JkLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3JkTGlzdENvbXBvbmVudCB9IGZyb20gJy4vd29yZC1saXN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmRzJyxcbiAgdGVtcGxhdGU6YFxuICAgIDxteS13b3JkLWlucHV0PjwvbXktd29yZC1pbnB1dD5cbiAgICA8bXktd29yZC1saXN0PjwvbXktd29yZC1saXN0PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbV29yZElucHV0Q29tcG9uZW50LCBXb3JkTGlzdENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBXb3Jkc0NvbXBvbmVudCB7XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktYXV0aCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGgxPkF1dGg8L2gxPlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db21wb25lbnQge1xuXG59XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhlYWRlciBjbGFzcz1cIlwiPlxuICAgICAgPG5hdiBjbGFzcz1cIlwiPlxuICAgICAgICA8dWwgY2xhc3M9XCJcIj5cbiAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydXb3JkcyddXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0F1dGgnXVwiPkF1dGhlbnRpY2F0aW9uPC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgYCxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFdvcmRzQ29tcG9uZW50IH0gZnJvbSAnLi93b3Jkcy93b3Jkcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZHMvd29yZCc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7QXV0aGVudGljYXRpb25Db21wb25lbnR9IGZyb20gJy4vYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bXktaGVhZGVyPjwvbXktaGVhZGVyPlxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbV29yZHNDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTLCBIZWFkZXJDb21wb25lbnRdXG5cbn0pXG5AUm91dGVDb25maWcoW1xuICB7cGF0aDogJy8nLCBuYW1lOiAnV29yZHMnLCBjb21wb25lbnQ6IFdvcmRzQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuICB7cGF0aDogJy9hdXRoJywgbmFtZTogJ0F1dGgnLCBjb21wb25lbnQ6IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50fVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwdWJsaWMgd29yZHM6IFdvcmRbXTtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLndvcmRzID0gW1xuICAgICAgbmV3IFdvcmQoXCJQaXNhbiBaYXByYVwiLCBcIlRoZSB0aW1lIG5lZWRlZCB0byBlYXQgYSBiYW5hbmFcIiwgXCJpbWFnZXMvcGlzYW5femFwcmEuanBnXCIpLFxuICAgICAgbmV3IFdvcmQoXCJTY2hhZGVuZnJldWRlXCIsIFwiVGhlIHNhdGlzZmFjdGlvbiB3ZSBmaW5kIGluIGFub3RoZXIgcGVyc29u4oCZcyBmYWlsdXJlIG9yIHN1ZmZlcmluZy5cIiwgXCJpbWFnZXMvc2NoYWRlbmZyZXVkZS5wbmdcIiksXG4gICAgICBuZXcgV29yZChcIkFnZS1vdG9yaVwiLCBcIlRoZSBmZWVsaW5nIG9mIGxvb2tpbmcgd29yc2UgYWZ0ZXIgYSBoYWlyY3V0LlwiLCBcImltYWdlcy9hZ2Vfb3RvcmkuanBnXCIpXG4gICAgXTtcbiAgfVxufVxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7V29yZFNlcnZpY2V9IGZyb20gJy4vd29yZHMvd29yZC5zZXJ2aWNlJztcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtwcm92aWRlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbV29yZFNlcnZpY2UsIFJPVVRFUl9QUk9WSURFUlMsIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX0pXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
