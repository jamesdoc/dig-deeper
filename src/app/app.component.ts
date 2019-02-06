import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public storage: Storage
  ) {
    storage.ready().then(() => {
      this.requestStudies();
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  requestStudies() {
    const ddUrl = 'https://jamesdoc.com/dev/base_data.json';
    let that = this;
    fetch(ddUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(ddJson) {
        that.storage.set('studies', ddJson.data);
      });
  }
}
