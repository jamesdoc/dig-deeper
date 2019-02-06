import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  private studies;
  private isShowSubMenu;
  
  constructor(
    public storage: Storage,
    public navCtrl: NavController,
  ) {
    storage.ready().then(() => {
      this.storage.get('studies').then((s) => {
        this.studies = s;
      });
    });
  }

  ngOnInit() { }

  weekClick(item) {
    // Ugly hack for now will show/hide all submenus
    this.isShowSubMenu = !this.isShowSubMenu;
  }

  studyClick(item) {
    this.storage.set('currentStudy', item);
    this.navCtrl.navigateForward('study');
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
