import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../../../appServices/design-utility.service';
import { resolve } from 'path';

@Component({
  selector: 'app-of-from',
  standalone: true,
  imports: [],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.scss'
})
export class OfFromComponent implements OnInit {

  obsMsg:any;

  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    
    // OF
    const obs1 = of('Apple', 'Banana', 'Grapes', 'Guava');

    obs1.subscribe(res => {
      // console.log(res);
      this._designUtility.print(res, 'elContainer');
    });

    const obs2 = of({a: 'Apple', b: 'Banana', c: 'Grapes', d: 'Guava'});

    obs2.subscribe(res => {
      // console.log(res);
      this.obsMsg = res;
    });


    //From-Array
    const obs3 = from(['Bike', 'Car', 'Cycle', 'Train']);
    obs3.subscribe(res => {
      // console.log(res)
      this._designUtility.print(res, 'elContainer3')
    });

    //From-Promise
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise Resolve')
      },4000)
    })
    promise.then(res => {
      // console.log(res);
    });
    const obs4 = from(promise);
    obs4.subscribe(res => {
      // console.log(res)
      this._designUtility.print(res, 'elContainer4')
    });

    //From-String
    const obs5 = from("RxJx");
    obs5.subscribe(res => {
      // console.log(res)
      this._designUtility.print(res, 'elContainer5')
    });
  }

}
