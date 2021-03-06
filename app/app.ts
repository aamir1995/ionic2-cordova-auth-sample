/// <reference path="../typings/index.d.ts" />


import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyAT0BBcpHqivnm61gDpA7xDatItE4bnM0w",
    authDomain: "ionicauthsample-3e319.firebaseapp.com",
    databaseURL: "https://ionicauthsample-3e319.firebaseio.com",
    storageBucket: "ionicauthsample-3e319.appspot.com",
  })
]);
