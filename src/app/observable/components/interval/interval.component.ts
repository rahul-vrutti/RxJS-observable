import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from '../../../appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent implements OnInit {

  obsMsg:any;
  videoSubscription: Subscription;

  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    
    // const brodcastVideos = interval(1000);
    const brodcastVideos = timer(4000, 1000);

    this.videoSubscription = brodcastVideos.subscribe(res => {
      // console.log(res);
      this.obsMsg = 'Video ' + (res+1);
      this._designUtility.print(this.obsMsg, 'elContainer');
      this._designUtility.print(this.obsMsg, 'elContainer2');

      if(res>=8){
        this.videoSubscription.unsubscribe();
      }
    })
  }

}
