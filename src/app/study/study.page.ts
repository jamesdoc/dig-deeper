import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-study',
  templateUrl: './study.page.html',
  styleUrls: ['./study.page.scss'],
})

export class StudyPage implements OnInit {
  private data = null;
  private mediaType;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public storage: Storage,
  ) {
    storage.ready().then(() => {
      this.getMediaPreference();
      this.getCurrentStudy();
    });
  }

  getMediaPreference() {
    this.storage.get('preferType').then((val) => {
      if (val != null) {
        this.mediaType = val;
      }
    });
  }

  ngOnInit() {}

  markAsComplete() {
    console.log('TODO: Register study as complete');
    this.router.navigateByUrl('/',);
  }

}
