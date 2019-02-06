import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  private studies;
  
  constructor(
    public storage: Storage
  ) {
    storage.ready().then(() => {
      this.storage.get('studies').then((s) => {
        console.log(s);
        this.studies = s;
      });
    });
  }

  ngOnInit() { }

  weekClick(item) {
    console.log('click!');
    console.log(arguments);
  }

  weekIcon(study) {
    //todo: check against user data if study is complete

    switch (study.week) {
      case 'Week 1':
      case 'Week One':
        return 'checkmark-circle-outline';
      case 'Week 2':
      case 'Week Two':
        return 'bookmark';
      default:
        return 'radio-button-off';
    }
  }

  isDownloaded(study) {
    //todo: check against user data if study is complete

    switch (study.week) {
      case 'Week 1':
      case 'Week One':
          return false;
      case 'Week 2':
      case 'Week Two':
          return true;
      default:
          return true;
    }
  }
}
