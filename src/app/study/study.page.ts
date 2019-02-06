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
  private overlayVisble: boolean;
  private timerOverlay: NodeJS.Timeout;
  private timerReadButton: NodeJS.Timeout;

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
    this.overlayVisble = true;
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
            clearTimeout(this.timerOverlay);
            clearTimeout(this.timerReadButton);
            if (this.overlayVisble) {
              this.target.pause();
              document.querySelector('.vg-custom-overlay .overlay-play-container').classList.replace('vg-icon-pause', 'vg-icon-play_arrow');
            } else {
              this.showOverlay();
              this.showReadButton();
              this.overlayVisble = true;
              this.timerOverlay = setTimeout(() => {
                this.hideOverlay();
              }, 5000);
              this.timerReadButton = setTimeout(() => {
                this.hideReadButton();
              }, 8000);
            }
            break;

        case VgStates.VG_PAUSED:
        case VgStates.VG_ENDED:
            this.target.play();
            document.querySelector('.vg-custom-overlay .overlay-play-container').classList.replace('vg-icon-play_arrow', 'vg-icon-pause');
            if (this.overlayVisble) {
              this.timerOverlay = setTimeout(() => this.hideOverlay(), 3000);
              this.timerOverlay = setTimeout(() => this.hideReadButton(), 6000);
            }
            break;
    }
}

hideOverlay() {
  document.querySelector('vg-controls').classList.add('hide');
  document.querySelector('.vg-custom-overlay .overlay-play-container').classList.add('hide');
  this.overlayVisble = false;
}

showOverlay() {
  document.querySelector('vg-controls').classList.remove('hide');
  document.querySelector('.vg-custom-overlay .overlay-play-container').classList.remove('hide');
  this.overlayVisble = true;
}

showReadButton() {
  document.querySelector('ion-button.read').classList.remove('hide');
  this.readButtonVisible = false;
}
hideReadButton() {
  document.querySelector('ion-button.read').classList.add('hide');
  this.readButtonVisible = true;
}

toggleVideo() {
  document.querySelector('vg-player').classList.toggle('hide');
  document.querySelector('ion-button.watch').classList.toggle('hide');
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
