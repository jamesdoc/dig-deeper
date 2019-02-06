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
}
