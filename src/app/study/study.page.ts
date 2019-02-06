import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-study',
  templateUrl: './study.page.html',
  styleUrls: ['./study.page.scss'],
})

export class StudyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  markAsComplete() {
    console.log('TODO: Register study as complete');
    this.router.navigateByUrl('/');
  }

}
