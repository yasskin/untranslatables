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
                        new Word("Pisan Zapra", "The time needed to eat a banana", "images/pisan_zapra.jpg", 0),
                        new Word("Schadenfreude", "The satisfaction we find in another person’s failure or suffering.", "images/schadenfreude.png", 1),
                        new Word("Age-otori", "The feeling of looking worse after a haircut.", "images/age_otori.jpg", 2)
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <div class=\"wrap\">\n        <h1>Hello World!</h1>\n        <h3 *ngFor=\"#word of words\">\n        {{ word.name }}\n        \"{{ word.definition}}\"\n        <img src={{word.image}}>\n        </h3>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            Word = (function () {
                function Word(name, definition, image, id) {
                    this.name = name;
                    this.definition = definition;
                    this.image = image;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBRUU7b0JBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRzt3QkFDWCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsaUNBQWlDLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDO3dCQUN2RixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsb0VBQW9FLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDO3dCQUM5SCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsK0NBQStDLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO3FCQUNsRyxDQUFDO2dCQUNKLENBQUM7Z0JBckJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxxT0FTVDtxQkFDSixDQUFDOztnQ0FBQTtnQkFVRixtQkFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQsdUNBU0MsQ0FBQTtZQUVEO2dCQUNFLGNBQW1CLElBQVksRUFBUyxVQUFrQixFQUFTLEtBQWEsRUFBUyxFQUFVO29CQUFoRixTQUFJLEdBQUosSUFBSSxDQUFRO29CQUFTLGVBQVUsR0FBVixVQUFVLENBQVE7b0JBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFBUyxPQUFFLEdBQUYsRUFBRSxDQUFRO2dCQUVuRyxDQUFDO2dCQUNILFdBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELHVCQUlDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDekJELG1CQUFTLENBQUMsNEJBQVksQ0FBQyxDQUFDIiwiZmlsZSI6Ii4uLy4uLy4uL3VudHJhbnNsYXRhYmxlcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBjbGFzcz1cIndyYXBcIj5cbiAgICAgICAgPGgxPkhlbGxvIFdvcmxkITwvaDE+XG4gICAgICAgIDxoMyAqbmdGb3I9XCIjd29yZCBvZiB3b3Jkc1wiPlxuICAgICAgICB7eyB3b3JkLm5hbWUgfX1cbiAgICAgICAgXCJ7eyB3b3JkLmRlZmluaXRpb259fVwiXG4gICAgICAgIDxpbWcgc3JjPXt7d29yZC5pbWFnZX19PlxuICAgICAgICA8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwdWJsaWMgd29yZDogV29yZFtdO1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMud29yZHMgPSBbXG4gICAgICBuZXcgV29yZChcIlBpc2FuIFphcHJhXCIsIFwiVGhlIHRpbWUgbmVlZGVkIHRvIGVhdCBhIGJhbmFuYVwiLCBcImltYWdlcy9waXNhbl96YXByYS5qcGdcIiwgMCksXG4gICAgICBuZXcgV29yZChcIlNjaGFkZW5mcmV1ZGVcIiwgXCJUaGUgc2F0aXNmYWN0aW9uIHdlIGZpbmQgaW4gYW5vdGhlciBwZXJzb27igJlzIGZhaWx1cmUgb3Igc3VmZmVyaW5nLlwiLCBcImltYWdlcy9zY2hhZGVuZnJldWRlLnBuZ1wiLCAxKSxcbiAgICAgIG5ldyBXb3JkKFwiQWdlLW90b3JpXCIsIFwiVGhlIGZlZWxpbmcgb2YgbG9va2luZyB3b3JzZSBhZnRlciBhIGhhaXJjdXQuXCIsIFwiaW1hZ2VzL2FnZV9vdG9yaS5qcGdcIiwgMilcbiAgICBdO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXb3JkIHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGRlZmluaXRpb246IHN0cmluZywgcHVibGljIGltYWdlOiBzdHJpbmcsIHB1YmxpYyBpZDogbnVtYmVyKSB7XG5cbiAgfVxufVxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
