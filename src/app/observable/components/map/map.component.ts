import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { DesignUtilityService } from '../../../appServices/design-utility.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {

  //subscription 
  sub1: Subscription;
  sub2: Subscription;

  //messages
  msg1;
  msg2;

  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    
    const broadCastVideo = interval(1000);

    //Ex - 01
    this.sub1 = broadCastVideo.pipe(
      map(data => 'Video ' + data)
    )
    .subscribe(res => {
      // console.log(res);
      this.msg1 = res;
    });

    setTimeout(()=>{
      this.sub1.unsubscribe();
    },10000);

    //Ex - 02
    this.sub2 = broadCastVideo.pipe(map(data => data * 3))
    .subscribe(res => {
      // console.log(res);
      this.msg2 = res;
    });

    setTimeout(()=>{
      this.sub2.unsubscribe();
    },10000);

    //Ex - 03
    const fruits = [
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Banana'},
      {id: 3, name: 'Grapes'},
      {id: 4, name: 'Strawberry'},
      {id: 5, name: 'Cherry'},
      {id: 6, name: 'Orange'},
      {id: 7, name: 'Guava'},
      {id: 8, name: 'Pinaple'},
      {id: 9, name: 'Watermellon'},
    ];

    let fruitObs = from(fruits);

    fruitObs.pipe(
      map(data => data.name)
    )
    .subscribe(res => {
      // console.log(res);
      this._designUtility.print(res, 'elContainer')
    })

  }

}
