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
                function Word(name, wordId, definition, image, origin, language, sentence, partOfSpeech, color, link, font, imageUrl, imageCaption, imageSource, user, userId) {
                    this.name = name;
                    this.wordId = wordId;
                    this.definition = definition;
                    this.image = image;
                    this.origin = origin;
                    this.language = language;
                    this.sentence = sentence;
                    this.partOfSpeech = partOfSpeech;
                    this.color = color;
                    this.link = link;
                    this.font = font;
                    this.imageUrl = imageUrl;
                    this.imageCaption = imageCaption;
                    this.imageSource = imageSource;
                    this.user = user;
                    this.userId = userId;
                }
                return Word;
            }());
            exports_1("Word", Word);
        }
    }
});
System.register("words/word.service", ["words/word", 'angular2/http', 'angular2/core', 'rxjs/Rx', 'rxjs/Observable'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var word_1, http_1, core_1, Observable_1;
    var WordService;
    return {
        setters:[
            function (word_1_1) {
                word_1 = word_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            WordService = (function () {
                function WordService(_http) {
                    this._http = _http;
                    this.words = [];
                    this.wordUpdate = new core_1.EventEmitter();
                }
                WordService.prototype.addWord = function (word) {
                    var body = JSON.stringify(word);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this._http.post('http://localhost:3000/word', body, { headers: headers })
                        .map(function (response) {
                        var data = response.json().obj;
                        var word = new word_1.Word(data.name, data._id, data.definition, data.origin, data.language, data.sentence, data.partOfSpeech, data.color, data.link, data.font, data.image, data.imageCaption, data.imageSource, 'Sky', null);
                        return word;
                    })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
                };
                WordService.prototype.getWords = function () {
                    return this._http.get('http://localhost:3000/word')
                        .map(function (response) {
                        var data = response.json().obj;
                        var objs = [];
                        for (var i = 0; i < data.length; i++) {
                            var word = new word_1.Word(data[i].name, data[i]._id, data[i].definition, data[i].origin, data[i].language, data[i].sentence, data[i].partOfSpeech, data[i].color, data[i].link, data[i].font, data[i].image, data[i].imageCaption, data[i].imageSource, 'Sky', null);
                            objs.push(word);
                        }
                        ;
                        return objs;
                    })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
                };
                WordService.prototype.editWord = function (word) {
                    this.wordUpdate.emit(word);
                };
                WordService.prototype.deleteWord = function (word) {
                    this.words.splice(this.words.indexOf(word), 1);
                };
                WordService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WordService);
                return WordService;
            }());
            exports_2("WordService", WordService);
        }
    }
});
System.register("words/word-input.component", ['angular2/core', "words/word", "words/word.service"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, word_2, word_service_1;
    var WordInputComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (word_2_1) {
                word_2 = word_2_1;
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
                    }
                    else {
                        var word = new word_2.Word(form.name, form.definition, form.origin, form.language, form.sentence, form.partOfSpeech, form.color, form.link, form.font, form.imageUrl, form.imageCaption, form.imageSource);
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
                    core_2.Component({
                        selector: 'my-word-input',
                        template: "\n  <div class=\"hide-form\">\n    <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for='name'>Name</label>\n        <input ngControl=\"name\" type=\"text\" class=\"form-control\" id=\"name\" #nameInput [ngModel]=\"word?.name\">\n      </div>\n      <div class=\"form-group\">\n        <label for='definition'>Definition</label>\n        <input ngControl=\"definition\" type=\"text\" class=\"form-control\" id=\"definition\" #definitionInput [ngModel]=\"word?.definition\" >\n      </div>\n      <div class=\"form-group\">\n        <label for='origin'>Origin</label>\n        <input ngControl=\"origin\" type=\"text\" class=\"form-control\" id=\"origin\" #originInput [ngModel]=\"word?.origin\">\n      </div>\n      <div class=\"form-group\">\n        <label for='language'>Language</label>\n        <input ngControl=\"language\" type=\"text\" class=\"form-control\" id=\"language\" #languageInput [ngModel]=\"word?.language\">\n      </div>\n      <div class=\"form-group\">\n        <label for='sentence'>Sentence</label>\n        <input ngControl=\"sentence\" type=\"text\" class=\"form-control\" id=\"sentence\" #sentenceInput [ngModel]=\"word?.sentence\">\n      </div>\n      <div class=\"form-group\">\n        <label for='partOfSpeech'>Part of Speech</label>\n        <input ngControl=\"partOfSpeech\" type=\"text\" class=\"form-control\" id=\"partOfSpeech\" #partOfSpeechInput [ngModel]=\"word?.partOfSpeech\">\n      </div>\n      <div class=\"form-group\">\n        <label for='color'>Card Color</label>\n        <input ngControl=\"color\" type=\"text\" class=\"form-control\" id=\"color\" #colorInput [ngModel]=\"word?.color\" >\n      </div>\n      <div class=\"form-group\">\n        <label for='link'>Link</label>\n        <input ngControl=\"link\" type=\"text\" class=\"form-control\" id=\"link\" #linkInput [ngModel]=\"word?.link\">\n      </div>\n      <div class=\"form-group\">\n        <label for='font'>Font</label>\n        <input ngControl=\"font\" type=\"text\" class=\"form-control\" id=\"font\" #fontInput [ngModel]=\"word?.font\">\n      </div>\n      <div class=\"form-group\">\n        <label for='imageUrl'>Image URL</label>\n        <input ngControl=\"imageUrl\" type=\"text\" class=\"form-control\" id=\"imageUrl\" #imageUrlInput [ngModel]=\"word?.imageUrl\">\n      </div>\n      <div class=\"form-group\">\n        <label for='imageCaption'>Image Caption</label>\n        <input ngControl=\"\" type=\"text\" class=\"form-control\" id=\"imageCaption\" #imageCaptionInput [ngModel]=\"word?.imageCaption\">\n      </div>\n      <div class=\"form-group\">\n        <label for='imageSource'>Image Source</label>\n        <input ngControl=\"imageSource\" type=\"text\" class=\"form-control\" id=\"imageSource\" #imageSourceInput [ngModel]=\"word?.imageSource\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\"> {{ !word ? 'Send Word' : 'Save Word' }}</button>\n      <button class =\"btn btn-danger\" type=\"button\" (click)=\"onCancel()\" *ngIf=\"word\">Cancel</button>\n    </form>\n  </div>\n    "
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
    var core_3, word_3, word_service_2;
    var WordComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (word_3_1) {
                word_3 = word_3_1;
            },
            function (word_service_2_1) {
                word_service_2 = word_service_2_1;
            }],
        execute: function() {
            WordComponent = (function () {
                function WordComponent(_wordService) {
                    this._wordService = _wordService;
                    this.editClicked = new core_3.EventEmitter();
                }
                WordComponent.prototype.onEdit = function () {
                    this._wordService.editWord(this.word);
                };
                WordComponent.prototype.onDelete = function () {
                    this._wordService.deleteWord(this.word);
                };
                __decorate([
                    core_3.Input(), 
                    __metadata('design:type', word_3.Word)
                ], WordComponent.prototype, "word", void 0);
                __decorate([
                    core_3.Output(), 
                    __metadata('design:type', Object)
                ], WordComponent.prototype, "editClicked", void 0);
                WordComponent = __decorate([
                    core_3.Component({
                        selector: 'my-word',
                        template: "\n      <div class=\"word\" [ngStyle]=\"{'background-image': 'url(' +  word.image + ')',\n      'background-repeat' : 'no-repeat',\n      'background-size' : 'cover',\n      'background-position' : 'center'}\">\n      <div class=\"center-header\">\n        <h2>{{ word.name }}</h2>\n      </div>\n      </div>\n      <div class=\"definition\">\n        <p>{{ word.definition }}</p>\n      </div>\n      <div class=\"config\">\n      <a (click)=\"onEdit()\"> Edit </a>\n      <a (click)=\"onDelete()\"> Delete </a>\n      </div>\n\n      "
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
    var core_4, word_component_1, word_service_3;
    var WordListComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
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
                    var _this = this;
                    this._wordService.getWords()
                        .subscribe(function (words) {
                        _this.words = words;
                        _this._wordService.words = words;
                    });
                };
                WordListComponent = __decorate([
                    core_4.Component({
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
    var core_5, word_input_component_1, word_list_component_1;
    var WordsComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
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
                    core_5.Component({
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
    var core_6, common_1;
    var SignupComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
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
                    core_6.Component({
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
System.register("auth/signin.component", ['angular2/core', 'angular2/common'], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_7, common_2;
    var SigninComponent;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
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
                    core_7.Component({
                        selector: 'my-signin',
                        template: "\n  <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input [ngFormControl]=\"myForm.find('email')\" type=\"email\" id=\"email\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input [ngFormControl]=\"myForm.find('password')\" type=\"password\" id=\"password\" class=\"form-control\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Sign Up</button>\n  </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [common_2.FormBuilder])
                ], SigninComponent);
                return SigninComponent;
            }());
            exports_8("SigninComponent", SigninComponent);
        }
    }
});
System.register("auth/logout.component", ['angular2/core'], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_8;
    var LogoutComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            }],
        execute: function() {
            LogoutComponent = (function () {
                function LogoutComponent() {
                }
                LogoutComponent.prototype.onLogout = function () {
                };
                LogoutComponent = __decorate([
                    core_8.Component({
                        selector: 'my-logout',
                        template: "\n    <button class=\"btn btn-danger\"(click)=\"onLogout()\">Logout</button>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogoutComponent);
                return LogoutComponent;
            }());
            exports_9("LogoutComponent", LogoutComponent);
        }
    }
});
System.register("auth/authentication.component", ['angular2/core', "auth/signup.component", "auth/signin.component", "auth/logout.component", "angular2/router"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_9, signup_component_1, signin_component_1, logout_component_1, router_1;
    var AuthenticationComponent;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
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
                    core_9.Component({
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
            exports_10("AuthenticationComponent", AuthenticationComponent);
        }
    }
});
System.register("header.component", ["angular2/core", "angular2/router"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_10, router_2;
    var HeaderComponent;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_10.Component({
                        selector: 'my-header',
                        template: "\n    <header class=\"\">\n      <nav class=\"\">\n        <ul class=\"\">\n          <li><a [routerLink]=\"['Words']\">Home</a></li>\n          <li><a [routerLink]=\"['Auth']\">Authentication</a></li>\n        </ul>\n      </nav>\n    </header>\n  ",
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_11("HeaderComponent", HeaderComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "words/words.component", "words/word", 'angular2/router', "auth/authentication.component", "header.component"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_11, words_component_1, word_4, router_3, authentication_component_1, header_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (words_component_1_1) {
                words_component_1 = words_component_1_1;
            },
            function (word_4_1) {
                word_4 = word_4_1;
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
                    this.words = [
                        new word_4.Word("Pisan Zapra", "The time needed to eat a banana", "images/pisan_zapra.jpg"),
                        new word_4.Word("Schadenfreude", "The satisfaction we find in another person’s failure or suffering.", "images/schadenfreude.png"),
                        new word_4.Word("Age-otori", "The feeling of looking worse after a haircut.", "images/age_otori.jpg")
                    ];
                }
                AppComponent = __decorate([
                    core_11.Component({
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
            exports_12("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component", "words/word.service", "angular2/router", "angular2/core", "angular2/http"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var browser_1, app_component_1, word_service_4, router_4, router_5, core_12, http_2;
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
            function (router_4_1) {
                router_4 = router_4_1;
                router_5 = router_4_1;
            },
            function (core_12_1) {
                core_12 = core_12_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [word_service_4.WordService, router_4.ROUTER_PROVIDERS, core_12.provide(router_5.LocationStrategy, { useClass: router_5.HashLocationStrategy }), http_2.HTTP_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRzL3dvcmQudHMiLCJ3b3Jkcy93b3JkLnNlcnZpY2UudHMiLCJ3b3Jkcy93b3JkLWlucHV0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmQuY29tcG9uZW50LnRzIiwid29yZHMvd29yZC1saXN0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmRzLmNvbXBvbmVudC50cyIsImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyIsImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyIsImF1dGgvbG9nb3V0LmNvbXBvbmVudC50cyIsImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIiwiaGVhZGVyLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFDRSxjQUNTLElBQVksRUFDWixNQUFjLEVBQ2QsVUFBa0IsRUFDbEIsS0FBYyxFQUNkLE1BQWUsRUFDZixRQUFpQixFQUNqQixRQUFpQixFQUNqQixZQUFxQixFQUNyQixLQUFjLEVBQ2QsSUFBYSxFQUNiLElBQWEsRUFDYixRQUFpQixFQUNqQixZQUFxQixFQUNyQixXQUFvQixFQUNwQixJQUFhLEVBQ2IsTUFBZTtvQkFmZixTQUFJLEdBQUosSUFBSSxDQUFRO29CQUNaLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBUTtvQkFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBUztvQkFDZCxXQUFNLEdBQU4sTUFBTSxDQUFTO29CQUNmLGFBQVEsR0FBUixRQUFRLENBQVM7b0JBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVM7b0JBQ2pCLGlCQUFZLEdBQVosWUFBWSxDQUFTO29CQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFTO29CQUNkLFNBQUksR0FBSixJQUFJLENBQVM7b0JBQ2IsU0FBSSxHQUFKLElBQUksQ0FBUztvQkFDYixhQUFRLEdBQVIsUUFBUSxDQUFTO29CQUNqQixpQkFB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QUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO3dCQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO3dCQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO3dCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO3dCQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUMzQyxDQUFDO29CQUFBLElBQUksQ0FBQyxDQUFDO3dCQUNQLElBQU0sSUFBSSxHQUFTLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJ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QUksV0FBSSxDQUFDLGFBQWEsRUFBRSxpQ0FBaUMsRUFBRSx3QkFBd0IsQ0FBQzt3QkFDcEYsSUFBSSxXQUFJLENBQUMsZUFBZSxFQUFFLG9FQUFvRSxFQUFFLDBCQUEwQixDQUFDO3dCQUMzSCxJQUFJLFdBQUksQ0FBQyxXQUFXLEVBQUUsK0NBQStDLEVBQUUsc0JBQXNCLENBQUM7cUJBQy9GLENBQUM7Z0JBQ0osQ0FBQztnQkFyQkg7b0JBQUMsaUJBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLGtGQUdUO3dCQUNELFVBQVUsRUFBRSxDQUFDLGdDQUFjLEVBQUUsMEJBQWlCLEVBQUUsa0NBQWUsQ0FBQztxQkFFbkUsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNYLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ3pFLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxrREFBdUIsRUFBQztxQkFDdEUsQ0FBQzs7Z0NBQUE7Z0JBVUYsbUJBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTtZQVRELHdDQVNDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ3BCRCxtQkFBUyxDQUFDLDRCQUFZLEVBQUUsQ0FBQywwQkFBVyxFQUFFLHlCQUFnQixFQUFFLGVBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDLEVBQUUscUJBQWMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiLi4vLi4vLi4vdW50cmFuc2xhdGFibGVzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBXb3JkIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgd29yZElkOiBzdHJpbmcsXG4gICAgcHVibGljIGRlZmluaXRpb246IHN0cmluZyxcbiAgICBwdWJsaWMgaW1hZ2U/OiBzdHJpbmcsXG4gICAgcHVibGljIG9yaWdpbj86IHN0cmluZyxcbiAgICBwdWJsaWMgbGFuZ3VhZ2U/OiBzdHJpbmcsXG4gICAgcHVibGljIHNlbnRlbmNlPzogc3RyaW5nLFxuICAgIHB1YmxpYyBwYXJ0T2ZTcGVlY2g/OiBzdHJpbmcsXG4gICAgcHVibGljIGNvbG9yPzogc3RyaW5nLFxuICAgIHB1YmxpYyBsaW5rPzogc3RyaW5nLFxuICAgIHB1YmxpYyBmb250Pzogc3RyaW5nLFxuICAgIHB1YmxpYyBpbWFnZVVybD86IHN0cmluZyxcbiAgICBwdWJsaWMgaW1hZ2VDYXB0aW9uPzogc3RyaW5nLFxuICAgIHB1YmxpYyBpbWFnZVNvdXJjZT86IHN0cmluZyxcbiAgICBwdWJsaWMgdXNlcj86IHN0cmluZyxcbiAgICBwdWJsaWMgdXNlcklkPzogc3RyaW5nICkge31cbn1cbiIsImltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmQnO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV29yZFNlcnZpY2Uge1xuICB3b3JkczogV29yZFtdID0gW107XG4gIHdvcmRVcGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPFdvcmQ+KCk7XG5cbiAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG5cbiAgYWRkV29yZCh3b3JkOiBXb3JkKSB7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHdvcmQpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC93b3JkJywgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xuICAgICAgICBsZXQgd29yZCA9IG5ldyBXb3JkKGRhdGEubmFtZSwgZGF0YS5faWQsIGRhdGEuZGVmaW5pdGlvbiwgZGF0YS5vcmlnaW4sIGRhdGEubGFuZ3VhZ2UsIGRhdGEuc2VudGVuY2UsIGRhdGEucGFydE9mU3BlZWNoLCBkYXRhLmNvbG9yLCBkYXRhLmxpbmssIGRhdGEuZm9udCwgZGF0YS5pbWFnZSwgZGF0YS5pbWFnZUNhcHRpb24sIGRhdGEuaW1hZ2VTb3VyY2UsJ1NreScsIG51bGwpO1xuICAgICAgICByZXR1cm4gd29yZDtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgfVxuXG4gIGdldFdvcmRzKCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3dvcmQnKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xuICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9MDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgd29yZCA9IG5ldyBXb3JkKGRhdGFbaV0ubmFtZSwgZGF0YVtpXS5faWQsIGRhdGFbaV0uZGVmaW5pdGlvbiwgZGF0YVtpXS5vcmlnaW4sIGRhdGFbaV0ubGFuZ3VhZ2UsIGRhdGFbaV0uc2VudGVuY2UsIGRhdGFbaV0ucGFydE9mU3BlZWNoLCBkYXRhW2ldLmNvbG9yLCBkYXRhW2ldLmxpbmssIGRhdGFbaV0uZm9udCwgZGF0YVtpXS5pbWFnZSwgZGF0YVtpXS5pbWFnZUNhcHRpb24sIGRhdGFbaV0uaW1hZ2VTb3VyY2UsJ1NreScsIG51bGwpO1xuICAgICAgICAgIG9ianMucHVzaCh3b3JkKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG9ianM7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG4gIH1cblxuICBlZGl0V29yZCh3b3JkOiBXb3JkKSB7XG4gICAgdGhpcy53b3JkVXBkYXRlLmVtaXQod29yZCk7XG4gIH1cblxuICBkZWxldGVXb3JkKHdvcmQ6IFdvcmQpIHtcbiAgICB0aGlzLndvcmRzLnNwbGljZSh0aGlzLndvcmRzLmluZGV4T2Yod29yZCksIDEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5pbXBvcnQgeyBXb3JkU2VydmljZSB9IGZyb20gJy4vd29yZC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmQtaW5wdXQnLFxuICB0ZW1wbGF0ZTpgXG4gIDxkaXYgY2xhc3M9XCJoaWRlLWZvcm1cIj5cbiAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZi52YWx1ZSlcIiAjZj1cIm5nRm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nbmFtZSc+TmFtZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibmFtZVwiICNuYW1lSW5wdXQgW25nTW9kZWxdPVwid29yZD8ubmFtZVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdkZWZpbml0aW9uJz5EZWZpbml0aW9uPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImRlZmluaXRpb25cIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJkZWZpbml0aW9uXCIgI2RlZmluaXRpb25JbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5kZWZpbml0aW9uXCIgPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdvcmlnaW4nPk9yaWdpbjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJvcmlnaW5cIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJvcmlnaW5cIiAjb3JpZ2luSW5wdXQgW25nTW9kZWxdPVwid29yZD8ub3JpZ2luXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9J2xhbmd1YWdlJz5MYW5ndWFnZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJsYW5ndWFnZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImxhbmd1YWdlXCIgI2xhbmd1YWdlSW5wdXQgW25nTW9kZWxdPVwid29yZD8ubGFuZ3VhZ2VcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nc2VudGVuY2UnPlNlbnRlbmNlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cInNlbnRlbmNlXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwic2VudGVuY2VcIiAjc2VudGVuY2VJbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5zZW50ZW5jZVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdwYXJ0T2ZTcGVlY2gnPlBhcnQgb2YgU3BlZWNoPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cInBhcnRPZlNwZWVjaFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhcnRPZlNwZWVjaFwiICNwYXJ0T2ZTcGVlY2hJbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5wYXJ0T2ZTcGVlY2hcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nY29sb3InPkNhcmQgQ29sb3I8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiY29sb3JcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb2xvclwiICNjb2xvcklucHV0IFtuZ01vZGVsXT1cIndvcmQ/LmNvbG9yXCIgPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdsaW5rJz5MaW5rPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImxpbmtcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJsaW5rXCIgI2xpbmtJbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5saW5rXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9J2ZvbnQnPkZvbnQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiZm9udFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImZvbnRcIiAjZm9udElucHV0IFtuZ01vZGVsXT1cIndvcmQ/LmZvbnRcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0naW1hZ2VVcmwnPkltYWdlIFVSTDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJpbWFnZVVybFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImltYWdlVXJsXCIgI2ltYWdlVXJsSW5wdXQgW25nTW9kZWxdPVwid29yZD8uaW1hZ2VVcmxcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0naW1hZ2VDYXB0aW9uJz5JbWFnZSBDYXB0aW9uPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cIlwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImltYWdlQ2FwdGlvblwiICNpbWFnZUNhcHRpb25JbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5pbWFnZUNhcHRpb25cIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0naW1hZ2VTb3VyY2UnPkltYWdlIFNvdXJjZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJpbWFnZVNvdXJjZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImltYWdlU291cmNlXCIgI2ltYWdlU291cmNlSW5wdXQgW25nTW9kZWxdPVwid29yZD8uaW1hZ2VTb3VyY2VcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj4ge3sgIXdvcmQgPyAnU2VuZCBXb3JkJyA6ICdTYXZlIFdvcmQnIH19PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzID1cImJ0biBidG4tZGFuZ2VyXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbkNhbmNlbCgpXCIgKm5nSWY9XCJ3b3JkXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFdvcmRJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHdvcmQ6IFdvcmQgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dvcmRTZXJ2aWNlOiBXb3JkU2VydmljZSkge31cblxuICBvblN1Ym1pdChmb3JtOmFueSkge1xuICAgIGlmICh0aGlzLndvcmQpIHtcbiAgICAgIC8vIEVkaXRcbiAgICAgIHRoaXMud29yZC5uYW1lID0gZm9ybS5uYW1lO1xuICAgICAgdGhpcy53b3JkLmRlZmluaXRpb24gPSBmb3JtLmRlZmluaXRpb247XG4gICAgICB0aGlzLndvcmQub3JpZ2luID0gZm9ybS5vcmlnaW47XG4gICAgICB0aGlzLndvcmQubGFuZ3VhZ2UgPSBmb3JtLmxhbmd1YWdlO1xuICAgICAgdGhpcy53b3JkLnNlbnRlbmNlID0gZm9ybS5zZW50ZW5jZTtcbiAgICAgIHRoaXMud29yZC5wYXJ0T2ZTcGVlY2ggPSBmb3JtLnBhcnRPZlNwZWVjaDtcbiAgICAgIHRoaXMud29yZC5jb2xvciA9IGZvcm0uY29sb3I7XG4gICAgICB0aGlzLndvcmQubGluayA9IGZvcm0ubGluaztcbiAgICAgIHRoaXMud29yZC5mb250ID0gZm9ybS5mb250O1xuICAgICAgdGhpcy53b3JkLmltYWdlVXJsID0gZm9ybS5pbWFnZVVybDtcbiAgICAgIHRoaXMud29yZC5pbWFnZUNhcHRpb24gPSBmb3JtLmltYWdlQ2FwdGlvbjtcbiAgICAgIHRoaXMud29yZC5pbWFnZVNvdXJjZSA9IGZvcm0uaW1hZ2VTb3VyY2U7XG4gICAgfWVsc2Uge1xuICAgIGNvbnN0IHdvcmQ6IFdvcmQgPSBuZXcgV29yZChmb3JtLm5hbWUsIGZvcm0uZGVmaW5pdGlvbiwgZm9ybS5vcmlnaW4sIGZvcm0ubGFuZ3VhZ2UsIGZvcm0uc2VudGVuY2UsIGZvcm0ucGFydE9mU3BlZWNoLCBmb3JtLmNvbG9yLCBmb3JtLmxpbmssIGZvcm0uZm9udCwgZm9ybS5pbWFnZVVybCwgZm9ybS5pbWFnZUNhcHRpb24sIGZvcm0uaW1hZ2VTb3VyY2UpO1xuICAgIHRoaXMuX3dvcmRTZXJ2aWNlLmFkZFdvcmQod29yZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIHRoaXMuX3dvcmRTZXJ2aWNlLndvcmRzLnB1c2goZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMud29yZCA9IG51bGw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl93b3JkU2VydmljZS53b3JkVXBkYXRlLnN1YnNjcmliZShcbiAgICAgIHdvcmQgPT4ge1xuICAgICAgICB0aGlzLndvcmQgPSB3b3JkO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmQnO1xuaW1wb3J0IHsgV29yZFNlcnZpY2UgfSBmcm9tICcuL3dvcmQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmQnLFxuICB0ZW1wbGF0ZTpgXG4gICAgICA8ZGl2IGNsYXNzPVwid29yZFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArICB3b3JkLmltYWdlICsgJyknLFxuICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JyA6ICduby1yZXBlYXQnLFxuICAgICAgJ2JhY2tncm91bmQtc2l6ZScgOiAnY292ZXInLFxuICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nIDogJ2NlbnRlcid9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyLWhlYWRlclwiPlxuICAgICAgICA8aDI+e3sgd29yZC5uYW1lIH19PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGVmaW5pdGlvblwiPlxuICAgICAgICA8cD57eyB3b3JkLmRlZmluaXRpb24gfX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb25maWdcIj5cbiAgICAgIDxhIChjbGljayk9XCJvbkVkaXQoKVwiPiBFZGl0IDwvYT5cbiAgICAgIDxhIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+IERlbGV0ZSA8L2E+XG4gICAgICA8L2Rpdj5cblxuICAgICAgYFxufSlcbmV4cG9ydCBjbGFzcyBXb3JkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgd29yZDpXb3JkO1xuICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93b3JkU2VydmljZTogV29yZFNlcnZpY2UpIHt9XG5cbiAgb25FZGl0KCkge1xuICAgIHRoaXMuX3dvcmRTZXJ2aWNlLmVkaXRXb3JkKHRoaXMud29yZCk7XG4gIH1cblxuICBvbkRlbGV0ZSgpIHtcbiAgICB0aGlzLl93b3JkU2VydmljZS5kZWxldGVXb3JkKHRoaXMud29yZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3JkJztcbmltcG9ydCB7IFdvcmRDb21wb25lbnQgfSBmcm9tICcuL3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFdvcmRTZXJ2aWNlIH0gZnJvbSAnLi93b3JkLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktd29yZC1saXN0JyxcbiAgdGVtcGxhdGU6YFxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwXCI+XG4gICAgICA8bXktd29yZCAqbmdGb3I9XCIjd29yZCBvZiB3b3Jkc1wiIFt3b3JkXT1cIndvcmRcIj48L215LXdvcmQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtXb3JkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBXb3JkTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgX3dvcmRTZXJ2aWNlOiBXb3JkU2VydmljZSkge31cblxuICB3b3JkczogV29yZFtdO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3dvcmRTZXJ2aWNlLmdldFdvcmRzKClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIHdvcmRzID0+IHtcbiAgICAgICAgICB0aGlzLndvcmRzID0gd29yZHM7XG4gICAgICAgICAgdGhpcy5fd29yZFNlcnZpY2Uud29yZHMgPSB3b3JkcztcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuaW1wb3J0IHsgV29yZElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi93b3JkLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3JkTGlzdENvbXBvbmVudCB9IGZyb20gJy4vd29yZC1saXN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmRzJyxcbiAgdGVtcGxhdGU6YFxuICAgIDxteS13b3JkLWlucHV0PjwvbXktd29yZC1pbnB1dD5cbiAgICA8bXktd29yZC1saXN0PjwvbXktd29yZC1saXN0PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbV29yZElucHV0Q29tcG9uZW50LCBXb3JkTGlzdENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBXb3Jkc0NvbXBvbmVudCB7XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzLCBDb250cm9sfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1zaWdudXAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2ZpcnN0TmFtZScpXCIgdHlwZT1cInRleHRcIiBpZD1cImZpcnN0TmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnbGFzdE5hbWUnKVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsYXN0TmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdlbWFpbCcpXCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdwYXNzd29yZCcpXCIgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIiFteUZvcm0udmFsaWRcIj5TaWduIFVwPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG15Rm9ybTogQ29udHJvbEdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOkZvcm1CdWlsZGVyKSB7fVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtLnZhbHVlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICB0aGlzLmlzRW1haWxcbiAgICAgIF0pXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzRW1haWwoY29udHJvbDogQ29udHJvbCk6IHtbIHM6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICBpZiAoIWNvbnRyb2wudmFsdWUubWF0Y2goXCJbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cIikpIHtcbiAgICAgICAgcmV0dXJuIHtpbnZhbGlkTWFpbDogdHJ1ZX07XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgVmFsaWRhdG9ycywgQ29udHJvbH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktc2lnbmluJyxcbiAgdGVtcGxhdGU6YFxuICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdlbWFpbCcpXCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgncGFzc3dvcmQnKVwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIiFteUZvcm0udmFsaWRcIj5TaWduIFVwPC9idXR0b24+XG4gIDwvZm9ybT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTaWduaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBteUZvcm06IENvbnRyb2xHcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjpGb3JtQnVpbGRlcikge31cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybS52YWx1ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgIHRoaXMuaXNFbWFpbFxuICAgICAgXSldLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFbWFpbChjb250cm9sOiBDb250cm9sKToge1sgczogc3RyaW5nXTogYm9vbGVhbn0ge1xuICAgIGlmICghY29udHJvbC52YWx1ZS5tYXRjaChcIlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1wiKSkge1xuICAgICAgICByZXR1cm4ge2ludmFsaWRNYWlsOiB0cnVlfTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWxvZ291dCcsXG4gIHRlbXBsYXRlOmBcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIihjbGljayk9XCJvbkxvZ291dCgpXCI+TG9nb3V0PC9idXR0b24+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dvdXRDb21wb25lbnQge1xuICBvbkxvZ291dCgpIHtcblxuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSAnLi9zaWdudXAuY29tcG9uZW50JztcbmltcG9ydCB7U2lnbmluQ29tcG9uZW50fSBmcm9tICcuL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHtMb2dvdXRDb21wb25lbnR9IGZyb20gJy4vbG9nb3V0LmNvbXBvbmVudCc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktYXV0aCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhlYWRlcj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiPlxuICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ1NpZ251cCddXCI+U2lnbnVwPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnU2lnbmluJ11cIj5TaWduaW48L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydMb2dvdXQnXVwiPkxvZ291dDwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAge3BhdGg6ICcvc2lnbnVwJywgbmFtZTogJ1NpZ251cCcsIGNvbXBvbmVudDogU2lnbnVwQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuICB7cGF0aDogJy9zaWduaW4nLCBuYW1lOiAnU2lnbmluJywgY29tcG9uZW50OiBTaWduaW5Db21wb25lbnR9LFxuICB7cGF0aDogJy9sb2dvdXQnLCBuYW1lOiAnTG9nb3V0JywgY29tcG9uZW50OiBMb2dvdXRDb21wb25lbnR9LFxuXSlcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB7XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aGVhZGVyIGNsYXNzPVwiXCI+XG4gICAgICA8bmF2IGNsYXNzPVwiXCI+XG4gICAgICAgIDx1bCBjbGFzcz1cIlwiPlxuICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ1dvcmRzJ11cIj5Ib21lPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnQXV0aCddXCI+QXV0aGVudGljYXRpb248L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICBgLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3Jkc0NvbXBvbmVudCB9IGZyb20gJy4vd29yZHMvd29yZHMuY29tcG9uZW50JztcbmltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmRzL3dvcmQnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG15LWhlYWRlcj48L215LWhlYWRlcj5cbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1dvcmRzQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFUywgSGVhZGVyQ29tcG9uZW50XVxuXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAge3BhdGg6ICcvJywgbmFtZTogJ1dvcmRzJywgY29tcG9uZW50OiBXb3Jkc0NvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcbiAge3BhdGg6ICcvYXV0aC8uLi4nLCBuYW1lOiAnQXV0aCcsIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Db21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHB1YmxpYyB3b3JkczogV29yZFtdO1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMud29yZHMgPSBbXG4gICAgICBuZXcgV29yZChcIlBpc2FuIFphcHJhXCIsIFwiVGhlIHRpbWUgbmVlZGVkIHRvIGVhdCBhIGJhbmFuYVwiLCBcImltYWdlcy9waXNhbl96YXByYS5qcGdcIiksXG4gICAgICBuZXcgV29yZChcIlNjaGFkZW5mcmV1ZGVcIiwgXCJUaGUgc2F0aXNmYWN0aW9uIHdlIGZpbmQgaW4gYW5vdGhlciBwZXJzb27igJlzIGZhaWx1cmUgb3Igc3VmZmVyaW5nLlwiLCBcImltYWdlcy9zY2hhZGVuZnJldWRlLnBuZ1wiKSxcbiAgICAgIG5ldyBXb3JkKFwiQWdlLW90b3JpXCIsIFwiVGhlIGZlZWxpbmcgb2YgbG9va2luZyB3b3JzZSBhZnRlciBhIGhhaXJjdXQuXCIsIFwiaW1hZ2VzL2FnZV9vdG9yaS5qcGdcIilcbiAgICBdO1xuICB9XG59XG4iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXb3JkU2VydmljZX0gZnJvbSAnLi93b3Jkcy93b3JkLnNlcnZpY2UnO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbV29yZFNlcnZpY2UsIFJPVVRFUl9QUk9WSURFUlMsIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX0pLCBIVFRQX1BST1ZJREVSU10pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
