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
System.register("auth/signup.component", ['angular2/core', 'angular2/common'], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_5, common_1;
    var SignupComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(_fb) {
                    this._fb = _fb;
                }
                SignupComponent.prototype.onSubmit = function () {
                    console.log(this.myForm.value);
                };
                SignupComponent.prototype.ngOnInit = function () {
                    this.myForm = this._fb.group({
                        firstName: ['', common_1.Validators.required],
                        lastName: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.required],
                        password: ['', common_1.Validators.required]
                    });
                };
                SignupComponent = __decorate([
                    core_5.Component({
                        selector: 'my-signup',
                        template: "\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input [ngFormControl]=\"myForm.find('firstName')\" type=\"text\" id=\"firstName\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input [ngFormControl]=\"myForm.find('lastName')\" type=\"text\" id=\"lastName\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input [ngFormControl]=\"myForm.find('email')\" type=\"email\" id=\"email\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input [ngFormControl]=\"myForm.find('password')\" type=\"password\" id=\"password\" class=\"form-control\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Sign Up</button>\n    </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_7("SignupComponent", SignupComponent);
        }
    }
});
System.register("auth/authentication.component", ['angular2/core', "auth/signup.component"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_6, signup_component_1;
    var AuthenticationComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            }],
        execute: function() {
            AuthenticationComponent = (function () {
                function AuthenticationComponent() {
                }
                AuthenticationComponent = __decorate([
                    core_6.Component({
                        selector: 'my-auth',
                        template: "\n    <h1>Auth</h1>\n    <my-signup></my-signup>\n  ",
                        directives: [signup_component_1.SignupComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AuthenticationComponent);
                return AuthenticationComponent;
            }());
            exports_8("AuthenticationComponent", AuthenticationComponent);
        }
    }
});
System.register("header.component", ["angular2/core", "angular2/router"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_7, router_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_7.Component({
                        selector: 'my-header',
                        template: "\n    <header class=\"\">\n      <nav class=\"\">\n        <ul class=\"\">\n          <li><a [routerLink]=\"['Words']\">Home</a></li>\n          <li><a [routerLink]=\"['Auth']\">Authentication</a></li>\n        </ul>\n      </nav>\n    </header>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_9("HeaderComponent", HeaderComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "words/words.component", "words/word", 'angular2/router', "auth/authentication.component", "header.component"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_8, words_component_1, word_3, router_2, authentication_component_1, header_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
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
                    core_8.Component({
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
            exports_10("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component", "words/word.service", "angular2/router", "angular2/core"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var browser_1, app_component_1, word_service_4, router_3, router_4, core_9;
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
            function (core_9_1) {
                core_9 = core_9_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [word_service_4.WordService, router_3.ROUTER_PROVIDERS, core_9.provide(router_4.LocationStrategy, { useClass: router_4.HashLocationStrategy })]);
        }
    }
});
System.register("auth/logout.component", ['angular2/core'], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_10;
    var LogoutComponent;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            }],
        execute: function() {
            LogoutComponent = (function () {
                function LogoutComponent() {
                }
                LogoutComponent.prototype.onLogout = function () {
                };
                LogoutComponent = __decorate([
                    core_10.Component({
                        selector: 'my-logout',
                        template: "\n    <button class=\"btn btn-danger\"(click)=\"onLogout()\">Logout</button>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogoutComponent);
                return LogoutComponent;
            }());
            exports_12("LogoutComponent", LogoutComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRzL3dvcmQudHMiLCJ3b3Jkcy93b3JkLnNlcnZpY2UudHMiLCJ3b3Jkcy93b3JkLWlucHV0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmQuY29tcG9uZW50LnRzIiwid29yZHMvd29yZC1saXN0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmRzLmNvbXBvbmVudC50cyIsImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyIsImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIiwiaGVhZGVyLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC9sb2dvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFDRSxjQUFvQixJQUFZLEVBQVMsVUFBa0IsRUFBVSxNQUFlLEVBQVMsUUFBaUIsRUFBUyxLQUFjLEVBQVMsWUFBcUIsRUFBUyxXQUFvQixFQUFTLFFBQWlCLEVBQVMsWUFBcUIsRUFBUyxLQUFjLEVBQVMsSUFBYSxFQUFTLElBQWEsRUFBUyxJQUFhO29CQUE3VCxTQUFJLEdBQUosSUFBSSxDQUFRO29CQUFTLGVBQVUsR0FBVixVQUFVLENBQVE7b0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUztvQkFBUyxhQUFRLEdBQVIsUUFBUSxDQUFTO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVM7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQVM7b0JBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVM7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUztvQkFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBUztvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFTO29CQUFTLFNBQUksR0FBSixJQUFJLENBQVM7b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBUztvQkFBUyxTQUFJLEdBQUosSUFBSSxDQUFTO2dCQUFJLENBQUM7Z0JBQ3hWLFdBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVC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QVRBLEFBU0MsSUFBQTtZQVRELHdDQVNDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ3JCRCxtQkFBUyxDQUFDLDRCQUFZLEVBQUUsQ0FBQywwQkFBVyxFQUFFLHlCQUFnQixFQUFFLGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7WUNBdEg7Z0JBQUE7Z0JBSUEsQ0FBQztnQkFIQyxrQ0FBUSxHQUFSO2dCQUVBLENBQUM7Z0JBVkg7b0JBQUMsaUJBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFDLGtGQUVSO3FCQUNGLENBQUM7O21DQUFBO2dCQU1GLHNCQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCw4Q0FJQyxDQUFBIiwiZmlsZSI6Ii4uLy4uLy4uL3VudHJhbnNsYXRhYmxlcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV29yZCB7XG4gIGNvbnN0cnVjdG9yKCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgZGVmaW5pdGlvbjogc3RyaW5nLCAgcHVibGljIG9yaWdpbj86IHN0cmluZywgcHVibGljIGxhbmd1YWdlPzogc3RyaW5nLCBwdWJsaWMgaW1hZ2U/OiBzdHJpbmcsIHB1YmxpYyBpbWFnZUNhcHRpb24/OiBzdHJpbmcsIHB1YmxpYyBpbWFnZVNvdXJjZT86IHN0cmluZywgcHVibGljIHNlbnRlbmNlPzogc3RyaW5nLCBwdWJsaWMgcGFydE9mU3BlZWNoPzogc3RyaW5nLCBwdWJsaWMgY29sb3I/OiBzdHJpbmcsIHB1YmxpYyBsaW5rPzogc3RyaW5nLCBwdWJsaWMgZm9udD86IHN0cmluZywgcHVibGljIHVzZXI/OiBzdHJpbmcgKSB7fVxufVxuIiwiaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5cbmV4cG9ydCBjbGFzcyBXb3JkU2VydmljZSB7XG4gIHdvcmRzOiBXb3JkW10gPSBbXTtcblxuICBhZGRXb3JkKHdvcmQ6IFdvcmQpIHtcbiAgICB0aGlzLndvcmRzLnB1c2god29yZCk7XG4gICAgY29uc29sZS5sb2codGhpcy53b3Jkcyk7XG4gIH1cblxuICBnZXRXb3JkcygpIHtcbiAgICByZXR1cm4gdGhpcy53b3JkcztcbiAgfVxuXG4gIGRlbGV0ZVdvcmQod29yZDogV29yZCkge1xuICAgIHRoaXMud29yZHMuc3BsaWNlKHRoaXMud29yZHMuaW5kZXhPZih3b3JkKSwgMSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5pbXBvcnQgeyBXb3JkU2VydmljZSB9IGZyb20gJy4vd29yZC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmQtaW5wdXQnLFxuICB0ZW1wbGF0ZTpgXG4gICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYudmFsdWUpXCIgI2Y9XCJuZ0Zvcm1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9J25hbWUnPk5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm5hbWVcIiAjbmFtZUlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdkZWZpbml0aW9uJz5EZWZpbml0aW9uPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImRlZmluaXRpb25cIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJkZWZpbml0aW9uXCIgI2RlZmluaXRpb25JbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nb3JpZ2luJz5PcmlnaW48L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwib3JpZ2luXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwib3JpZ2luXCIgI29yaWdpbklucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdsYW5ndWFnZSc+TGFuZ3VhZ2U8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwibGFuZ3VhZ2VcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJsYW5ndWFnZVwiICNsYW5ndWFnZUlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdzZW50ZW5jZSc+U2VudGVuY2U8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwic2VudGVuY2VcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJzZW50ZW5jZVwiICNzZW50ZW5jZUlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdwYXJ0T2ZTcGVlY2gnPlBhcnQgb2YgU3BlZWNoPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cInBhcnRPZlNwZWVjaFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhcnRPZlNwZWVjaFwiICNwYXJ0T2ZTcGVlY2hJbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nY29sb3InPkNhcmQgQ29sb3I8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiY29sb3JcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb2xvclwiICNjb2xvcklucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdsaW5rJz5MaW5rPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImxpbmtcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJsaW5rXCIgI2xpbmtJbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nZm9udCc+Rm9udDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJmb250XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZm9udFwiICNmb250SW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9J2ltYWdlVXJsJz5JbWFnZSBVUkw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiaW1hZ2VVcmxcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbWFnZVVybFwiICNpbWFnZVVybElucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdpbWFnZUNhcHRpb24nPkltYWdlIENhcHRpb248L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiaW1hZ2VDYXB0aW9uXCIgI2ltYWdlQ2FwdGlvbklucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdpbWFnZVNvdXJjZSc+SW1hZ2UgU291cmNlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImltYWdlU291cmNlXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiaW1hZ2VTb3VyY2VcIiAjaW1hZ2VTb3VyY2VJbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5DcmVhdGUgV29yZDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFdvcmRJbnB1dENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd29yZFNlcnZpY2U6IFdvcmRTZXJ2aWNlKSB7fVxuXG4gIG9uU3VibWl0KGZvcm06YW55KSB7XG4gICAgY29uc3Qgd29yZDogV29yZCA9IG5ldyBXb3JkKGZvcm0ubmFtZSwgZm9ybS5kZWZpbml0aW9uLCBmb3JtLm9yaWdpbiwgZm9ybS5sYW5ndWFnZSwgZm9ybS5zZW50ZW5jZSwgZm9ybS5wYXJ0T2ZTcGVlY2gsIGZvcm0uY29sb3IsIGZvcm0ubGluaywgZm9ybS5mb250LCBmb3JtLmltYWdlVXJsLCBmb3JtLmltYWdlQ2FwdGlvbiwgZm9ybS5pbWFnZVNvdXJjZSk7XG4gICAgdGhpcy5fd29yZFNlcnZpY2UuYWRkV29yZCh3b3JkKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3JkJztcbmltcG9ydCB7IFdvcmRTZXJ2aWNlIH0gZnJvbSAnLi93b3JkLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS13b3JkJyxcbiAgdGVtcGxhdGU6YFxuICAgIDxkaXYgY2xhc3M9XCJ3b3JkXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICB7eyB3b3JkLm5hbWUgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge3sgd29yZC5kZWZpbml0aW9uIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHt7IHdvcmQub3JpZ2luIH19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJkZWxldGUod29yZClcIj4gRGVsZXRlIDwvYnV0dG9uPlxuICAgICAgYFxufSlcbmV4cG9ydCBjbGFzcyBXb3JkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgd29yZDpXb3JkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dvcmRTZXJ2aWNlOiBXb3JkU2VydmljZSkge31cblxuICBkZWxldGUod29yZCkge1xuICAgIHRoaXMuX3dvcmRTZXJ2aWNlLmRlbGV0ZVdvcmQod29yZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3JkJztcbmltcG9ydCB7IFdvcmRDb21wb25lbnQgfSBmcm9tICcuL3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFdvcmRTZXJ2aWNlIH0gZnJvbSAnLi93b3JkLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktd29yZC1saXN0JyxcbiAgdGVtcGxhdGU6YFxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwXCI+XG4gICAgICA8bXktd29yZCAqbmdGb3I9XCIjd29yZCBvZiB3b3Jkc1wiIFt3b3JkXT1cIndvcmRcIj48L215LXdvcmQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtXb3JkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBXb3JkTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgX3dvcmRTZXJ2aWNlOiBXb3JkU2VydmljZSkge31cblxuICB3b3JkczogV29yZFtdO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMud29yZHMgPSB0aGlzLl93b3JkU2VydmljZS5nZXRXb3JkcygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5pbXBvcnQgeyBXb3JkSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3dvcmQtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFdvcmRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi93b3JkLWxpc3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktd29yZHMnLFxuICB0ZW1wbGF0ZTpgXG4gICAgPG15LXdvcmQtaW5wdXQ+PC9teS13b3JkLWlucHV0PlxuICAgIDxteS13b3JkLWxpc3Q+PC9teS13b3JkLWxpc3Q+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtXb3JkSW5wdXRDb21wb25lbnQsIFdvcmRMaXN0Q29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFdvcmRzQ29tcG9uZW50IHtcblxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXNpZ251cCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnZmlyc3ROYW1lJylcIiB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3ROYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImxhc3ROYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdsYXN0TmFtZScpXCIgdHlwZT1cInRleHRcIiBpZD1cImxhc3ROYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2VtYWlsJylcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ3Bhc3N3b3JkJylcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPlNpZ24gVXA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbXlGb3JtOiBDb250cm9sR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIpIHt9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5teUZvcm0udmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gJy4vc2lnbnVwLmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1hdXRoJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDE+QXV0aDwvaDE+XG4gICAgPG15LXNpZ251cD48L215LXNpZ251cD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW1NpZ251cENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB7XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aGVhZGVyIGNsYXNzPVwiXCI+XG4gICAgICA8bmF2IGNsYXNzPVwiXCI+XG4gICAgICAgIDx1bCBjbGFzcz1cIlwiPlxuICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ1dvcmRzJ11cIj5Ib21lPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnQXV0aCddXCI+QXV0aGVudGljYXRpb248L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICBgLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcblxufVxuIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZHNDb21wb25lbnQgfSBmcm9tICcuL3dvcmRzL3dvcmRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3Jkcy93b3JkJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxteS1oZWFkZXI+PC9teS1oZWFkZXI+XG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtXb3Jkc0NvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVMsIEhlYWRlckNvbXBvbmVudF1cblxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHtwYXRoOiAnLycsIG5hbWU6ICdXb3JkcycsIGNvbXBvbmVudDogV29yZHNDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gIHtwYXRoOiAnL2F1dGgnLCBuYW1lOiAnQXV0aCcsIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Db21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHB1YmxpYyB3b3JkczogV29yZFtdO1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMud29yZHMgPSBbXG4gICAgICBuZXcgV29yZChcIlBpc2FuIFphcHJhXCIsIFwiVGhlIHRpbWUgbmVlZGVkIHRvIGVhdCBhIGJhbmFuYVwiLCBcImltYWdlcy9waXNhbl96YXByYS5qcGdcIiksXG4gICAgICBuZXcgV29yZChcIlNjaGFkZW5mcmV1ZGVcIiwgXCJUaGUgc2F0aXNmYWN0aW9uIHdlIGZpbmQgaW4gYW5vdGhlciBwZXJzb27igJlzIGZhaWx1cmUgb3Igc3VmZmVyaW5nLlwiLCBcImltYWdlcy9zY2hhZGVuZnJldWRlLnBuZ1wiKSxcbiAgICAgIG5ldyBXb3JkKFwiQWdlLW90b3JpXCIsIFwiVGhlIGZlZWxpbmcgb2YgbG9va2luZyB3b3JzZSBhZnRlciBhIGhhaXJjdXQuXCIsIFwiaW1hZ2VzL2FnZV9vdG9yaS5qcGdcIilcbiAgICBdO1xuICB9XG59XG4iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXb3JkU2VydmljZX0gZnJvbSAnLi93b3Jkcy93b3JkLnNlcnZpY2UnO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtXb3JkU2VydmljZSwgUk9VVEVSX1BST1ZJREVSUywgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSldKTtcbiIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWxvZ291dCcsXG4gIHRlbXBsYXRlOmBcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIihjbGljayk9XCJvbkxvZ291dCgpXCI+TG9nb3V0PC9idXR0b24+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dvdXRDb21wb25lbnQge1xuICBvbkxvZ291dCgpIHtcblxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
