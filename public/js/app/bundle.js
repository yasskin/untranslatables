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
System.register("words/word-input.component", ['angular2/core', "words/word"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, word_1;
    var WordInputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (word_1_1) {
                word_1 = word_1_1;
            }],
        execute: function() {
            WordInputComponent = (function () {
                function WordInputComponent() {
                }
                WordInputComponent.prototype.onCreate = function (name, definition) {
                    var word = new word_1.Word(name, definition);
                    console.log(word);
                };
                WordInputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-word-input',
                        template: "\n    <div class=\"form-group\">\n      <label for='name'>Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" #nameInput>\n      <label for='definition'>Definition</label>\n      <input type=\"text\" class=\"form-control\" id=\"definition\" #definitionInput>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onCreate(nameInput.value, definitionInput.value)\">Create Word</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], WordInputComponent);
                return WordInputComponent;
            }());
            exports_2("WordInputComponent", WordInputComponent);
        }
    }
});
System.register("words/word.component", ['angular2/core', "words/word"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
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
            exports_3("WordComponent", WordComponent);
        }
    }
});
System.register("words/word-list.component", ['angular2/core', "words/word", "words/word.component"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, word_3, word_component_1;
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
            }],
        execute: function() {
            WordListComponent = (function () {
                function WordListComponent() {
                    this.words = [
                        new word_3.Word('testname', 'testdefinition'),
                        new word_3.Word('testname2', 'testdefinition2')
                    ];
                }
                WordListComponent = __decorate([
                    core_3.Component({
                        selector: 'my-word-list',
                        template: "\n    <my-word *ngFor=\"#word of words\" [word]=\"word\"></my-word>\n  ",
                        directives: [word_component_1.WordComponent]
                    }), 
                    __metadata('design:paramtypes', [])
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
            exports_5("WordsComponent", WordsComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "words/words.component"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
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
            exports_6("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRzL3dvcmQudHMiLCJ3b3Jkcy93b3JkLWlucHV0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmQuY29tcG9uZW50LnRzIiwid29yZHMvd29yZC1saXN0LmNvbXBvbmVudC50cyIsIndvcmRzL3dvcmRzLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFDRSxjQUFvQixJQUFZLEVBQVMsVUFBa0IsRUFBUyxNQUFlLEVBQVMsUUFBaUIsRUFBUyxLQUFjLEVBQVMsUUFBaUIsRUFBUyxZQUFxQixFQUFTLEtBQWMsRUFBUyxJQUFhLEVBQVMsSUFBYSxFQUFTLElBQWE7b0JBQWpRLFNBQUksR0FBSixJQUFJLENBQVE7b0JBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtvQkFBUyxXQUFNLEdBQU4sTUFBTSxDQUFTO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVM7b0JBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUztvQkFBUyxhQUFRLEdBQVIsUUFBUSxDQUFTO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFTO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVM7b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBUztvQkFBUyxTQUFJLEdBQUosSUFBSSxDQUFTO29CQUFTLFNBQUksR0FBSixJQUFJLENBQVM7Z0JBQUksQ0FBQztnQkFDNVIsV0FBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUJBRUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDWUQ7Z0JBQUE7Z0JBS0EsQ0FBQztnQkFKQyxxQ0FBUSxHQUFSLFVBQVMsSUFBWSxFQUFFLFVBQWtCO29CQUN2QyxJQUFNLElBQUksR0FBUyxJQUFJLFdBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7b0JBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLENBQUM7Z0JBaEJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBQyx1YkFRTjtxQkFDSixDQUFDOztzQ0FBQTtnQkFNRix5QkFBQztZQUFELENBTEEsQUFLQyxJQUFBO1lBTEQsbURBS0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDUEQ7Z0JBQUE7Z0JBR0EsQ0FBQztnQkFGQztvQkFBQyxZQUFLLEVBQUU7OzJEQUFBO2dCQVZWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBQyxpRkFLUjtxQkFDRixDQUFDOztpQ0FBQTtnQkFJRixvQkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQseUNBR0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDTEQ7Z0JBQUE7b0JBQ0UsVUFBSyxHQUFXO3dCQUNkLElBQUksV0FBSSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQzt3QkFDdEMsSUFBSSxXQUFJLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDO3FCQUN6QyxDQUFDO2dCQUVKLENBQUM7Z0JBYkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFDLHlFQUVSO3dCQUNELFVBQVUsRUFBRSxDQUFDLDhCQUFhLENBQUM7cUJBQzVCLENBQUM7O3FDQUFBO2dCQU9GLHdCQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCxpREFNQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNGRDtnQkFBQTtnQkFFQSxDQUFDO2dCQVhEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBQyw4RUFHUjt3QkFDRCxVQUFVLEVBQUUsQ0FBQyx5Q0FBa0IsRUFBRSx1Q0FBaUIsQ0FBQztxQkFDcEQsQ0FBQzs7a0NBQUE7Z0JBSUYscUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELDJDQUVDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ1BEO2dCQUFBO2dCQUVBLENBQUM7Z0JBVEQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHVDQUVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBQy9CLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztZQ1BELG1CQUFTLENBQUMsNEJBQVksQ0FBQyxDQUFDIiwiZmlsZSI6Ii4uLy4uLy4uL3VudHJhbnNsYXRhYmxlcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV29yZCB7XG4gIGNvbnN0cnVjdG9yKCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgZGVmaW5pdGlvbjogc3RyaW5nLCBwdWJsaWMgb3JpZ2luPzogc3RyaW5nLCBwdWJsaWMgbGFuZ3VhZ2U/OiBzdHJpbmcsIHB1YmxpYyBpbWFnZT86IHN0cmluZywgcHVibGljIHNlbnRlbmNlPzogc3RyaW5nLCBwdWJsaWMgcGFydE9mU3BlZWNoPzogc3RyaW5nLCBwdWJsaWMgY29sb3I/OiBzdHJpbmcsIHB1YmxpYyBsaW5rPzogc3RyaW5nLCBwdWJsaWMgZm9udD86IHN0cmluZywgcHVibGljIHVzZXI/OiBzdHJpbmcgKSB7fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3JkJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXdvcmQtaW5wdXQnLFxuICB0ZW1wbGF0ZTpgXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9J25hbWUnPk5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm5hbWVcIiAjbmFtZUlucHV0PlxuICAgICAgPGxhYmVsIGZvcj0nZGVmaW5pdGlvbic+RGVmaW5pdGlvbjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZGVmaW5pdGlvblwiICNkZWZpbml0aW9uSW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib25DcmVhdGUobmFtZUlucHV0LnZhbHVlLCBkZWZpbml0aW9uSW5wdXQudmFsdWUpXCI+Q3JlYXRlIFdvcmQ8L2J1dHRvbj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFdvcmRJbnB1dENvbXBvbmVudCB7XG4gIG9uQ3JlYXRlKG5hbWU6IHN0cmluZywgZGVmaW5pdGlvbjogc3RyaW5nKSB7XG4gICAgY29uc3Qgd29yZDogV29yZCA9IG5ldyBXb3JkKG5hbWUsIGRlZmluaXRpb24pO1xuICAgIGNvbnNvbGUubG9nKHdvcmQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3JkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktd29yZCcsXG4gIHRlbXBsYXRlOmBcbiAgICA8ZGl2PlxuICAgICAge3sgd29yZC5uYW1lIH19XG4gICAgICB7eyB3b3JkLmRlZmluaXRpb24gfX1cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBXb3JkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgd29yZDpXb3JkOlxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmQnO1xuaW1wb3J0IHsgV29yZENvbXBvbmVudCB9IGZyb20gJy4vd29yZC5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktd29yZC1saXN0JyxcbiAgdGVtcGxhdGU6YFxuICAgIDxteS13b3JkICpuZ0Zvcj1cIiN3b3JkIG9mIHdvcmRzXCIgW3dvcmRdPVwid29yZFwiPjwvbXktd29yZD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW1dvcmRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFdvcmRMaXN0Q29tcG9uZW50IHtcbiAgd29yZHM6IFdvcmRbXSA9IFtcbiAgICBuZXcgV29yZCgndGVzdG5hbWUnLCAndGVzdGRlZmluaXRpb24nKSxcbiAgICBuZXcgV29yZCgndGVzdG5hbWUyJywgJ3Rlc3RkZWZpbml0aW9uMicpXG4gIF07XG4gIGNvbnNvbGUubG9nKHdvcmRzKTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbmltcG9ydCB7IFdvcmRJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vd29yZC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV29yZExpc3RDb21wb25lbnQgfSBmcm9tICcuL3dvcmQtbGlzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS13b3JkcycsXG4gIHRlbXBsYXRlOmBcbiAgICA8bXktd29yZC1pbnB1dD48L215LXdvcmQtaW5wdXQ+XG4gICAgPG15LXdvcmQtbGlzdD48L215LXdvcmQtbGlzdD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW1dvcmRJbnB1dENvbXBvbmVudCwgV29yZExpc3RDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgV29yZHNDb21wb25lbnQge1xuXG59XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBXb3Jkc0NvbXBvbmVudCB9IGZyb20gJy4vd29yZHMvd29yZHMuY29tcG9uZW50J1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxteS13b3Jkcz48L215LXdvcmRzPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1dvcmRzQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
