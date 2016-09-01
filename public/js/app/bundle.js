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
                    return this._http.post('http://localhost:3000/word', body, { headers: headers })
                        .map(function (response) {
                        var data = response.json().obj;
                        var word = new word_1.Word(data.name, data.definition, data.origin, data.language, data.sentence, data.partOfSpeech, data.color, data.link, data.font, data.imageUrl, data.imageCaption, data.imageSource, data._id);
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
                    return this._http.patch('http://localhost:3000/word/' + word.wordId, body, { headers: headers })
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
                };
                WordService.prototype.editWord = function (word) {
                    this.wordUpdate.emit(word);
                };
                WordService.prototype.deleteWord = function (word) {
                    this.words.splice(this.words.indexOf(word), 1);
                    return this._http.delete('http://localhost:3000/word/' + word.wordId)
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
                        template: "\n      <div class=\"word\" [ngStyle]=\"{'background-image': 'url(' +  word.imageSource + ')',\n      'background-repeat' : 'no-repeat',\n      'background-size' : 'cover',\n      'background-position' : 'center'}\">\n      <div class=\"center-header\">\n        <h2>{{ word.name }}</h2>\n      </div>\n      <div class=\"definition\">\n      <p>{{ word.definition }}</p>\n      </div>\n      </div>\n      <div class=\"config\">\n      <a (click)=\"onEdit()\"> Edit </a>\n      <a (click)=\"onDelete()\"> Delete </a>\n      </div>\n      "
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
                        template: "\n    <header class=\"\">\n      <nav class=\"\">\n        <ul class=\"\">\n          <li><a [routerLink]=\"['Words']\">Home</a></li>\n          <li><a [routerLink]=\"['Auth']\">Authentication</a></li>\n          <li><a [routerLink]=\"['Admin']\">Admin</a></li>\n        </ul>\n      </nav>\n    </header>\n  ",
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
                    // this.words = [
                    //   new Word("Pisan Zapra", "The time needed to eat a banana", "images/pisan_zapra.jpg"),
                    //   new Word("Schadenfreude", "The satisfaction we find in another person’s failure or suffering.", "images/schadenfreude.png"),
                    //   new Word("Age-otori", "The feeling of looking worse after a haircut.", "images/age_otori.jpg")
                    // ];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRzL3dvcmQudHMiLCJ3b3Jkcy93b3JkLnNlcnZpY2UudHMiLCJ3b3Jkcy93b3JkLWlucHV0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmQuY29tcG9uZW50LnRzIiwid29yZHMvd29yZC1saXN0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmRzLmNvbXBvbmVudC50cyIsImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyIsImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyIsImF1dGgvbG9nb3V0LmNvbXBvbmVudC50cyIsImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIiwiaGVhZGVyLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFDRSxjQUNTLElBQVksRUFDWixVQUFrQixFQUNsQixNQUFlLEVBQ2YsUUFBaUIsRUFDakIsUUFBaUIsRUFDakIsWUFBcUIsRUFDckIsS0FBYyxFQUNkLElBQWEsRUFDYixJQUFhLEVBQ2IsUUFBaUIsRUFDakIsWUFBcUIsRUFDckIsV0FBb0IsRUFDcEIsTUFBZSxFQUNmLElBQWEsRUFDYixNQUFlO29CQWRmLFNBQUksR0FBSixJQUFJLENBQVE7b0JBQ1osZUFBVSxHQUFWLFVBQVUsQ0FBUTtvQkFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUztvQkFDZixhQUFRLEdBQVIsUUFBUSxDQUFTO29CQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFTO29CQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBUztvQkFDckIsVUFBSyxHQUFMLEtBQUssQ0FBUztvQkFDZCxTQUFJLEdBQUosSUFBSSxDQUFTO29CQUNiLFNBQUksR0FBSixJQUFJLENBQVM7b0JBQ2IsYUFBUSxHQUFSLFFBQVEsQ0FBUztvQkFDakIsaUJBQVksR0FBWixZQUFZLENBQVM7b0JBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO29CQUNwQixXQUFNLEdBQU4s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LDBCQUFpQixDQUFDO3FCQUNoQyxDQUFDOzttQ0FBQTtnQkFJRixzQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsOENBRUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDR0Q7Z0JBRUU7b0JBQ0UsaUJBQWlCO29CQUNqQiwwRkFBMEY7b0JBQzFGLGlJQUFpSTtvQkFDakksbUdBQW1HO29CQUNuRyxLQUFLO2dCQUNQLENBQUM7Z0JBdkJIO29CQUFDLGlCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxvRkFJVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLDBCQUFpQixFQUFFLGtDQUFlLENBQUM7cUJBRW5FLENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDWCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUN6RSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsa0RBQXVCLEVBQUM7d0JBQ3JFLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBQztxQkFDL0QsQ0FBQzs7Z0NBQUE7Z0JBVUYsbUJBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTtZQVRELHdDQVNDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ3RCRCxtQkFBUyxDQUFDLDRCQUFZLEVBQUUsQ0FBQywwQkFBVyxFQUFFLHlCQUFnQixFQUFFLGVBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDLEVBQUUscUJBQWMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiLi4vLi4vLi4vdW50cmFuc2xhdGFibGVzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBXb3JkIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgZGVmaW5pdGlvbjogc3RyaW5nLFxuICAgIHB1YmxpYyBvcmlnaW4/OiBzdHJpbmcsXG4gICAgcHVibGljIGxhbmd1YWdlPzogc3RyaW5nLFxuICAgIHB1YmxpYyBzZW50ZW5jZT86IHN0cmluZyxcbiAgICBwdWJsaWMgcGFydE9mU3BlZWNoPzogc3RyaW5nLFxuICAgIHB1YmxpYyBjb2xvcj86IHN0cmluZyxcbiAgICBwdWJsaWMgbGluaz86IHN0cmluZyxcbiAgICBwdWJsaWMgZm9udD86IHN0cmluZyxcbiAgICBwdWJsaWMgaW1hZ2VVcmw/OiBzdHJpbmcsXG4gICAgcHVibGljIGltYWdlQ2FwdGlvbj86IHN0cmluZyxcbiAgICBwdWJsaWMgaW1hZ2VTb3VyY2U/OiBzdHJpbmcsXG4gICAgcHVibGljIHdvcmRJZD86IHN0cmluZyxcbiAgICBwdWJsaWMgdXNlcj86IHN0cmluZyxcbiAgICBwdWJsaWMgdXNlcklkPzogc3RyaW5nICkge31cbn1cbiIsImltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmQnO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV29yZFNlcnZpY2Uge1xuICB3b3JkczogV29yZFtdID0gW107XG4gIHdvcmRVcGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPFdvcmQ+KCk7XG5cbiAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG5cbiAgYWRkV29yZCh3b3JkOiBXb3JkKSB7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHdvcmQpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC93b3JkJywgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xuICAgICAgICBsZXQgd29yZCA9IG5ldyBXb3JkKGRhdGEubmFtZSwgZGF0YS5kZWZpbml0aW9uLCBkYXRhLm9yaWdpbiwgZGF0YS5sYW5ndWFnZSwgZGF0YS5zZW50ZW5jZSwgZGF0YS5wYXJ0T2ZTcGVlY2gsIGRhdGEuY29sb3IsIGRhdGEubGluaywgZGF0YS5mb250LCBkYXRhLmltYWdlVXJsLCBkYXRhLmltYWdlQ2FwdGlvbiwgZGF0YS5pbWFnZVNvdXJjZSwgZGF0YS5faWQpO1xuICAgICAgICByZXR1cm4gd29yZDtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgfVxuXG4gIGdldFdvcmRzKCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3dvcmQnKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xuICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9MDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgd29yZCA9IG5ldyBXb3JkKGRhdGFbaV0ubmFtZSwgZGF0YVtpXS5kZWZpbml0aW9uLCBkYXRhW2ldLm9yaWdpbiwgZGF0YVtpXS5sYW5ndWFnZSwgZGF0YVtpXS5zZW50ZW5jZSwgZGF0YVtpXS5wYXJ0T2ZTcGVlY2gsIGRhdGFbaV0uY29sb3IsIGRhdGFbaV0ubGluaywgZGF0YVtpXS5mb250LCBkYXRhW2ldLmltYWdlVXJsLCBkYXRhW2ldLmltYWdlQ2FwdGlvbiwgZGF0YVtpXS5pbWFnZVNvdXJjZSwgZGF0YVtpXS5faWQpO1xuICAgICAgICAgIG9ianMucHVzaCh3b3JkKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG9ianM7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG4gIH1cblxuICB1cGRhdGVXb3JkKHdvcmQ6IFdvcmQpIHtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkod29yZCk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC93b3JkLycgKyB3b3JkLndvcmRJZCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgfVxuXG4gIGVkaXRXb3JkKHdvcmQ6IFdvcmQpIHtcbiAgICB0aGlzLndvcmRVcGRhdGUuZW1pdCh3b3JkKTtcbiAgfVxuXG4gIGRlbGV0ZVdvcmQod29yZDogV29yZCkge1xuICAgIHRoaXMud29yZHMuc3BsaWNlKHRoaXMud29yZHMuaW5kZXhPZih3b3JkKSwgMSk7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvd29yZC8nICsgd29yZC53b3JkSWQpXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5pbXBvcnQgeyBXb3JkU2VydmljZSB9IGZyb20gJy4vd29yZC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmQtaW5wdXQnLFxuICB0ZW1wbGF0ZTpgXG4gIDxkaXYgY2xhc3M9XCJoaWRlLWZvcm0gY29udGFpbmVyXCI+XG4gICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYudmFsdWUpXCIgI2Y9XCJuZ0Zvcm1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9J25hbWUnPk5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm5hbWVcIiAjbmFtZUlucHV0IFtuZ01vZGVsXT1cIndvcmQ/Lm5hbWVcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nZGVmaW5pdGlvbic+RGVmaW5pdGlvbjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJkZWZpbml0aW9uXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZGVmaW5pdGlvblwiICNkZWZpbml0aW9uSW5wdXQgW25nTW9kZWxdPVwid29yZD8uZGVmaW5pdGlvblwiID5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nb3JpZ2luJz5PcmlnaW48L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwib3JpZ2luXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwib3JpZ2luXCIgI29yaWdpbklucHV0IFtuZ01vZGVsXT1cIndvcmQ/Lm9yaWdpblwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdsYW5ndWFnZSc+TGFuZ3VhZ2U8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwibGFuZ3VhZ2VcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJsYW5ndWFnZVwiICNsYW5ndWFnZUlucHV0IFtuZ01vZGVsXT1cIndvcmQ/Lmxhbmd1YWdlXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9J3NlbnRlbmNlJz5TZW50ZW5jZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJzZW50ZW5jZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInNlbnRlbmNlXCIgI3NlbnRlbmNlSW5wdXQgW25nTW9kZWxdPVwid29yZD8uc2VudGVuY2VcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0ncGFydE9mU3BlZWNoJz5QYXJ0IG9mIFNwZWVjaDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJwYXJ0T2ZTcGVlY2hcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwYXJ0T2ZTcGVlY2hcIiAjcGFydE9mU3BlZWNoSW5wdXQgW25nTW9kZWxdPVwid29yZD8ucGFydE9mU3BlZWNoXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9J2NvbG9yJz5DYXJkIENvbG9yPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImNvbG9yXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY29sb3JcIiAjY29sb3JJbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5jb2xvclwiID5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj0nbGluayc+TGluazwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJsaW5rXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibGlua1wiICNsaW5rSW5wdXQgW25nTW9kZWxdPVwid29yZD8ubGlua1wiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdmb250Jz5Gb250PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImZvbnRcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJmb250XCIgI2ZvbnRJbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5mb250XCI+XG4gICAgICA8L2Rpdj4+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdpbWFnZUNhcHRpb24nPkltYWdlIENhcHRpb248L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiaW1hZ2VDYXB0aW9uXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiaW1hZ2VDYXB0aW9uXCIgI2ltYWdlQ2FwdGlvbklucHV0IFtuZ01vZGVsXT1cIndvcmQ/LmltYWdlQ2FwdGlvblwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPSdpbWFnZVNvdXJjZSc+SW1hZ2UgU291cmNlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImltYWdlU291cmNlXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiaW1hZ2VTb3VyY2VcIiAjaW1hZ2VTb3VyY2VJbnB1dCBbbmdNb2RlbF09XCJ3b3JkPy5pbWFnZVNvdXJjZVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPiB7eyAhd29yZCA/ICdTZW5kIFdvcmQnIDogJ1NhdmUgV29yZCcgfX08L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3MgPVwiYnRuIGJ0bi1kYW5nZXJcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIiAqbmdJZj1cIndvcmRcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgV29yZElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgd29yZDogV29yZCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd29yZFNlcnZpY2U6IFdvcmRTZXJ2aWNlKSB7fVxuXG4gIG9uU3VibWl0KGZvcm06YW55KSB7XG4gICAgaWYgKHRoaXMud29yZCkge1xuICAgICAgLy8gRWRpdFxuICAgICAgdGhpcy53b3JkLm5hbWUgPSBmb3JtLm5hbWU7XG4gICAgICB0aGlzLndvcmQuZGVmaW5pdGlvbiA9IGZvcm0uZGVmaW5pdGlvbjtcbiAgICAgIHRoaXMud29yZC5vcmlnaW4gPSBmb3JtLm9yaWdpbjtcbiAgICAgIHRoaXMud29yZC5sYW5ndWFnZSA9IGZvcm0ubGFuZ3VhZ2U7XG4gICAgICB0aGlzLndvcmQuc2VudGVuY2UgPSBmb3JtLnNlbnRlbmNlO1xuICAgICAgdGhpcy53b3JkLnBhcnRPZlNwZWVjaCA9IGZvcm0ucGFydE9mU3BlZWNoO1xuICAgICAgdGhpcy53b3JkLmNvbG9yID0gZm9ybS5jb2xvcjtcbiAgICAgIHRoaXMud29yZC5saW5rID0gZm9ybS5saW5rO1xuICAgICAgdGhpcy53b3JkLmZvbnQgPSBmb3JtLmZvbnQ7XG4gICAgICB0aGlzLndvcmQuaW1hZ2VVcmwgPSBmb3JtLmltYWdlVXJsO1xuICAgICAgdGhpcy53b3JkLmltYWdlQ2FwdGlvbiA9IGZvcm0uaW1hZ2VDYXB0aW9uO1xuICAgICAgdGhpcy53b3JkLmltYWdlU291cmNlID0gZm9ybS5pbWFnZVNvdXJjZTtcbiAgICAgIHRoaXMuX3dvcmRTZXJ2aWNlLnVwZGF0ZVdvcmQodGhpcy53b3JkKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgKTtcbiAgICAgIHRoaXMud29yZCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICBjb25zdCB3b3JkOiBXb3JkID0gbmV3IFdvcmQoZm9ybS5uYW1lLCBmb3JtLmRlZmluaXRpb24sIGZvcm0ub3JpZ2luLCBmb3JtLmxhbmd1YWdlLCBmb3JtLnNlbnRlbmNlLCBmb3JtLnBhcnRPZlNwZWVjaCwgZm9ybS5jb2xvciwgZm9ybS5saW5rLCBmb3JtLmZvbnQsIGZvcm0uaW1hZ2VVcmwsIGZvcm0uaW1hZ2VDYXB0aW9uLCBmb3JtLmltYWdlU291cmNlKTtcbiAgICB0aGlzLl93b3JkU2VydmljZS5hZGRXb3JkKHdvcmQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICB0aGlzLl93b3JkU2VydmljZS53b3Jkcy5wdXNoKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvbkNhbmNlbCgpIHtcbiAgICB0aGlzLndvcmQgPSBudWxsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fd29yZFNlcnZpY2Uud29yZFVwZGF0ZS5zdWJzY3JpYmUoXG4gICAgICB3b3JkID0+IHtcbiAgICAgICAgdGhpcy53b3JkID0gd29yZDtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3JkJztcbmltcG9ydCB7IFdvcmRTZXJ2aWNlIH0gZnJvbSAnLi93b3JkLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS13b3JkJyxcbiAgdGVtcGxhdGU6YFxuICAgICAgPGRpdiBjbGFzcz1cIndvcmRcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyAgd29yZC5pbWFnZVNvdXJjZSArICcpJyxcbiAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCcgOiAnbm8tcmVwZWF0JyxcbiAgICAgICdiYWNrZ3JvdW5kLXNpemUnIDogJ2NvdmVyJyxcbiAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJyA6ICdjZW50ZXInfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNlbnRlci1oZWFkZXJcIj5cbiAgICAgICAgPGgyPnt7IHdvcmQubmFtZSB9fTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkZWZpbml0aW9uXCI+XG4gICAgICA8cD57eyB3b3JkLmRlZmluaXRpb24gfX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiPlxuICAgICAgPGEgKGNsaWNrKT1cIm9uRWRpdCgpXCI+IEVkaXQgPC9hPlxuICAgICAgPGEgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj4gRGVsZXRlIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgYFxufSlcbmV4cG9ydCBjbGFzcyBXb3JkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgd29yZDpXb3JkO1xuICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93b3JkU2VydmljZTogV29yZFNlcnZpY2UpIHt9XG5cbiAgb25FZGl0KCkge1xuICAgIHRoaXMuX3dvcmRTZXJ2aWNlLmVkaXRXb3JkKHRoaXMud29yZCk7XG4gIH1cblxuICBvbkRlbGV0ZSgpIHtcbiAgICB0aGlzLl93b3JkU2VydmljZS5kZWxldGVXb3JkKHRoaXMud29yZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5pbXBvcnQgeyBXb3JkQ29tcG9uZW50IH0gZnJvbSAnLi93b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3JkU2VydmljZSB9IGZyb20gJy4vd29yZC5zZXJ2aWNlJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmQtbGlzdCcsXG4gIHRlbXBsYXRlOmBcbiAgICA8ZGl2IGNsYXNzPVwid3JhcFwiPlxuICAgICAgPG15LXdvcmQgKm5nRm9yPVwiI3dvcmQgb2Ygd29yZHNcIiBbd29yZF09XCJ3b3JkXCI+PC9teS13b3JkPlxuICAgIDwvZGl2PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbV29yZENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgV29yZExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIF93b3JkU2VydmljZTogV29yZFNlcnZpY2UpIHt9XG5cbiAgd29yZHM6IFdvcmRbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl93b3JkU2VydmljZS5nZXRXb3JkcygpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICB3b3JkcyA9PiB7XG4gICAgICAgICAgdGhpcy53b3JkcyA9IHdvcmRzO1xuICAgICAgICAgIHRoaXMuX3dvcmRTZXJ2aWNlLndvcmRzID0gd29yZHM7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbmltcG9ydCB7IFdvcmRJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vd29yZC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV29yZExpc3RDb21wb25lbnQgfSBmcm9tICcuL3dvcmQtbGlzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS13b3JkcycsXG4gIHRlbXBsYXRlOmBcbiAgICA8bXktd29yZC1pbnB1dD48L215LXdvcmQtaW5wdXQ+XG4gICAgPG15LXdvcmQtbGlzdD48L215LXdvcmQtbGlzdD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW1dvcmRJbnB1dENvbXBvbmVudCwgV29yZExpc3RDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgV29yZHNDb21wb25lbnQge1xuXG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgVmFsaWRhdG9ycywgQ29udHJvbH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktc2lnbnVwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdmaXJzdE5hbWUnKVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaXJzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2xhc3ROYW1lJylcIiB0eXBlPVwidGV4dFwiIGlkPVwibGFzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnZW1haWwnKVwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgncGFzc3dvcmQnKVwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIFtkaXNhYmxlZF09XCIhbXlGb3JtLnZhbGlkXCI+U2lnbiBVcDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBteUZvcm06IENvbnRyb2xHcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjpGb3JtQnVpbGRlcikge31cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybS52YWx1ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgdGhpcy5pc0VtYWlsXG4gICAgICBdKV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtYWlsKGNvbnRyb2w6IENvbnRyb2wpOiB7WyBzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgaWYgKCFjb250cm9sLnZhbHVlLm1hdGNoKFwiW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XCIpKSB7XG4gICAgICAgIHJldHVybiB7aW52YWxpZE1haWw6IHRydWV9O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnMsIENvbnRyb2x9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXNpZ25pbicsXG4gIHRlbXBsYXRlOmBcbiAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnZW1haWwnKVwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ3Bhc3N3b3JkJylcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIFtkaXNhYmxlZF09XCIhbXlGb3JtLnZhbGlkXCI+U2lnbiBVcDwvYnV0dG9uPlxuICA8L2Zvcm0+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbXlGb3JtOiBDb250cm9sR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIpIHt9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5teUZvcm0udmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICB0aGlzLmlzRW1haWxcbiAgICAgIF0pXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzRW1haWwoY29udHJvbDogQ29udHJvbCk6IHtbIHM6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICBpZiAoIWNvbnRyb2wudmFsdWUubWF0Y2goXCJbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cIikpIHtcbiAgICAgICAgcmV0dXJuIHtpbnZhbGlkTWFpbDogdHJ1ZX07XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1sb2dvdXQnLFxuICB0ZW1wbGF0ZTpgXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIoY2xpY2spPVwib25Mb2dvdXQoKVwiPkxvZ291dDwvYnV0dG9uPlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgTG9nb3V0Q29tcG9uZW50IHtcbiAgb25Mb2dvdXQoKSB7XG5cbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gJy4vc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQge1NpZ25pbkNvbXBvbmVudH0gZnJvbSAnLi9zaWduaW4uY29tcG9uZW50JztcbmltcG9ydCB7TG9nb3V0Q29tcG9uZW50fSBmcm9tICcuL2xvZ291dC5jb21wb25lbnQnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWF1dGgnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoZWFkZXI+XG4gICAgICA8bmF2PlxuICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIj5cbiAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydTaWdudXAnXVwiPlNpZ251cDwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ1NpZ25pbiddXCI+U2lnbmluPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnTG9nb3V0J11cIj5Mb2dvdXQ8L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHtwYXRoOiAnL3NpZ251cCcsIG5hbWU6ICdTaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcbiAge3BhdGg6ICcvc2lnbmluJywgbmFtZTogJ1NpZ25pbicsIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50fSxcbiAge3BhdGg6ICcvbG9nb3V0JywgbmFtZTogJ0xvZ291dCcsIGNvbXBvbmVudDogTG9nb3V0Q29tcG9uZW50fSxcbl0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db21wb25lbnQge1xuXG59XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhlYWRlciBjbGFzcz1cIlwiPlxuICAgICAgPG5hdiBjbGFzcz1cIlwiPlxuICAgICAgICA8dWwgY2xhc3M9XCJcIj5cbiAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydXb3JkcyddXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0F1dGgnXVwiPkF1dGhlbnRpY2F0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnQWRtaW4nXVwiPkFkbWluPC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgYCxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZHNDb21wb25lbnQgfSBmcm9tICcuL3dvcmRzL3dvcmRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3Jkcy93b3JkJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7V29yZElucHV0Q29tcG9uZW50fSBmcm9tICcuL3dvcmRzL3dvcmQtaW5wdXQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG5cbiAgICAgICAgPG15LWhlYWRlcj48L215LWhlYWRlcj5cbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1dvcmRzQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFUywgSGVhZGVyQ29tcG9uZW50XVxuXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAge3BhdGg6ICcvJywgbmFtZTogJ1dvcmRzJywgY29tcG9uZW50OiBXb3Jkc0NvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcbiAge3BhdGg6ICcvYXV0aC8uLi4nLCBuYW1lOiAnQXV0aCcsIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Db21wb25lbnR9XG4gIHtwYXRoOiAnL2FkbWluJywgbmFtZTogJ0FkbWluJywgY29tcG9uZW50OiBXb3JkSW5wdXRDb21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHB1YmxpYyB3b3JkczogV29yZFtdO1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIC8vIHRoaXMud29yZHMgPSBbXG4gICAgLy8gICBuZXcgV29yZChcIlBpc2FuIFphcHJhXCIsIFwiVGhlIHRpbWUgbmVlZGVkIHRvIGVhdCBhIGJhbmFuYVwiLCBcImltYWdlcy9waXNhbl96YXByYS5qcGdcIiksXG4gICAgLy8gICBuZXcgV29yZChcIlNjaGFkZW5mcmV1ZGVcIiwgXCJUaGUgc2F0aXNmYWN0aW9uIHdlIGZpbmQgaW4gYW5vdGhlciBwZXJzb27igJlzIGZhaWx1cmUgb3Igc3VmZmVyaW5nLlwiLCBcImltYWdlcy9zY2hhZGVuZnJldWRlLnBuZ1wiKSxcbiAgICAvLyAgIG5ldyBXb3JkKFwiQWdlLW90b3JpXCIsIFwiVGhlIGZlZWxpbmcgb2YgbG9va2luZyB3b3JzZSBhZnRlciBhIGhhaXJjdXQuXCIsIFwiaW1hZ2VzL2FnZV9vdG9yaS5qcGdcIilcbiAgICAvLyBdO1xuICB9XG59XG4iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXb3JkU2VydmljZX0gZnJvbSAnLi93b3Jkcy93b3JkLnNlcnZpY2UnO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuXG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtXb3JkU2VydmljZSwgUk9VVEVSX1BST1ZJREVSUywgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSksIEhUVFBfUFJPVklERVJTXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
