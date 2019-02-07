import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { sortBy } from 'lodash';

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
    this.initializeStorage();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  requestStudies() {
    const ddUrl = 'http://127.0.0.1:8080/base_data.json';
    let that = this;
    fetch(ddUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(ddJson) {
        const sortedWeeks = sortBy(ddJson.data, 'week');
        that.storage.set('weeks', sortedWeeks);
      });
  }

  initializeStorage() {
    this.storage.get('lastCompleted').then((value) => {
      if (value == undefined || value == null) {
        this.storage.set('lastCompleted', {
          'week': 0,
          'day': -1
        });
      }
    });

    this.storage.get('completedStudies').then((value) => {
      if (value == undefined || value == null) {
        this.storage.set('completedStudies', {});
        // example structure:
        // {
        //   0: [0, 1, 2, 3, 4],
        //   1: [0, 1, 2, 3],
        //   3: [0, 3, 4]
        // }
      }
    });
  }

  getCurrentStudy(): {week: number; day: number} {
    let study = this.storage.get('lastCompleted') as unknown as {week: number; day: number}
    while (!this.studyIsCompleted(study.week, study.day)) {
      study.day++;
      if (study.day >= 5) {
        // wrap to next week
        study.week++;
        study.day = 0;
      }
    }
    return study;
  }

  studyIsCompleted(week: number, day: number): boolean {
    let studies = this.storage.get('completedStudies')
    if (studies.hasOwnProperty(week)) {
      return false;
    }
    return studies[week].indexOf(day) > -1;
  }

  completeStudy(week: number, day: number) {
    this.storage.get('completedStudies').then((studies) => {
      if (studies.hasOwnProperty(week)) {
        // TODO: check if day is already marked as completed.
        studies[week].push(day);
      } else {
        studies[week] = [day];
      }
      this.storage.set('completedStudies', studies);
    });
  }
}
