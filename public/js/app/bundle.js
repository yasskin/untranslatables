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
                    this.word = null;
                }
                WordInputComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    if (this.word) {
                        // Edit
                        this.word.name = form.name;
                        this.word.definition = form.definition;
                        this.word.origin = form.origin;
                        this.word.language = form.language;
                        this.word.sentence = form.sentence;
                        this.word.partOfSpeech = form.partOfSpeech;
                        this.word.color = form.color;
                        this.word.link = form.link;
                        this.word.font = form.font;
                        this.word.imageUrl = form.imageUrl;
                        this.word.imageCaption = form.imageCaption;
                        this.word.imageSource = form.imageSource;
                        this._wordService.updateWord(this.word)
                            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
                        this.word = null;
                    }
                    else {
                        var word = new word_1.Word(form.name, form.definition, form.origin, form.language, form.sentence, form.partOfSpeech, form.color, form.link, form.font, form.imageUrl, form.imageCaption, form.imageSource);
                        this._wordService.addWord(word)
                            .subscribe(function (data) {
                            console.log(data);
                            _this._wordService.words.push(data);
                        }, function (error) { return console.error(error); });
                    }
                };
                WordInputComponent.prototype.onCancel = function () {
                    this.word = null;
                };
                WordInputComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._wordService.wordUpdate.subscribe(function (word) {
                        _this.word = word;
                    });
                };
                WordInputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-word-input',
                        template: "\n  <div class=\"hide-form\">\n    <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for='name'>Name</label>\n        <input ngControl=\"name\" type=\"text\" class=\"form-control\" id=\"name\" #nameInput [ngModel]=\"word?.name\">\n      </div>\n      <div class=\"form-group\">\n        <label for='definition'>Definition</label>\n        <input ngControl=\"definition\" type=\"text\" class=\"form-control\" id=\"definition\" #definitionInput [ngModel]=\"word?.definition\" >\n      </div>\n      <div class=\"form-group\">\n        <label for='origin'>Origin</label>\n        <input ngControl=\"origin\" type=\"text\" class=\"form-control\" id=\"origin\" #originInput [ngModel]=\"word?.origin\">\n      </div>\n      <div class=\"form-group\">\n        <label for='language'>Language</label>\n        <input ngControl=\"language\" type=\"text\" class=\"form-control\" id=\"language\" #languageInput [ngModel]=\"word?.language\">\n      </div>\n      <div class=\"form-group\">\n        <label for='sentence'>Sentence</label>\n        <input ngControl=\"sentence\" type=\"text\" class=\"form-control\" id=\"sentence\" #sentenceInput [ngModel]=\"word?.sentence\">\n      </div>\n      <div class=\"form-group\">\n        <label for='partOfSpeech'>Part of Speech</label>\n        <input ngControl=\"partOfSpeech\" type=\"text\" class=\"form-control\" id=\"partOfSpeech\" #partOfSpeechInput [ngModel]=\"word?.partOfSpeech\">\n      </div>\n      <div class=\"form-group\">\n        <label for='color'>Card Color</label>\n        <input ngControl=\"color\" type=\"text\" class=\"form-control\" id=\"color\" #colorInput [ngModel]=\"word?.color\" >\n      </div>\n      <div class=\"form-group\">\n        <label for='link'>Link</label>\n        <input ngControl=\"link\" type=\"text\" class=\"form-control\" id=\"link\" #linkInput [ngModel]=\"word?.link\">\n      </div>\n      <div class=\"form-group\">\n        <label for='font'>Font</label>\n        <input ngControl=\"font\" type=\"text\" class=\"form-control\" id=\"font\" #fontInput [ngModel]=\"word?.font\">\n      </div>\n      <div class=\"form-group\">\n        <label for='imageUrl'>Image URL</label>\n        <input ngControl=\"imageUrl\" type=\"text\" class=\"form-control\" id=\"imageUrl\" #imageUrlInput [ngModel]=\"word?.imageUrl\">\n      </div>\n      <div class=\"form-group\">\n        <label for='imageCaption'>Image Caption</label>\n        <input ngControl=\"imageCaption\" type=\"text\" class=\"form-control\" id=\"imageCaption\" #imageCaptionInput [ngModel]=\"word?.imageCaption\">\n      </div>\n      <div class=\"form-group\">\n        <label for='imageSource'>Image Source</label>\n        <input ngControl=\"imageSource\" type=\"text\" class=\"form-control\" id=\"imageSource\" #imageSourceInput [ngModel]=\"word?.imageSource\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\"> {{ !word ? 'Send Word' : 'Save Word' }}</button>\n      <button class =\"btn btn-danger\" type=\"button\" (click)=\"onCancel()\" *ngIf=\"word\">Cancel</button>\n    </form>\n  </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [word_service_1.WordService])
                ], WordInputComponent);
                return WordInputComponent;
            }());
            exports_3("WordInputComponent", WordInputComponent);
        }
    }
});
System.register("words/word-list.component", ['angular2/core', './word.component', "words/word.service"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_2, word_component_1, word_service_2;
    var WordListComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
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
                    var _this = this;
                    this._wordService.getWords()
                        .subscribe(function (words) {
                        _this.words = words;
                        _this._wordService.words = words;
                    });
                };
                WordListComponent = __decorate([
                    core_2.Component({
                        selector: 'my-word-list',
                        template: "\n    <div class=\"wrap\">\n      <my-word *ngFor=\"#word of words\" [word]=\"word\"></my-word>\n    </div>\n  ",
                        directives: [word_component_1.WordComponent]
                    }), 
                    __metadata('design:paramtypes', [word_service_2.WordService])
                ], WordListComponent);
                return WordListComponent;
            }());
            exports_4("WordListComponent", WordListComponent);
        }
    }
});
System.register("words/words.component", ["angular2/core", "words/word-input.component", "words/word-list.component"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_3, word_input_component_1, word_list_component_1;
    var WordsComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
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
                    core_3.Component({
                        selector: 'my-words',
                        template: "\n    <my-word-input></my-word-input>\n    <my-word-list></my-word-list>\n  ",
                        directives: [word_input_component_1.WordInputComponent, word_list_component_1.WordListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WordsComponent);
                return WordsComponent;
            }());
            exports_5("WordsComponent", WordsComponent);
        }
    }
});
System.register("auth/signup.component", ['angular2/core', 'angular2/common'], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_4, common_1;
    var SignupComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
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
                        email: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                this.isEmail
                            ])],
                        password: ['', common_1.Validators.required]
                    });
                };
                SignupComponent.prototype.isEmail = function (control) {
                    if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
                        return { invalidMail: true };
                    }
                };
                SignupComponent = __decorate([
                    core_4.Component({
                        selector: 'my-signup',
                        template: "\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input [ngFormControl]=\"myForm.find('firstName')\" type=\"text\" id=\"firstName\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input [ngFormControl]=\"myForm.find('lastName')\" type=\"text\" id=\"lastName\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input [ngFormControl]=\"myForm.find('email')\" type=\"email\" id=\"email\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input [ngFormControl]=\"myForm.find('password')\" type=\"password\" id=\"password\" class=\"form-control\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Sign Up</button>\n    </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_6("SignupComponent", SignupComponent);
        }
    }
});
System.register("auth/signin.component", ['angular2/core', 'angular2/common'], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_5, common_2;
    var SigninComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (common_2_1) {
                common_2 = common_2_1;
            }],
        execute: function() {
            SigninComponent = (function () {
                function SigninComponent(_fb) {
                    this._fb = _fb;
                }
                SigninComponent.prototype.onSubmit = function () {
                    console.log(this.myForm.value);
                };
                SigninComponent.prototype.ngOnInit = function () {
                    this.myForm = this._fb.group({
                        email: ['', common_2.Validators.compose([
                                common_2.Validators.required,
                                this.isEmail
                            ])],
                        password: ['', common_2.Validators.required]
                    });
                };
                SigninComponent.prototype.isEmail = function (control) {
                    if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
                        return { invalidMail: true };
                    }
                };
                SigninComponent = __decorate([
                    core_5.Component({
                        selector: 'my-signin',
                        template: "\n  <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input [ngFormControl]=\"myForm.find('email')\" type=\"email\" id=\"email\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input [ngFormControl]=\"myForm.find('password')\" type=\"password\" id=\"password\" class=\"form-control\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Sign Up</button>\n  </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [common_2.FormBuilder])
                ], SigninComponent);
                return SigninComponent;
            }());
            exports_7("SigninComponent", SigninComponent);
        }
    }
});
System.register("auth/logout.component", ['angular2/core'], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_6;
    var LogoutComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            }],
        execute: function() {
            LogoutComponent = (function () {
                function LogoutComponent() {
                }
                LogoutComponent.prototype.onLogout = function () {
                };
                LogoutComponent = __decorate([
                    core_6.Component({
                        selector: 'my-logout',
                        template: "\n    <button class=\"btn btn-danger\"(click)=\"onLogout()\">Logout</button>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogoutComponent);
                return LogoutComponent;
            }());
            exports_8("LogoutComponent", LogoutComponent);
        }
    }
});
System.register("auth/authentication.component", ['angular2/core', "auth/signup.component", "auth/signin.component", "auth/logout.component", "angular2/router"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_7, signup_component_1, signin_component_1, logout_component_1, router_1;
    var AuthenticationComponent;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (signin_component_1_1) {
                signin_component_1 = signin_component_1_1;
            },
            function (logout_component_1_1) {
                logout_component_1 = logout_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AuthenticationComponent = (function () {
                function AuthenticationComponent() {
                }
                AuthenticationComponent = __decorate([
                    core_7.Component({
                        selector: 'my-auth',
                        template: "\n    <header>\n      <nav>\n        <ul class=\"nav nav-tabs\">\n          <li><a [routerLink]=\"['Signup']\">Signup</a></li>\n          <li><a [routerLink]=\"['Signin']\">Signin</a></li>\n          <li><a [routerLink]=\"['Logout']\">Logout</a></li>\n        </ul>\n      </nav>\n    </header>\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/signup', name: 'Signup', component: signup_component_1.SignupComponent, useAsDefault: true },
                        { path: '/signin', name: 'Signin', component: signin_component_1.SigninComponent },
                        { path: '/logout', name: 'Logout', component: logout_component_1.LogoutComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AuthenticationComponent);
                return AuthenticationComponent;
            }());
            exports_9("AuthenticationComponent", AuthenticationComponent);
        }
    }
});
System.register("header.component", ["angular2/core", "angular2/router"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_8, router_2;
    var HeaderComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_8.Component({
                        selector: 'my-header',
                        template: "\n    <header class=\"\">\n      <nav class=\"\">\n        <ul class=\"\">\n          <li><a [routerLink]=\"['Words']\">Home</a></li>\n          <li><a [routerLink]=\"['Auth']\">Authentication</a></li>\n        </ul>\n      </nav>\n    </header>\n  ",
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_10("HeaderComponent", HeaderComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "words/words.component", 'angular2/router', "auth/authentication.component", "header.component"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_9, words_component_1, router_3, authentication_component_1, header_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (words_component_1_1) {
                words_component_1 = words_component_1_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
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
                    // this.words = [
                    //   new Word("Pisan Zapra", "The time needed to eat a banana", "images/pisan_zapra.jpg"),
                    //   new Word("Schadenfreude", "The satisfaction we find in another person’s failure or suffering.", "images/schadenfreude.png"),
                    //   new Word("Age-otori", "The feeling of looking worse after a haircut.", "images/age_otori.jpg")
                    // ];
                }
                AppComponent = __decorate([
                    core_9.Component({
                        selector: 'my-app',
                        template: "\n        <my-header></my-header>\n        <router-outlet></router-outlet>\n    ",
                        directives: [words_component_1.WordsComponent, router_3.ROUTER_DIRECTIVES, header_component_1.HeaderComponent]
                    }),
                    router_3.RouteConfig([
                        { path: '/', name: 'Words', component: words_component_1.WordsComponent, useAsDefault: true },
                        { path: '/auth/...', name: 'Auth', component: authentication_component_1.AuthenticationComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_11("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component", "words/word.service", "angular2/router", "angular2/core", "angular2/http"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var browser_1, app_component_1, word_service_3, router_4, router_5, core_10, http_1;
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
            },
            function (router_4_1) {
                router_4 = router_4_1;
                router_5 = router_4_1;
            },
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [word_service_3.WordService, router_4.ROUTER_PROVIDERS, core_10.provide(router_5.LocationStrategy, { useClass: router_5.HashLocationStrategy }), http_1.HTTP_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRzL3dvcmQudHMiLCJ3b3Jkcy93b3JkLnNlcnZpY2UudHMiLCJ3b3Jkcy93b3JkLWlucHV0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmQtbGlzdC5jb21wb25lbnQudHMiLCJ3b3Jkcy93b3Jkcy5jb21wb25lbnQudHMiLCJhdXRoL3NpZ251cC5jb21wb25lbnQudHMiLCJhdXRoL3NpZ25pbi5jb21wb25lbnQudHMiLCJhdXRoL2xvZ291dC5jb21wb25lbnQudHMiLCJhdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC50cyIsImhlYWRlci5jb21wb25lbnQudHMiLCJhcHAuY29tcG9uZW50LnRzIiwiYm9vdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1lBQUE7Z0JBQ0UsY0FDUyxJQUFZLEVBQ1osVUFBa0IsRUFDbEIsS0FBYyxFQUNkLE1BQWUsRUFDZixRQUFpQixFQUNqQixRQUFpQixFQUNqQixZQUFxQixFQUNyQixLQUFjLEVBQ2QsSUFBYSxFQUNiLElBQWEsRUFDYixZQUFxQixFQUNyQixXQUFvQixFQUNwQixJQUFhO29CQVpiLFNBQUksR0FBSixJQUFJLENBQVE7b0JBQ1osZUFBVSxHQUFWLFVBQVUsQ0FBUTtvQkFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBUztvQkFDZCxXQUFNLEdBQU4sTUFBTSxDQUFTO29CQUNmLGFBQVEsR0FBUixRQUFRLENBQVM7b0JBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVM7b0JBQ2pCLGlCQUFZLEdBQVosWUFBWSxDQUFTO29CQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFTO29CQUNkLFNBQUksR0FBSixJQUFJLENBQVM7b0JBQ2IsU0FBSSxHQUFKLElBQUksQ0FBUztvQkFDYixpQkFBWSxHQUFaLFlBQVksQ0FBUztvQkFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQVM7b0JBQ3BCLFNBQUksR0FBSixJQUFJLENBQVM7Z0JBQUksQ0FBQztnQkFDN0IsV0FBQztZQUFELENBZkEsQUFlQyxJ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Ozs7Ozs7Ozs7O1lDcEJELG1CQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLDBCQUFXLEVBQUUseUJBQWdCLEVBQUUsZUFBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUFvQixFQUFDLENBQUMsRUFBRSxxQkFBYyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIuLi8uLi8uLi91bnRyYW5zbGF0YWJsZXMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFdvcmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyBkZWZpbml0aW9uOiBzdHJpbmcsXG4gICAgcHVibGljIGltYWdlPzogc3RyaW5nLCAgXG4gICAgcHVibGljIG9yaWdpbj86IHN0cmluZyxcbiAgICBwdWJsaWMgbGFuZ3VhZ2U/OiBzdHJpbmcsXG4gICAgcHVibGljIHNlbnRlbmNlPzogc3RyaW5nLFxuICAgIHB1YmxpYyBwYXJ0T2ZTcGVlY2g/OiBzdHJpbmcsXG4gICAgcHVibGljIGNvbG9yPzogc3RyaW5nLFxuICAgIHB1YmxpYyBsaW5rPzogc3RyaW5nLFxuICAgIHB1YmxpYyBmb250Pzogc3RyaW5nLFxuICAgIHB1YmxpYyBpbWFnZUNhcHRpb24/OiBzdHJpbmcsXG4gICAgcHVibGljIGltYWdlU291cmNlPzogc3RyaW5nLFxuICAgIHB1YmxpYyB1c2VyPzogc3RyaW5nICkge31cbn1cbiIsImltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmQnO1xuXG5leHBvcnQgY2xhc3MgV29yZFNlcnZpY2Uge1xuICB3b3JkczogV29yZFtdID0gW107XG5cbiAgYWRkV29yZCh3b3JkOiBXb3JkKSB7XG4gICAgdGhpcy53b3Jkcy5wdXNoKHdvcmQpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMud29yZHMpO1xuICB9XG5cbiAgZ2V0V29yZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMud29yZHM7XG4gIH1cblxuICBkZWxldGVXb3JkKHdvcmQ6IFdvcmQpIHtcbiAgICB0aGlzLndvcmRzLnNwbGljZSh0aGlzLndvcmRzLmluZGV4T2Yod29yZCksIDEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5pbXBvcnQgeyBXb3JkU2VydmljZSB9IGZyb20gJy4vd29yZC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmQtaW5wdXQnLFxuICB0ZW1wbGF0ZTpgXG4gIDxkaXYgY2xhc3M9XCJoaWRlLWZvcm1cIj5cbiAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZi52YWx1ZSlcIiAjZj1cIm5nRm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nbmFtZSc+TmFtZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibmFtZVwiICNuYW1lSW5wdXQgW25nTW9kZWxdPVwid29yZD8ubmFtZVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdkZWZpbml0aW9uJz5EZWZpbml0aW9uPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImRlZmluaXRpb25cIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJkZWZpbml0aW9uXCIgI2RlZmluaXRpb25JbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5kZWZpbml0aW9uXCIgPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdvcmlnaW4nPk9yaWdpbjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJvcmlnaW5cIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJvcmlnaW5cIiAjb3JpZ2luSW5wdXQgW25nTW9kZWxdPVwid29yZD8ub3JpZ2luXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9J2xhbmd1YWdlJz5MYW5ndWFnZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJsYW5ndWFnZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImxhbmd1YWdlXCIgI2xhbmd1YWdlSW5wdXQgW25nTW9kZWxdPVwid29yZD8ubGFuZ3VhZ2VcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nc2VudGVuY2UnPlNlbnRlbmNlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cInNlbnRlbmNlXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwic2VudGVuY2VcIiAjc2VudGVuY2VJbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5zZW50ZW5jZVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdwYXJ0T2ZTcGVlY2gnPlBhcnQgb2YgU3BlZWNoPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cInBhcnRPZlNwZWVjaFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhcnRPZlNwZWVjaFwiICNwYXJ0T2ZTcGVlY2hJbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5wYXJ0T2ZTcGVlY2hcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nY29sb3InPkNhcmQgQ29sb3I8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiY29sb3JcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb2xvclwiICNjb2xvcklucHV0IFtuZ01vZGVsXT1cIndvcmQ/LmNvbG9yXCIgPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdsaW5rJz5MaW5rPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImxpbmtcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJsaW5rXCIgI2xpbmtJbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5saW5rXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9J2ZvbnQnPkZvbnQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiZm9udFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImZvbnRcIiAjZm9udElucHV0IFtuZ01vZGVsXT1cIndvcmQ/LmZvbnRcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0naW1hZ2VVcmwnPkltYWdlIFVSTDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJpbWFnZVVybFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImltYWdlVXJsXCIgI2ltYWdlVXJsSW5wdXQgW25nTW9kZWxdPVwid29yZD8uaW1hZ2VVcmxcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0naW1hZ2VDYXB0aW9uJz5JbWFnZSBDYXB0aW9uPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImltYWdlQ2FwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImltYWdlQ2FwdGlvblwiICNpbWFnZUNhcHRpb25JbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5pbWFnZUNhcHRpb25cIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0naW1hZ2VTb3VyY2UnPkltYWdlIFNvdXJjZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJpbWFnZVNvdXJjZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImltYWdlU291cmNlXCIgI2ltYWdlU291cmNlSW5wdXQgW25nTW9kZWxdPVwid29yZD8uaW1hZ2VTb3VyY2VcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj4ge3sgIXdvcmQgPyAnU2VuZCBXb3JkJyA6ICdTYXZlIFdvcmQnIH19PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzID1cImJ0biBidG4tZGFuZ2VyXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbkNhbmNlbCgpXCIgKm5nSWY9XCJ3b3JkXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFdvcmRJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHdvcmQ6IFdvcmQgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dvcmRTZXJ2aWNlOiBXb3JkU2VydmljZSkge31cblxuICBvblN1Ym1pdChmb3JtOmFueSkge1xuICAgIGlmICh0aGlzLndvcmQpIHtcbiAgICAgIC8vIEVkaXRcbiAgICAgIHRoaXMud29yZC5uYW1lID0gZm9ybS5uYW1lO1xuICAgICAgdGhpcy53b3JkLmRlZmluaXRpb24gPSBmb3JtLmRlZmluaXRpb247XG4gICAgICB0aGlzLndvcmQub3JpZ2luID0gZm9ybS5vcmlnaW47XG4gICAgICB0aGlzLndvcmQubGFuZ3VhZ2UgPSBmb3JtLmxhbmd1YWdlO1xuICAgICAgdGhpcy53b3JkLnNlbnRlbmNlID0gZm9ybS5zZW50ZW5jZTtcbiAgICAgIHRoaXMud29yZC5wYXJ0T2ZTcGVlY2ggPSBmb3JtLnBhcnRPZlNwZWVjaDtcbiAgICAgIHRoaXMud29yZC5jb2xvciA9IGZvcm0uY29sb3I7XG4gICAgICB0aGlzLndvcmQubGluayA9IGZvcm0ubGluaztcbiAgICAgIHRoaXMud29yZC5mb250ID0gZm9ybS5mb250O1xuICAgICAgdGhpcy53b3JkLmltYWdlVXJsID0gZm9ybS5pbWFnZVVybDtcbiAgICAgIHRoaXMud29yZC5pbWFnZUNhcHRpb24gPSBmb3JtLmltYWdlQ2FwdGlvbjtcbiAgICAgIHRoaXMud29yZC5pbWFnZVNvdXJjZSA9IGZvcm0uaW1hZ2VTb3VyY2U7XG4gICAgICB0aGlzLl93b3JkU2VydmljZS51cGRhdGVXb3JkKHRoaXMud29yZClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICk7XG4gICAgICB0aGlzLndvcmQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgY29uc3Qgd29yZDogV29yZCA9IG5ldyBXb3JkKGZvcm0ubmFtZSwgZm9ybS5kZWZpbml0aW9uLCBmb3JtLm9yaWdpbiwgZm9ybS5sYW5ndWFnZSwgZm9ybS5zZW50ZW5jZSwgZm9ybS5wYXJ0T2ZTcGVlY2gsIGZvcm0uY29sb3IsIGZvcm0ubGluaywgZm9ybS5mb250LCBmb3JtLmltYWdlVXJsLCBmb3JtLmltYWdlQ2FwdGlvbiwgZm9ybS5pbWFnZVNvdXJjZSk7XG4gICAgdGhpcy5fd29yZFNlcnZpY2UuYWRkV29yZCh3b3JkKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgdGhpcy5fd29yZFNlcnZpY2Uud29yZHMucHVzaChkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgb25DYW5jZWwoKSB7XG4gICAgdGhpcy53b3JkID0gbnVsbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3dvcmRTZXJ2aWNlLndvcmRVcGRhdGUuc3Vic2NyaWJlKFxuICAgICAgd29yZCA9PiB7XG4gICAgICAgIHRoaXMud29yZCA9IHdvcmQ7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5pbXBvcnQgeyBXb3JkQ29tcG9uZW50IH0gZnJvbSAnLi93b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3JkU2VydmljZSB9IGZyb20gJy4vd29yZC5zZXJ2aWNlJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmQtbGlzdCcsXG4gIHRlbXBsYXRlOmBcbiAgICA8ZGl2IGNsYXNzPVwid3JhcFwiPlxuICAgICAgPG15LXdvcmQgKm5nRm9yPVwiI3dvcmQgb2Ygd29yZHNcIiBbd29yZF09XCJ3b3JkXCI+PC9teS13b3JkPlxuICAgIDwvZGl2PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbV29yZENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgV29yZExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIF93b3JkU2VydmljZTogV29yZFNlcnZpY2UpIHt9XG5cbiAgd29yZHM6IFdvcmRbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl93b3JkU2VydmljZS5nZXRXb3JkcygpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICB3b3JkcyA9PiB7XG4gICAgICAgICAgdGhpcy53b3JkcyA9IHdvcmRzO1xuICAgICAgICAgIHRoaXMuX3dvcmRTZXJ2aWNlLndvcmRzID0gd29yZHM7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbmltcG9ydCB7IFdvcmRJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vd29yZC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV29yZExpc3RDb21wb25lbnQgfSBmcm9tICcuL3dvcmQtbGlzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS13b3JkcycsXG4gIHRlbXBsYXRlOmBcbiAgICA8bXktd29yZC1pbnB1dD48L215LXdvcmQtaW5wdXQ+XG4gICAgPG15LXdvcmQtbGlzdD48L215LXdvcmQtbGlzdD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW1dvcmRJbnB1dENvbXBvbmVudCwgV29yZExpc3RDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgV29yZHNDb21wb25lbnQge1xuXG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgVmFsaWRhdG9ycywgQ29udHJvbH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktc2lnbnVwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdmaXJzdE5hbWUnKVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaXJzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2xhc3ROYW1lJylcIiB0eXBlPVwidGV4dFwiIGlkPVwibGFzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnZW1haWwnKVwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgncGFzc3dvcmQnKVwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIFtkaXNhYmxlZF09XCIhbXlGb3JtLnZhbGlkXCI+U2lnbiBVcDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBteUZvcm06IENvbnRyb2xHcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjpGb3JtQnVpbGRlcikge31cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybS52YWx1ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgdGhpcy5pc0VtYWlsXG4gICAgICBdKV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtYWlsKGNvbnRyb2w6IENvbnRyb2wpOiB7WyBzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgaWYgKCFjb250cm9sLnZhbHVlLm1hdGNoKFwiW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XCIpKSB7XG4gICAgICAgIHJldHVybiB7aW52YWxpZE1haWw6IHRydWV9O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnMsIENvbnRyb2x9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXNpZ25pbicsXG4gIHRlbXBsYXRlOmBcbiAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnZW1haWwnKVwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ3Bhc3N3b3JkJylcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIFtkaXNhYmxlZF09XCIhbXlGb3JtLnZhbGlkXCI+U2lnbiBVcDwvYnV0dG9uPlxuICA8L2Zvcm0+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbXlGb3JtOiBDb250cm9sR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIpIHt9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5teUZvcm0udmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICB0aGlzLmlzRW1haWxcbiAgICAgIF0pXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzRW1haWwoY29udHJvbDogQ29udHJvbCk6IHtbIHM6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICBpZiAoIWNvbnRyb2wudmFsdWUubWF0Y2goXCJbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cIikpIHtcbiAgICAgICAgcmV0dXJuIHtpbnZhbGlkTWFpbDogdHJ1ZX07XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1sb2dvdXQnLFxuICB0ZW1wbGF0ZTpgXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIoY2xpY2spPVwib25Mb2dvdXQoKVwiPkxvZ291dDwvYnV0dG9uPlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgTG9nb3V0Q29tcG9uZW50IHtcbiAgb25Mb2dvdXQoKSB7XG5cbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gJy4vc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQge1NpZ25pbkNvbXBvbmVudH0gZnJvbSAnLi9zaWduaW4uY29tcG9uZW50JztcbmltcG9ydCB7TG9nb3V0Q29tcG9uZW50fSBmcm9tICcuL2xvZ291dC5jb21wb25lbnQnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWF1dGgnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoZWFkZXI+XG4gICAgICA8bmF2PlxuICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIj5cbiAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydTaWdudXAnXVwiPlNpZ251cDwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ1NpZ25pbiddXCI+U2lnbmluPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnTG9nb3V0J11cIj5Mb2dvdXQ8L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHtwYXRoOiAnL3NpZ251cCcsIG5hbWU6ICdTaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcbiAge3BhdGg6ICcvc2lnbmluJywgbmFtZTogJ1NpZ25pbicsIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50fSxcbiAge3BhdGg6ICcvbG9nb3V0JywgbmFtZTogJ0xvZ291dCcsIGNvbXBvbmVudDogTG9nb3V0Q29tcG9uZW50fSxcbl0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db21wb25lbnQge1xuXG59XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhlYWRlciBjbGFzcz1cIlwiPlxuICAgICAgPG5hdiBjbGFzcz1cIlwiPlxuICAgICAgICA8dWwgY2xhc3M9XCJcIj5cbiAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydXb3JkcyddXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0F1dGgnXVwiPkF1dGhlbnRpY2F0aW9uPC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgYCxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZHNDb21wb25lbnQgfSBmcm9tICcuL3dvcmRzL3dvcmRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3Jkcy93b3JkJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxteS1oZWFkZXI+PC9teS1oZWFkZXI+XG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtXb3Jkc0NvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVMsIEhlYWRlckNvbXBvbmVudF1cblxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHtwYXRoOiAnLycsIG5hbWU6ICdXb3JkcycsIGNvbXBvbmVudDogV29yZHNDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gIHtwYXRoOiAnL2F1dGgvLi4uJywgbmFtZTogJ0F1dGgnLCBjb21wb25lbnQ6IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50fVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwdWJsaWMgd29yZHM6IFdvcmRbXTtcbiAgY29uc3RydWN0b3IoKXtcbiAgICAvLyB0aGlzLndvcmRzID0gW1xuICAgIC8vICAgbmV3IFdvcmQoXCJQaXNhbiBaYXByYVwiLCBcIlRoZSB0aW1lIG5lZWRlZCB0byBlYXQgYSBiYW5hbmFcIiwgXCJpbWFnZXMvcGlzYW5femFwcmEuanBnXCIpLFxuICAgIC8vICAgbmV3IFdvcmQoXCJTY2hhZGVuZnJldWRlXCIsIFwiVGhlIHNhdGlzZmFjdGlvbiB3ZSBmaW5kIGluIGFub3RoZXIgcGVyc29u4oCZcyBmYWlsdXJlIG9yIHN1ZmZlcmluZy5cIiwgXCJpbWFnZXMvc2NoYWRlbmZyZXVkZS5wbmdcIiksXG4gICAgLy8gICBuZXcgV29yZChcIkFnZS1vdG9yaVwiLCBcIlRoZSBmZWVsaW5nIG9mIGxvb2tpbmcgd29yc2UgYWZ0ZXIgYSBoYWlyY3V0LlwiLCBcImltYWdlcy9hZ2Vfb3RvcmkuanBnXCIpXG4gICAgLy8gXTtcbiAgfVxufVxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7V29yZFNlcnZpY2V9IGZyb20gJy4vd29yZHMvd29yZC5zZXJ2aWNlJztcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtwcm92aWRlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1dvcmRTZXJ2aWNlLCBST1VURVJfUFJPVklERVJTLCBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3l9KSwgSFRUUF9QUk9WSURFUlNdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
