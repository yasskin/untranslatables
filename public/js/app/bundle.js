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
                function Word(name, definition, origin, language, image, sentence, partOfSpeech, color, link, font, user) {
                    this.name = name;
                    this.definition = definition;
                    this.origin = origin;
                    this.language = language;
                    this.image = image;
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
                WordInputComponent.prototype.onCreate = function (name, definition) {
                    var word = new word_1.Word(name, definition);
                    this._wordService.addWord(word);
                };
                WordInputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-word-input',
                        template: "\n    <div class=\"form-group\">\n      <label for='name'>Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" #nameInput>\n      <label for='definition'>Definition</label>\n      <input type=\"text\" class=\"form-control\" id=\"definition\" #definitionInput>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onCreate(nameInput.value, definitionInput.value)\">Create Word</button>\n    "
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
                        template: "\n    <div>\n      {{ word.name }}\n      {{ word.definition }}\n    </div>\n  "
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRzL3dvcmQudHMiLCJ3b3Jkcy93b3JkLnNlcnZpY2UudHMiLCJ3b3Jkcy93b3JkLWlucHV0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmQuY29tcG9uZW50LnRzIiwid29yZHMvd29yZC1saXN0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmRzLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFDRSxjQUFvQixJQUFZLEVBQVMsVUFBa0IsRUFBUyxNQUFlLEVBQVMsUUFBaUIsRUFBUyxLQUFjLEVBQVMsUUFBaUIsRUFBUyxZQUFxQixFQUFTLEtBQWMsRUFBUyxJQUFhLEVBQVMsSUFBYSxFQUFTLElBQWE7b0JBQWpRLFNBQUksR0FBSixJQUFJLENBQVE7b0JBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtvQkFBUyxXQUFNLEdBQU4sTUFBTSxDQUFTO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVM7b0JBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUztvQkFBUyxhQUFRLEdBQVIsUUFBUSxDQUFTO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFTO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVM7b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBUztvQkFBUyxTQUFJLEdBQUosSUFBSSxDQUFTO29CQUFTLFNBQUksR0FBSixJQUFJLENBQVM7Z0JBQUksQ0FBQztnQkFDNVIsV0FBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUJBRUMsQ0FBQTs7Ozs7Ozs7Ozs7WUNBRDtnQkFBQTtvQkFDRSxVQUFLLEdBQVcsRUFBRSxDQUFDO2dCQWNyQixDQUFDO2dCQVpDLDZCQUFPLEdBQVAsVUFBUSxJQUFVO29CQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsOEJBQVEsR0FBUjtvQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDcEIsQ0FBQztnQkFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBVTtvQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELENBQUM7Z0JBQ0gsa0JBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELHFDQWVDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ0ZEO2dCQUVFLDRCQUFvQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFFakQscUNBQVEsR0FBUixVQUFTLElBQVksRUFBRSxVQUFrQjtvQkFDdkMsSUFBTSxJQUFJLEdBQVMsSUFBSSxXQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFuQkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFDLHViQVFOO3FCQUNKLENBQUM7O3NDQUFBO2dCQVNGLHlCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCxtREFRQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNYRDtnQkFBQTtnQkFHQSxDQUFDO2dCQUZDO29CQUFDLFlBQUssRUFBRTs7MkRBQUE7Z0JBVlY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFDLGlGQUtSO3FCQUNGLENBQUM7O2lDQUFBO2dCQUlGLG9CQUFDO1lBQUQsQ0FIQSxBQUdDLElBQUE7WUFIRCx5Q0FHQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNKRDtnQkFFRSwyQkFBcUIsWUFBeUI7b0JBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFHLENBQUM7Z0JBSWxELG9DQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM1QyxDQUFDO2dCQWZIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBQyx5RUFFUjt3QkFDRCxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUM1QixDQUFDOztxQ0FBQTtnQkFVRix3QkFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQsaURBU0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDTkQ7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFYRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUMsOEVBR1I7d0JBQ0QsVUFBVSxFQUFFLENBQUMseUNBQWtCLEVBQUUsdUNBQWlCLENBQUM7cUJBQ3BELENBQUM7O2tDQUFBO2dCQUlGLHFCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCwyQ0FFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNQRDtnQkFBQTtnQkFFQSxDQUFDO2dCQVREO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx1Q0FFVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3FCQUMvQixDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNORCxtQkFBUyxDQUFDLDRCQUFZLEVBQUUsQ0FBQywwQkFBVyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIuLi8uLi8uLi91bnRyYW5zbGF0YWJsZXMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFdvcmQge1xuICBjb25zdHJ1Y3RvciggcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGRlZmluaXRpb246IHN0cmluZywgcHVibGljIG9yaWdpbj86IHN0cmluZywgcHVibGljIGxhbmd1YWdlPzogc3RyaW5nLCBwdWJsaWMgaW1hZ2U/OiBzdHJpbmcsIHB1YmxpYyBzZW50ZW5jZT86IHN0cmluZywgcHVibGljIHBhcnRPZlNwZWVjaD86IHN0cmluZywgcHVibGljIGNvbG9yPzogc3RyaW5nLCBwdWJsaWMgbGluaz86IHN0cmluZywgcHVibGljIGZvbnQ/OiBzdHJpbmcsIHB1YmxpYyB1c2VyPzogc3RyaW5nICkge31cbn1cbiIsImltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmQnO1xuXG5leHBvcnQgY2xhc3MgV29yZFNlcnZpY2Uge1xuICB3b3JkczogV29yZFtdID0gW107XG5cbiAgYWRkV29yZCh3b3JkOiBXb3JkKSB7XG4gICAgdGhpcy53b3Jkcy5wdXNoKHdvcmQpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMud29yZHMpO1xuICB9XG5cbiAgZ2V0V29yZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMud29yZHM7XG4gIH1cblxuICBkZWxldGVXb3JkKHdvcmQ6IFdvcmQpIHtcbiAgICB0aGlzLndvcmRzLnNwbGljZSh0aGlzLndvcmRzLmluZGV4T2Yod29yZCksIDEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmQnO1xuaW1wb3J0IHsgV29yZFNlcnZpY2UgfSBmcm9tICcuL3dvcmQuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS13b3JkLWlucHV0JyxcbiAgdGVtcGxhdGU6YFxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPSduYW1lJz5OYW1lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJuYW1lXCIgI25hbWVJbnB1dD5cbiAgICAgIDxsYWJlbCBmb3I9J2RlZmluaXRpb24nPkRlZmluaXRpb248L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImRlZmluaXRpb25cIiAjZGVmaW5pdGlvbklucHV0PlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cIm9uQ3JlYXRlKG5hbWVJbnB1dC52YWx1ZSwgZGVmaW5pdGlvbklucHV0LnZhbHVlKVwiPkNyZWF0ZSBXb3JkPC9idXR0b24+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBXb3JkSW5wdXRDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dvcmRTZXJ2aWNlOiBXb3JkU2VydmljZSkge31cblxuICBvbkNyZWF0ZShuYW1lOiBzdHJpbmcsIGRlZmluaXRpb246IHN0cmluZykge1xuICAgIGNvbnN0IHdvcmQ6IFdvcmQgPSBuZXcgV29yZChuYW1lLCBkZWZpbml0aW9uKTtcbiAgICB0aGlzLl93b3JkU2VydmljZS5hZGRXb3JkKHdvcmQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3JkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktd29yZCcsXG4gIHRlbXBsYXRlOmBcbiAgICA8ZGl2PlxuICAgICAge3sgd29yZC5uYW1lIH19XG4gICAgICB7eyB3b3JkLmRlZmluaXRpb24gfX1cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBXb3JkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgd29yZDpXb3JkO1xuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5pbXBvcnQgeyBXb3JkQ29tcG9uZW50IH0gZnJvbSAnLi93b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3JkU2VydmljZSB9IGZyb20gJy4vd29yZC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmQtbGlzdCcsXG4gIHRlbXBsYXRlOmBcbiAgICA8bXktd29yZCAqbmdGb3I9XCIjd29yZCBvZiB3b3Jkc1wiIFt3b3JkXT1cIndvcmRcIj48L215LXdvcmQ+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtXb3JkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBXb3JkTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgX3dvcmRTZXJ2aWNlOiBXb3JkU2VydmljZSkge31cblxuICB3b3JkczogV29yZFtdO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMud29yZHMgPSB0aGlzLl93b3JkU2VydmljZS5nZXRXb3JkcygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5pbXBvcnQgeyBXb3JkSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3dvcmQtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFdvcmRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi93b3JkLWxpc3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktd29yZHMnLFxuICB0ZW1wbGF0ZTpgXG4gICAgPG15LXdvcmQtaW5wdXQ+PC9teS13b3JkLWlucHV0PlxuICAgIDxteS13b3JkLWxpc3Q+PC9teS13b3JkLWxpc3Q+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtXb3JkSW5wdXRDb21wb25lbnQsIFdvcmRMaXN0Q29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFdvcmRzQ29tcG9uZW50IHtcblxufVxuIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgV29yZHNDb21wb25lbnQgfSBmcm9tICcuL3dvcmRzL3dvcmRzLmNvbXBvbmVudCdcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bXktd29yZHM+PC9teS13b3Jkcz5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtXb3Jkc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7V29yZFNlcnZpY2V9IGZyb20gJy4vd29yZHMvd29yZC5zZXJ2aWNlJztcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1dvcmRTZXJ2aWNlXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
