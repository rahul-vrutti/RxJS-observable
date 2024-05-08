import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../../appServices/design-utility.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.scss'
})
export class ReplaySubjectComponent implements OnInit {

  user1List = [
    'Angular 1',
    'Angular 2',
  ];
  user2List = [];
  user3List = [];

  //SubscribeModes
  subscribeMode2:boolean = false;
  subscribeMode3:boolean = false;

  //subscription
  subscription2:Subscription;
  subscription3:Subscription;

  //toogle properties
  methodInterval:boolean = false;
  intSubscription:Subscription;

  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    
    this._designUtility.videoEmit.subscribe(res => {
      this.user1List.push(res);
    })
  }

  onVideoAdd(video) {
    console.log(video)
    this._designUtility.videoEmit.next(video);
  }

  //user 2 subscribe
  user2Subscribe() {
    if(this.subscribeMode2){
      this.subscription2.unsubscribe();
    }
    else{
      this.subscription2 = this._designUtility.videoEmit.subscribe(res => {
        this.user2List.push(res);
      });
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }
  //user 3 subscribe
  user3Subscribe() {
    if(this.subscribeMode3){
      this.subscription3.unsubscribe();
    }
    else{
      this.subscription3 = this._designUtility.videoEmit.subscribe(res => {
        this.user3List.push(res);
      });
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  //toggle method
  toggleMethod() {
    const broadCastVideo = interval(1000);

    if(!this.methodInterval){
      this.intSubscription = broadCastVideo.subscribe(res => {
        // console.log(res);
        this._designUtility.videoEmit.next('Video '+res);
      })
    }
    else{
      this.intSubscription.unsubscribe();
    }
    
    this.methodInterval = !this.methodInterval;
  }

}
