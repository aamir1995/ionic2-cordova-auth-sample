import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public platform: Platform) {

  }

  init() {

    Facebook.browserInit(534056820133273)
  }

  getAccessToken() {
    this.platform.ready()
      .then(() => {
        Facebook.getAccessToken()
          .then((token) => console.log('access token', token))
          .catch((err) => console.log(err))
      })

  }

  loginWithFb() {

    // console.log('ashdkjha')
    this.platform.ready()
      .then(() => {
        Facebook.login(['email'])
          .then((result: FacebookLoginResponse) => {

            console.log("Facebook success: " + JSON.stringify(result));
            // let provider = firebase.auth.FacebookAuthProvider['credential'](result.authResponse.accessToken);

            // firebase.auth().signInWithCredential(provider)
            //   .then((success) => {
            //     console.log("Firebase success: " + JSON.stringify(success));
            //   })
            //   .catch((error) => {
            //     console.log("Firebase failure: " + JSON.stringify(error));
            //   });
          })
          .catch((err) => { console.log('err accured', err) })
      })
  }


  getStatus() {
    Facebook.getLoginStatus()
      .then((status) => { console.log('status', status) })
      .catch((err) => { err })
  }

}
