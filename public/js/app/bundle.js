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
                        template: "\n      <div class=\"wrap\">\n        <h1>Untranslatable Words</h1>\n        <div class=\"word\">\n          <h3 *ngFor=\"#word of words\">\n          {{ word.name }}\n          \"{{ word.definition}}\"\n          <img src={{word.image}}>\n          </h3>\n        <div>\n      </div>\n    "
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUVFO29CQUNFLElBQUksQ0FBQyxLQUFLLEdBQUc7d0JBQ1gsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLGlDQUFpQyxFQUFFLHdCQUF3QixFQUFFLENBQUMsQ0FBQzt3QkFDdkYsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLG9FQUFvRSxFQUFFLDBCQUEwQixFQUFFLENBQUMsQ0FBQzt3QkFDOUgsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLCtDQUErQyxFQUFFLHNCQUFzQixFQUFFLENBQUMsQ0FBQztxQkFDbEcsQ0FBQztnQkFDSixDQUFDO2dCQXZCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsb1NBV1Q7cUJBQ0osQ0FBQzs7Z0NBQUE7Z0JBVUYsbUJBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTtZQVRELHVDQVNDLENBQUE7WUFFRDtnQkFDRSxjQUFtQixJQUFZLEVBQVMsVUFBa0IsRUFBUyxLQUFhLEVBQVMsRUFBVTtvQkFBaEYsU0FBSSxHQUFKLElBQUksQ0FBUTtvQkFBUyxlQUFVLEdBQVYsVUFBVSxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBUTtnQkFFbkcsQ0FBQztnQkFDSCxXQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCx1QkFJQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztZQzNCRCxtQkFBUyxDQUFDLDRCQUFZLENBQUMsQ0FBQyIsImZpbGUiOiIuLi8uLi8uLi91bnRyYW5zbGF0YWJsZXMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwXCI+XG4gICAgICAgIDxoMT5VbnRyYW5zbGF0YWJsZSBXb3JkczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3b3JkXCI+XG4gICAgICAgICAgPGgzICpuZ0Zvcj1cIiN3b3JkIG9mIHdvcmRzXCI+XG4gICAgICAgICAge3sgd29yZC5uYW1lIH19XG4gICAgICAgICAgXCJ7eyB3b3JkLmRlZmluaXRpb259fVwiXG4gICAgICAgICAgPGltZyBzcmM9e3t3b3JkLmltYWdlfX0+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPGRpdj5cbiAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgcHVibGljIHdvcmQ6IFdvcmRbXTtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLndvcmRzID0gW1xuICAgICAgbmV3IFdvcmQoXCJQaXNhbiBaYXByYVwiLCBcIlRoZSB0aW1lIG5lZWRlZCB0byBlYXQgYSBiYW5hbmFcIiwgXCJpbWFnZXMvcGlzYW5femFwcmEuanBnXCIsIDApLFxuICAgICAgbmV3IFdvcmQoXCJTY2hhZGVuZnJldWRlXCIsIFwiVGhlIHNhdGlzZmFjdGlvbiB3ZSBmaW5kIGluIGFub3RoZXIgcGVyc29u4oCZcyBmYWlsdXJlIG9yIHN1ZmZlcmluZy5cIiwgXCJpbWFnZXMvc2NoYWRlbmZyZXVkZS5wbmdcIiwgMSksXG4gICAgICBuZXcgV29yZChcIkFnZS1vdG9yaVwiLCBcIlRoZSBmZWVsaW5nIG9mIGxvb2tpbmcgd29yc2UgYWZ0ZXIgYSBoYWlyY3V0LlwiLCBcImltYWdlcy9hZ2Vfb3RvcmkuanBnXCIsIDIpXG4gICAgXTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV29yZCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBkZWZpbml0aW9uOiBzdHJpbmcsIHB1YmxpYyBpbWFnZTogc3RyaW5nLCBwdWJsaWMgaWQ6IG51bWJlcikge1xuXG4gIH1cbn1cbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
