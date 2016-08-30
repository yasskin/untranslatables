var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("app.component", ['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var AppComponent, Word;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.words = [
                        new Word("Pisan Zapra", 0),
                        new Word("Schadenfreude", 1),
                        new Word("Age-otori", 2),
                        new Word("Boketto", 3)
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <div class=\"wrap\">\n        <h1>Hello World!</h1>\n        <h3 *ngFor=\"#word of words\">{{ word.name }}</h3>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            Word = (function () {
                function Word(name, id) {
                    this.name = name;
                    this.id = id;
                }
                return Word;
            }());
            exports_1("Word", Word);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBRUU7b0JBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRzt3QkFDWCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO3dCQUM1QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3dCQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO3FCQUN2QixDQUFDO2dCQUNKLENBQUM7Z0JBbEJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSw2SUFLVDtxQkFDSixDQUFDOztnQ0FBQTtnQkFXRixtQkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQsdUNBVUMsQ0FBQTtZQUVEO2dCQUNFLGNBQW1CLElBQVksRUFBUyxFQUFVO29CQUEvQixTQUFJLEdBQUosSUFBSSxDQUFRO29CQUFTLE9BQUUsR0FBRixFQUFFLENBQVE7Z0JBRWxELENBQUM7Z0JBQ0gsV0FBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsdUJBSUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUN0QkQsbUJBQVMsQ0FBQyw0QkFBWSxDQUFDLENBQUMiLCJmaWxlIjoiLi4vLi4vLi4vdW50cmFuc2xhdGFibGVzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwid3JhcFwiPlxuICAgICAgICA8aDE+SGVsbG8gV29ybGQhPC9oMT5cbiAgICAgICAgPGgzICpuZ0Zvcj1cIiN3b3JkIG9mIHdvcmRzXCI+e3sgd29yZC5uYW1lIH19PC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgcHVibGljIHdvcmQ6IFdvcmRbXTtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLndvcmRzID0gW1xuICAgICAgbmV3IFdvcmQoXCJQaXNhbiBaYXByYVwiLCAwKSxcbiAgICAgIG5ldyBXb3JkKFwiU2NoYWRlbmZyZXVkZVwiLCAxKSxcbiAgICAgIG5ldyBXb3JkKFwiQWdlLW90b3JpXCIsIDIpLFxuICAgICAgbmV3IFdvcmQoXCJCb2tldHRvXCIsIDMpXG4gICAgXTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV29yZCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBpZDogbnVtYmVyKSB7XG5cbiAgfVxufVxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
