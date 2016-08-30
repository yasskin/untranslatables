///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {WordService} from './words/word.service';
import {ROUTER_PROVIDERS} from "angular2/router";
import {LocationStrategy, HashLocationStrategy} from "angular2/router";
import {provide} from "angular2/core";

bootstrap(AppComponent, [WordService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
