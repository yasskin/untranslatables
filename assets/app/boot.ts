///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {WordService} from './words/word.service';
import {ROUTER_PROVIDERS} from "angular2/router";

bootstrap(AppComponent, [WordService, ROUTER_PROVIDERS]);
