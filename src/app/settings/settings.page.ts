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

  constructor() { }

  ngOnInit() {
    storage.get('wantAutoDownload').then((val) => {
      this.wantAutoDownload = val;
    });
    storage.get('wantReminder').then((val) => {
      this.wantReminder = val;
    });
    storage.get('AutoReminderTime').then((val) => {
      this.AutoReminderTime = val;
    });
    storage.get('preferType').then((val) => {
      this.preferType = val;
    });
  }

  save() {
    storage.set('wantAutoDownload', this.wantAutoDownload);
    storage.set('wantReminder', this.wantReminder);
    storage.set('AutoReminderTime', this.AutoReminderTime);
    storage.set('preferType', this.preferType);
    alert('test');
  }

  toggleReminder() {
    this.wantReminder = !this.wantReminder;
  }

  toggleAutoDownload() {
    this.wantAutoDownload = !this.wantAutoDownload;
  }

}
