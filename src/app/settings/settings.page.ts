import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public wantAutoDownload: boolean = false;
  public wantReminder: boolean = false;
  public AutoReminderTime: string = "08:15";
  public preferType: string = "video";
  private myStorage: Storage;

  constructor(private storage: Storage) {
    this.myStorage = storage;
  }

  ngOnInit() {
    this.myStorage.get('wantAutoDownload').then((val) => {
      if (val != null) {
        this.wantAutoDownload = val;
      }
    });
    this.myStorage.get('wantReminder').then((val) => {
      if (val != null) {
        this.wantReminder = val;
      }
    });
    this.myStorage.get('AutoReminderTime').then((val) => {
      if (val != null) {
        this.AutoReminderTime = val;
      }
    });
    this.myStorage.get('preferType').then((val) => {
      if (val != null) {
        this.preferType = val;
      }
    });
  }

  public save() {
    this.myStorage.set('wantAutoDownload', this.wantAutoDownload);
    this.myStorage.set('wantReminder', this.wantReminder);
    this.myStorage.set('AutoReminderTime', this.AutoReminderTime);
    this.myStorage.set('preferType', this.preferType);
  }

}
