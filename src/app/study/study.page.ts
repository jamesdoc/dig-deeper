import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {VgAPI, VgStates} from 'videogular2/core';


@Component({
  selector: 'app-study',
  templateUrl: './study.page.html',
  styleUrls: ['./study.page.scss'],
})



export class StudyPage implements OnInit {
  private data = null;
  private mediaType;
  private id: string;

  @Input() vgFor: string;
  private api: VgAPI;
  private target: any;
  private showOverlay: boolean;
  private timer: NodeJS.Timeout;

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
    this.showOverlay = true;
    this.id = this.route.snapshot.paramMap.get('day');
    if (this.id) {
        // console.log(this.id);
        this.storage.get('studies').then((data) => {
            data.forEach((week) => {
                week.studies.forEach((study) => {
                    if (study.id === this.id) {
                        this.data = study;
                    }
                });
            });
        });
    } else {
      this.getCurrentStudy();
    }
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.target = this.api.getMediaById(this.vgFor);
  }

  markAsComplete() {
    console.log('TODO: Register study as complete');
    this.router.navigateByUrl('/',);
  }


  onClick() {
    const state = this.getState();
    switch (state) {
        case VgStates.VG_PLAYING:
            if (this.showOverlay) {
              clearTimeout(this.timer);
              this.target.pause();
            } else {
              this.toggleOverlay();
              this.showOverlay = true;
              this.timer = setTimeout(() => {
                this.toggleOverlay();
                this.showOverlay = false;
              }, 5000);
            }
            break;

        case VgStates.VG_PAUSED:
        case VgStates.VG_ENDED:
            this.target.play();
            if (this.showOverlay) {
              this.showOverlay = false;
              this.timer = setTimeout(() => this.toggleOverlay(), 3000);
            }
            break;
    }
}

toggleOverlay() {
  document.querySelector('vg-controls').classList.toggle('hide');
  document.querySelector('.vg-icon-play_arrow').classList.toggle('hide');
}

readTranscript() {
  document.querySelector('vg-player').classList.toggle('hide');
}



getState() {
    let state = VgStates.VG_PAUSED;

    if (this.target) {
        if (this.target.state instanceof Array) {
            for (let i = 0, l = this.target.state.length; i < l; i++) {
                if (this.target.state[ i ] === VgStates.VG_PLAYING) {
                    state = VgStates.VG_PLAYING;
                    break;
                }
            }
        } else {
            state = this.target.state;
        }
    }
    return state;
}


}
