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
                function Word(name, definition, origin, language, sentence, partOfSpeech, color, link, font, imageUrl, imageCaption, imageSource, wordId, user, userId) {
                    this.name = name;
                    this.definition = definition;
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
                    this.wordId = wordId;
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
                    return this._http.post('http://untranslatables.herokuapp.com/word', body, { headers: headers })
                        .map(function (response) {
                        var data = response.json().obj;
                        var word = new word_1.Word(data.name, data.definition, data.origin, data.language, data.sentence, data.partOfSpeech, data.color, data.link, data.font, data.imageUrl, data.imageCaption, data.imageSource, data._id);
                        return word;
                    })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
                };
                WordService.prototype.getWords = function () {
                    return this._http.get('http://untranslatables.herokuapp.com/word')
                        .map(function (response) {
                        var data = response.json().obj;
                        var objs = [];
                        for (var i = 0; i < data.length; i++) {
                            var word = new word_1.Word(data[i].name, data[i].definition, data[i].origin, data[i].language, data[i].sentence, data[i].partOfSpeech, data[i].color, data[i].link, data[i].font, data[i].imageUrl, data[i].imageCaption, data[i].imageSource, data[i]._id);
                            objs.push(word);
                        }
                        ;
                        return objs;
                    })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
                };
                WordService.prototype.updateWord = function (word) {
                    var body = JSON.stringify(word);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this._http.patch('http://untranslatables.herokuapp.com/word/' + word.wordId, body, { headers: headers })
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
                };
                WordService.prototype.editWord = function (word) {
                    this.wordUpdate.emit(word);
                };
                WordService.prototype.deleteWord = function (word) {
                    this.words.splice(this.words.indexOf(word), 1);
                    return this._http.delete('http://untranslatables.herokuapp.com/word/' + word.wordId)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
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
                        this._wordService.updateWord(this.word)
                            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
                        this.word = null;
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
                        template: "\n  <div class=\"hide-form container\">\n    <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for='name'>Name</label>\n        <input ngControl=\"name\" type=\"text\" class=\"form-control\" id=\"name\" #nameInput [ngModel]=\"word?.name\">\n      </div>\n      <div class=\"form-group\">\n        <label for='definition'>Definition</label>\n        <input ngControl=\"definition\" type=\"text\" class=\"form-control\" id=\"definition\" #definitionInput [ngModel]=\"word?.definition\" >\n      </div>\n      <div class=\"form-group\">\n        <label for='origin'>Origin</label>\n        <input ngControl=\"origin\" type=\"text\" class=\"form-control\" id=\"origin\" #originInput [ngModel]=\"word?.origin\">\n      </div>\n      <div class=\"form-group\">\n        <label for='language'>Language</label>\n        <input ngControl=\"language\" type=\"text\" class=\"form-control\" id=\"language\" #languageInput [ngModel]=\"word?.language\">\n      </div>\n      <div class=\"form-group\">\n        <label for='sentence'>Sentence</label>\n        <input ngControl=\"sentence\" type=\"text\" class=\"form-control\" id=\"sentence\" #sentenceInput [ngModel]=\"word?.sentence\">\n      </div>\n      <div class=\"form-group\">\n        <label for='partOfSpeech'>Part of Speech</label>\n        <input ngControl=\"partOfSpeech\" type=\"text\" class=\"form-control\" id=\"partOfSpeech\" #partOfSpeechInput [ngModel]=\"word?.partOfSpeech\">\n      </div>\n      <div class=\"form-group\">\n        <label for='color'>Card Color</label>\n        <input ngControl=\"color\" type=\"text\" class=\"form-control\" id=\"color\" #colorInput [ngModel]=\"word?.color\" >\n      </div>\n      <div class=\"form-group\">\n        <label for='link'>Link</label>\n        <input ngControl=\"link\" type=\"text\" class=\"form-control\" id=\"link\" #linkInput [ngModel]=\"word?.link\">\n      </div>\n      <div class=\"form-group\">\n        <label for='font'>Font</label>\n        <input ngControl=\"font\" type=\"text\" class=\"form-control\" id=\"font\" #fontInput [ngModel]=\"word?.font\">\n      </div>>\n      <div class=\"form-group\">\n        <label for='imageCaption'>Image Caption</label>\n        <input ngControl=\"imageCaption\" type=\"text\" class=\"form-control\" id=\"imageCaption\" #imageCaptionInput [ngModel]=\"word?.imageCaption\">\n      </div>\n      <div class=\"form-group\">\n        <label for='imageSource'>Image Source</label>\n        <input ngControl=\"imageSource\" type=\"text\" class=\"form-control\" id=\"imageSource\" #imageSourceInput [ngModel]=\"word?.imageSource\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\"> {{ !word ? 'Send Word' : 'Save Word' }}</button>\n      <button class =\"btn btn-danger\" type=\"button\" (click)=\"onCancel()\" *ngIf=\"word\">Cancel</button>\n    </form>\n  </div>\n    "
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
                    this._wordService.deleteWord(this.word)
                        .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
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
                        template: "\n      <div class=\"word\" [ngStyle]=\"{'background-image': 'url(' +  word.imageSource + ')',\n      'background-repeat' : 'no-repeat',\n      'background-size' : 'cover',\n      'background-position' : 'center'}\">\n      <div class=\"center-header\">\n        <h2>{{ word.name }}</h2>\n      </div>\n      <div class=\"definition\">\n      <p>{{ word.definition }} ({{word.language}})</p>\n      </div>\n      </div>\n      <div class=\"config\">\n      <a (click)=\"onEdit()\"> Edit </a>\n      <a (click)=\"onDelete()\"> Delete </a>\n      </div>\n      "
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
                        template: "\n    <header class=\"\">\n      <nav class=\"\">\n        <ul class=\"\">\n          <li><a [routerLink]=\"['Words']\">Home</a></li>\n          <li><a [routerLink]=\"['Auth']\">Authentication</a></li>\n          <li><a [routerLink]=\"['Admin']\">Admin</a></li>\n        </ul>\n      </nav>\n      <h1>Untranslatable Words</h1>\n    </header>\n  ",
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
System.register("app.component", ['angular2/core', "words/words.component", 'angular2/router', "auth/authentication.component", "header.component", "words/word-input.component"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_11, words_component_1, router_3, authentication_component_1, header_component_1, word_input_component_2;
    var AppComponent;
    return {
        setters:[
            function (core_11_1) {
                core_11 = core_11_1;
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
            },
            function (word_input_component_2_1) {
                word_input_component_2 = word_input_component_2_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_11.Component({
                        selector: 'my-app',
                        template: "\n\n        <my-header></my-header>\n        <router-outlet></router-outlet>\n    ",
                        directives: [words_component_1.WordsComponent, router_3.ROUTER_DIRECTIVES, header_component_1.HeaderComponent]
                    }),
                    router_3.RouteConfig([
                        { path: '/', name: 'Words', component: words_component_1.WordsComponent, useAsDefault: true },
                        { path: '/auth/...', name: 'Auth', component: authentication_component_1.AuthenticationComponent },
                        { path: '/admin', name: 'Admin', component: word_input_component_2.WordInputComponent }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRzL3dvcmQudHMiLCJ3b3Jkcy93b3JkLnNlcnZpY2UudHMiLCJ3b3Jkcy93b3JkLWlucHV0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmQuY29tcG9uZW50LnRzIiwid29yZHMvd29yZC1saXN0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmRzLmNvbXBvbmVudC50cyIsImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyIsImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyIsImF1dGgvbG9nb3V0LmNvbXBvbmVudC50cyIsImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIiwiaGVhZGVyLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFDRSxjQUNTLElBQVksRUFDWixVQUFrQixFQUNsQixNQUFlLEVBQ2YsUUFBaUIsRUFDakIsUUFBaUIsRUFDakIsWUFBcUIsRUFDckIsS0FBYyxFQUNkLElBQWEsRUFDYixJQUFhLEVBQ2IsUUFBaUIsRUFDakIsWUFBcUIsRUFDckIsV0FBb0IsRUFDcEIsTUFBZSxFQUNmLElBQWEsRUFDYixNQUFlO29CQWRmLFNBQUksR0FBSixJQUFJLENBQVE7b0JBQ1osZUFBVSxHQUFWLFVBQVUsQ0FBUTtvQkFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUztvQkFDZixhQUFRLEdBQVIsUUFBUSxDQUFTO29CQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFTO29CQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBUztvQkFDckIsVUFBSyxHQUFMLEtBQUssQ0FBUztvQkFDZCxTQUFJLEdBQUosSUFBSSxDQUFTO29CQUNiLFNBQUksR0FBSixJQUFJLENBQVM7b0JBQ2IsYUFBUSxHQUFSLFFBQVEsQ0FBUztvQkFDakIsaUJBQVksR0FBWixZQUFZLENBQVM7b0JBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO29CQUNwQixXQUFNLEdBQU4s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LDBCQUFpQixDQUFDO3FCQUNoQyxDQUFDOzttQ0FBQTtnQkFJRixzQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsOENBRUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDRUQ7Z0JBRUU7Z0JBQ0EsQ0FBQztnQkFsQkg7b0JBQUMsaUJBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLG9GQUlUO3dCQUNELFVBQVUsRUFBRSxDQUFDLGdDQUFjLEVBQUUsMEJBQWlCLEVBQUUsa0NBQWUsQ0FBQztxQkFFbkUsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNYLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ3pFLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxrREFBdUIsRUFBQzt3QkFDckUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFDO3FCQUMvRCxDQUFDOztnQ0FBQTtnQkFLRixtQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsd0NBSUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDakJELG1CQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLDBCQUFXLEVBQUUseUJBQWdCLEVBQUUsZUFBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUFvQixFQUFDLENBQUMsRUFBRSxxQkFBYyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIuLi8uLi8uLi91bnRyYW5zbGF0YWJsZXMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFdvcmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyBkZWZpbml0aW9uOiBzdHJpbmcsXG4gICAgcHVibGljIG9yaWdpbj86IHN0cmluZyxcbiAgICBwdWJsaWMgbGFuZ3VhZ2U/OiBzdHJpbmcsXG4gICAgcHVibGljIHNlbnRlbmNlPzogc3RyaW5nLFxuICAgIHB1YmxpYyBwYXJ0T2ZTcGVlY2g/OiBzdHJpbmcsXG4gICAgcHVibGljIGNvbG9yPzogc3RyaW5nLFxuICAgIHB1YmxpYyBsaW5rPzogc3RyaW5nLFxuICAgIHB1YmxpYyBmb250Pzogc3RyaW5nLFxuICAgIHB1YmxpYyBpbWFnZVVybD86IHN0cmluZyxcbiAgICBwdWJsaWMgaW1hZ2VDYXB0aW9uPzogc3RyaW5nLFxuICAgIHB1YmxpYyBpbWFnZVNvdXJjZT86IHN0cmluZyxcbiAgICBwdWJsaWMgd29yZElkPzogc3RyaW5nLFxuICAgIHB1YmxpYyB1c2VyPzogc3RyaW5nLFxuICAgIHB1YmxpYyB1c2VySWQ/OiBzdHJpbmcgKSB7fVxufVxuIiwiaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXb3JkU2VydmljZSB7XG4gIHdvcmRzOiBXb3JkW10gPSBbXTtcbiAgd29yZFVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8V29yZD4oKTtcblxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cblxuICBhZGRXb3JkKHdvcmQ6IFdvcmQpIHtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkod29yZCk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL3VudHJhbnNsYXRhYmxlcy5oZXJva3VhcHAuY29tL3dvcmQnLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XG4gICAgICAgIGxldCB3b3JkID0gbmV3IFdvcmQoZGF0YS5uYW1lLCBkYXRhLmRlZmluaXRpb24sIGRhdGEub3JpZ2luLCBkYXRhLmxhbmd1YWdlLCBkYXRhLnNlbnRlbmNlLCBkYXRhLnBhcnRPZlNwZWVjaCwgZGF0YS5jb2xvciwgZGF0YS5saW5rLCBkYXRhLmZvbnQsIGRhdGEuaW1hZ2VVcmwsIGRhdGEuaW1hZ2VDYXB0aW9uLCBkYXRhLmltYWdlU291cmNlLCBkYXRhLl9pZCk7XG4gICAgICAgIHJldHVybiB3b3JkO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICB9XG5cbiAgZ2V0V29yZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vdW50cmFuc2xhdGFibGVzLmhlcm9rdWFwcC5jb20vd29yZCcpXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XG4gICAgICAgIGxldCBvYmpzOiBhbnlbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0wOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCB3b3JkID0gbmV3IFdvcmQoZGF0YVtpXS5uYW1lLCBkYXRhW2ldLmRlZmluaXRpb24sIGRhdGFbaV0ub3JpZ2luLCBkYXRhW2ldLmxhbmd1YWdlLCBkYXRhW2ldLnNlbnRlbmNlLCBkYXRhW2ldLnBhcnRPZlNwZWVjaCwgZGF0YVtpXS5jb2xvciwgZGF0YVtpXS5saW5rLCBkYXRhW2ldLmZvbnQsIGRhdGFbaV0uaW1hZ2VVcmwsIGRhdGFbaV0uaW1hZ2VDYXB0aW9uLCBkYXRhW2ldLmltYWdlU291cmNlLCBkYXRhW2ldLl9pZCk7XG4gICAgICAgICAgb2Jqcy5wdXNoKHdvcmQpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb2JqcztcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgfVxuXG4gIHVwZGF0ZVdvcmQod29yZDogV29yZCkge1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh3b3JkKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wYXRjaCgnaHR0cDovL3VudHJhbnNsYXRhYmxlcy5oZXJva3VhcHAuY29tL3dvcmQvJyArIHdvcmQud29yZElkLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICB9XG5cbiAgZWRpdFdvcmQod29yZDogV29yZCkge1xuICAgIHRoaXMud29yZFVwZGF0ZS5lbWl0KHdvcmQpO1xuICB9XG5cbiAgZGVsZXRlV29yZCh3b3JkOiBXb3JkKSB7XG4gICAgdGhpcy53b3Jkcy5zcGxpY2UodGhpcy53b3Jkcy5pbmRleE9mKHdvcmQpLCAxKTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoJ2h0dHA6Ly91bnRyYW5zbGF0YWJsZXMuaGVyb2t1YXBwLmNvbS93b3JkLycgKyB3b3JkLndvcmRJZClcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3JkJztcbmltcG9ydCB7IFdvcmRTZXJ2aWNlIH0gZnJvbSAnLi93b3JkLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktd29yZC1pbnB1dCcsXG4gIHRlbXBsYXRlOmBcbiAgPGRpdiBjbGFzcz1cImhpZGUtZm9ybSBjb250YWluZXJcIj5cbiAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZi52YWx1ZSlcIiAjZj1cIm5nRm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nbmFtZSc+TmFtZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibmFtZVwiICNuYW1lSW5wdXQgW25nTW9kZWxdPVwid29yZD8ubmFtZVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdkZWZpbml0aW9uJz5EZWZpbml0aW9uPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImRlZmluaXRpb25cIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJkZWZpbml0aW9uXCIgI2RlZmluaXRpb25JbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5kZWZpbml0aW9uXCIgPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdvcmlnaW4nPk9yaWdpbjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJvcmlnaW5cIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJvcmlnaW5cIiAjb3JpZ2luSW5wdXQgW25nTW9kZWxdPVwid29yZD8ub3JpZ2luXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9J2xhbmd1YWdlJz5MYW5ndWFnZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJsYW5ndWFnZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImxhbmd1YWdlXCIgI2xhbmd1YWdlSW5wdXQgW25nTW9kZWxdPVwid29yZD8ubGFuZ3VhZ2VcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nc2VudGVuY2UnPlNlbnRlbmNlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cInNlbnRlbmNlXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwic2VudGVuY2VcIiAjc2VudGVuY2VJbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5zZW50ZW5jZVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdwYXJ0T2ZTcGVlY2gnPlBhcnQgb2YgU3BlZWNoPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cInBhcnRPZlNwZWVjaFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhcnRPZlNwZWVjaFwiICNwYXJ0T2ZTcGVlY2hJbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5wYXJ0T2ZTcGVlY2hcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nY29sb3InPkNhcmQgQ29sb3I8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiY29sb3JcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb2xvclwiICNjb2xvcklucHV0IFtuZ01vZGVsXT1cIndvcmQ/LmNvbG9yXCIgPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdsaW5rJz5MaW5rPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImxpbmtcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJsaW5rXCIgI2xpbmtJbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5saW5rXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9J2ZvbnQnPkZvbnQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiZm9udFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImZvbnRcIiAjZm9udElucHV0IFtuZ01vZGVsXT1cIndvcmQ/LmZvbnRcIj5cbiAgICAgIDwvZGl2Pj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9J2ltYWdlQ2FwdGlvbic+SW1hZ2UgQ2FwdGlvbjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJpbWFnZUNhcHRpb25cIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbWFnZUNhcHRpb25cIiAjaW1hZ2VDYXB0aW9uSW5wdXQgW25nTW9kZWxdPVwid29yZD8uaW1hZ2VDYXB0aW9uXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9J2ltYWdlU291cmNlJz5JbWFnZSBTb3VyY2U8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiaW1hZ2VTb3VyY2VcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbWFnZVNvdXJjZVwiICNpbWFnZVNvdXJjZUlucHV0IFtuZ01vZGVsXT1cIndvcmQ/LmltYWdlU291cmNlXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+IHt7ICF3b3JkID8gJ1NlbmQgV29yZCcgOiAnU2F2ZSBXb3JkJyB9fTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcyA9XCJidG4gYnRuLWRhbmdlclwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25DYW5jZWwoKVwiICpuZ0lmPVwid29yZFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBXb3JkSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB3b3JkOiBXb3JkID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93b3JkU2VydmljZTogV29yZFNlcnZpY2UpIHt9XG5cbiAgb25TdWJtaXQoZm9ybTphbnkpIHtcbiAgICBpZiAodGhpcy53b3JkKSB7XG4gICAgICAvLyBFZGl0XG4gICAgICB0aGlzLndvcmQubmFtZSA9IGZvcm0ubmFtZTtcbiAgICAgIHRoaXMud29yZC5kZWZpbml0aW9uID0gZm9ybS5kZWZpbml0aW9uO1xuICAgICAgdGhpcy53b3JkLm9yaWdpbiA9IGZvcm0ub3JpZ2luO1xuICAgICAgdGhpcy53b3JkLmxhbmd1YWdlID0gZm9ybS5sYW5ndWFnZTtcbiAgICAgIHRoaXMud29yZC5zZW50ZW5jZSA9IGZvcm0uc2VudGVuY2U7XG4gICAgICB0aGlzLndvcmQucGFydE9mU3BlZWNoID0gZm9ybS5wYXJ0T2ZTcGVlY2g7XG4gICAgICB0aGlzLndvcmQuY29sb3IgPSBmb3JtLmNvbG9yO1xuICAgICAgdGhpcy53b3JkLmxpbmsgPSBmb3JtLmxpbms7XG4gICAgICB0aGlzLndvcmQuZm9udCA9IGZvcm0uZm9udDtcbiAgICAgIHRoaXMud29yZC5pbWFnZVVybCA9IGZvcm0uaW1hZ2VVcmw7XG4gICAgICB0aGlzLndvcmQuaW1hZ2VDYXB0aW9uID0gZm9ybS5pbWFnZUNhcHRpb247XG4gICAgICB0aGlzLndvcmQuaW1hZ2VTb3VyY2UgPSBmb3JtLmltYWdlU291cmNlO1xuICAgICAgdGhpcy5fd29yZFNlcnZpY2UudXBkYXRlV29yZCh0aGlzLndvcmQpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICApO1xuICAgICAgdGhpcy53b3JkID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgIGNvbnN0IHdvcmQ6IFdvcmQgPSBuZXcgV29yZChmb3JtLm5hbWUsIGZvcm0uZGVmaW5pdGlvbiwgZm9ybS5vcmlnaW4sIGZvcm0ubGFuZ3VhZ2UsIGZvcm0uc2VudGVuY2UsIGZvcm0ucGFydE9mU3BlZWNoLCBmb3JtLmNvbG9yLCBmb3JtLmxpbmssIGZvcm0uZm9udCwgZm9ybS5pbWFnZVVybCwgZm9ybS5pbWFnZUNhcHRpb24sIGZvcm0uaW1hZ2VTb3VyY2UpO1xuICAgIHRoaXMuX3dvcmRTZXJ2aWNlLmFkZFdvcmQod29yZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIHRoaXMuX3dvcmRTZXJ2aWNlLndvcmRzLnB1c2goZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMud29yZCA9IG51bGw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl93b3JkU2VydmljZS53b3JkVXBkYXRlLnN1YnNjcmliZShcbiAgICAgIHdvcmQgPT4ge1xuICAgICAgICB0aGlzLndvcmQgPSB3b3JkO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmQnO1xuaW1wb3J0IHsgV29yZFNlcnZpY2UgfSBmcm9tICcuL3dvcmQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmQnLFxuICB0ZW1wbGF0ZTpgXG4gICAgICA8ZGl2IGNsYXNzPVwid29yZFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArICB3b3JkLmltYWdlU291cmNlICsgJyknLFxuICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JyA6ICduby1yZXBlYXQnLFxuICAgICAgJ2JhY2tncm91bmQtc2l6ZScgOiAnY292ZXInLFxuICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nIDogJ2NlbnRlcid9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyLWhlYWRlclwiPlxuICAgICAgICA8aDI+e3sgd29yZC5uYW1lIH19PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImRlZmluaXRpb25cIj5cbiAgICAgIDxwPnt7IHdvcmQuZGVmaW5pdGlvbiB9fSAoe3t3b3JkLmxhbmd1YWdlfX0pPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb25maWdcIj5cbiAgICAgIDxhIChjbGljayk9XCJvbkVkaXQoKVwiPiBFZGl0IDwvYT5cbiAgICAgIDxhIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+IERlbGV0ZSA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgV29yZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHdvcmQ6V29yZDtcbiAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd29yZFNlcnZpY2U6IFdvcmRTZXJ2aWNlKSB7fVxuXG4gIG9uRWRpdCgpIHtcbiAgICB0aGlzLl93b3JkU2VydmljZS5lZGl0V29yZCh0aGlzLndvcmQpO1xuICB9XG5cbiAgb25EZWxldGUoKSB7XG4gICAgdGhpcy5fd29yZFNlcnZpY2UuZGVsZXRlV29yZCh0aGlzLndvcmQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmQnO1xuaW1wb3J0IHsgV29yZENvbXBvbmVudCB9IGZyb20gJy4vd29yZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV29yZFNlcnZpY2UgfSBmcm9tICcuL3dvcmQuc2VydmljZSc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS13b3JkLWxpc3QnLFxuICB0ZW1wbGF0ZTpgXG4gICAgPGRpdiBjbGFzcz1cIndyYXBcIj5cbiAgICAgIDxteS13b3JkICpuZ0Zvcj1cIiN3b3JkIG9mIHdvcmRzXCIgW3dvcmRdPVwid29yZFwiPjwvbXktd29yZD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgZGlyZWN0aXZlczogW1dvcmRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFdvcmRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfd29yZFNlcnZpY2U6IFdvcmRTZXJ2aWNlKSB7fVxuXG4gIHdvcmRzOiBXb3JkW107XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fd29yZFNlcnZpY2UuZ2V0V29yZHMoKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgd29yZHMgPT4ge1xuICAgICAgICAgIHRoaXMud29yZHMgPSB3b3JkcztcbiAgICAgICAgICB0aGlzLl93b3JkU2VydmljZS53b3JkcyA9IHdvcmRzO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5pbXBvcnQgeyBXb3JkSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3dvcmQtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFdvcmRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi93b3JkLWxpc3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktd29yZHMnLFxuICB0ZW1wbGF0ZTpgXG4gICAgPG15LXdvcmQtaW5wdXQ+PC9teS13b3JkLWlucHV0PlxuICAgIDxteS13b3JkLWxpc3Q+PC9teS13b3JkLWxpc3Q+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtXb3JkSW5wdXRDb21wb25lbnQsIFdvcmRMaXN0Q29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFdvcmRzQ29tcG9uZW50IHtcblxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnMsIENvbnRyb2x9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXNpZ251cCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnZmlyc3ROYW1lJylcIiB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3ROYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImxhc3ROYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdsYXN0TmFtZScpXCIgdHlwZT1cInRleHRcIiBpZD1cImxhc3ROYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2VtYWlsJylcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ3Bhc3N3b3JkJylcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPlNpZ24gVXA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbXlGb3JtOiBDb250cm9sR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIpIHt9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5teUZvcm0udmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgIHRoaXMuaXNFbWFpbFxuICAgICAgXSldLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFbWFpbChjb250cm9sOiBDb250cm9sKToge1sgczogc3RyaW5nXTogYm9vbGVhbn0ge1xuICAgIGlmICghY29udHJvbC52YWx1ZS5tYXRjaChcIlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1wiKSkge1xuICAgICAgICByZXR1cm4ge2ludmFsaWRNYWlsOiB0cnVlfTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzLCBDb250cm9sfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1zaWduaW4nLFxuICB0ZW1wbGF0ZTpgXG4gIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2VtYWlsJylcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdwYXNzd29yZCcpXCIgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPlNpZ24gVXA8L2J1dHRvbj5cbiAgPC9mb3JtPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG15Rm9ybTogQ29udHJvbEdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOkZvcm1CdWlsZGVyKSB7fVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtLnZhbHVlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgdGhpcy5pc0VtYWlsXG4gICAgICBdKV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtYWlsKGNvbnRyb2w6IENvbnRyb2wpOiB7WyBzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgaWYgKCFjb250cm9sLnZhbHVlLm1hdGNoKFwiW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XCIpKSB7XG4gICAgICAgIHJldHVybiB7aW52YWxpZE1haWw6IHRydWV9O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktbG9nb3V0JyxcbiAgdGVtcGxhdGU6YFxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiKGNsaWNrKT1cIm9uTG9nb3V0KClcIj5Mb2dvdXQ8L2J1dHRvbj5cbiAgYFxufSlcblxuZXhwb3J0IGNsYXNzIExvZ291dENvbXBvbmVudCB7XG4gIG9uTG9nb3V0KCkge1xuXG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tICcuL3NpZ251cC5jb21wb25lbnQnO1xuaW1wb3J0IHtTaWduaW5Db21wb25lbnR9IGZyb20gJy4vc2lnbmluLmNvbXBvbmVudCc7XG5pbXBvcnQge0xvZ291dENvbXBvbmVudH0gZnJvbSAnLi9sb2dvdXQuY29tcG9uZW50JztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1hdXRoJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aGVhZGVyPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnU2lnbnVwJ11cIj5TaWdudXA8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydTaWduaW4nXVwiPlNpZ25pbjwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0xvZ291dCddXCI+TG9nb3V0PC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5AUm91dGVDb25maWcoW1xuICB7cGF0aDogJy9zaWdudXAnLCBuYW1lOiAnU2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gIHtwYXRoOiAnL3NpZ25pbicsIG5hbWU6ICdTaWduaW4nLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudH0sXG4gIHtwYXRoOiAnL2xvZ291dCcsIG5hbWU6ICdMb2dvdXQnLCBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudH0sXG5dKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IHtcblxufVxuIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoZWFkZXIgY2xhc3M9XCJcIj5cbiAgICAgIDxuYXYgY2xhc3M9XCJcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwiXCI+XG4gICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnV29yZHMnXVwiPkhvbWU8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydBdXRoJ11cIj5BdXRoZW50aWNhdGlvbjwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0FkbWluJ11cIj5BZG1pbjwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDE+VW50cmFuc2xhdGFibGUgV29yZHM8L2gxPlxuICAgIDwvaGVhZGVyPlxuICBgLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3Jkc0NvbXBvbmVudCB9IGZyb20gJy4vd29yZHMvd29yZHMuY29tcG9uZW50JztcbmltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmRzL3dvcmQnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtXb3JkSW5wdXRDb21wb25lbnR9IGZyb20gJy4vd29yZHMvd29yZC1pbnB1dC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcblxuICAgICAgICA8bXktaGVhZGVyPjwvbXktaGVhZGVyPlxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbV29yZHNDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTLCBIZWFkZXJDb21wb25lbnRdXG5cbn0pXG5AUm91dGVDb25maWcoW1xuICB7cGF0aDogJy8nLCBuYW1lOiAnV29yZHMnLCBjb21wb25lbnQ6IFdvcmRzQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuICB7cGF0aDogJy9hdXRoLy4uLicsIG5hbWU6ICdBdXRoJywgY29tcG9uZW50OiBBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0sXG4gIHtwYXRoOiAnL2FkbWluJywgbmFtZTogJ0FkbWluJywgY29tcG9uZW50OiBXb3JkSW5wdXRDb21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHB1YmxpYyB3b3JkczogV29yZFtdO1xuICBjb25zdHJ1Y3Rvcigpe1xuICB9XG59XG4iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXb3JkU2VydmljZX0gZnJvbSAnLi93b3Jkcy93b3JkLnNlcnZpY2UnO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuXG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtXb3JkU2VydmljZSwgUk9VVEVSX1BST1ZJREVSUywgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSksIEhUVFBfUFJPVklERVJTXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
