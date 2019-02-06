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
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public storage: Storage,
  ) {
    storage.ready().then(() => {
      this.getMediaPreference();
    });
  }

  getCurrentStudy() {
    this.storage.get('currentStudy').then((val) => {
      if (val != null) {
        this.data = val;
      }
    });
  }

  getMediaPreference() {
    this.storage.get('preferType').then((val) => {
      if (val != null) {
        this.mediaType = val;
      }
    });
  }

  ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('day');

      if (this.id) {
          // console.log(this.id);
          this.storage.get('studies').then((data) => {
              data.forEach((week) => {
                  week.studies.forEach((study) => {
                      if (study.id === this.id) {
                          this.data = study;
                      }
                  })
              })
          })
      } else {
        this.getCurrentStudy();
      }
  }

  markAsComplete() {
    console.log('TODO: Register study as complete');
    this.router.navigateByUrl('/',);
  }

}
