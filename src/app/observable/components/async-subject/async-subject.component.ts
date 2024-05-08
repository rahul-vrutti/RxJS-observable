import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../../appServices/design-utility.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.scss'
})
export class AsyncSubjectComponent implements OnInit {

  asyncVideoEmit;

  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit(): void {

    this._designUtility.asyncVideoEmit.subscribe(res => {
      this.asyncVideoEmit = res;
    })
  }

  onVideoAdd(video) {
    console.log(video)
    this._designUtility.asyncVideoEmit.next(video);
  }

  //Complete Subscription
  onComplete() {
    this._designUtility.asyncVideoEmit.complete();
  }

}
