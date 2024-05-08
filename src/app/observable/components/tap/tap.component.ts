import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DesignUtilityService } from '../../../appServices/design-utility.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-tap',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.scss'
})
export class TapComponent implements OnInit {

  
  myColor:string;

  constructor(private _designUitility: DesignUtilityService) {}

  ngOnInit(): void {
    let obsSubscription: Subscription;
    const source = interval(1000);
    
    //Ex - 01
    const Arr = ['Apple', 'Banana', 'Grapes', 'Orange'];

    obsSubscription = source.pipe(
      tap(res => {
        if(res == Arr.length){
          obsSubscription.unsubscribe();
        }
      }),
      map(res => Arr[res])
      )
    .subscribe(res => {
      console.log(res)
      this._designUitility.print(res, 'elContainer');
    });

    //Ex - 01
    const Colors = ['Red', 'Green', 'Yellow', 'Purple', 'Orange', 'Blue'];
    let obsSubscription2: Subscription;
    obsSubscription2 = source.pipe(
      tap(res => {
        this.myColor = Colors[res]
        if(res == Colors.length){
          obsSubscription2.unsubscribe();
        }
      }),
      map(res => Colors[res])
      )
    .subscribe(res => {
      console.log(res)
      this._designUitility.print(res, 'elContainer2');
    });
  }

}
