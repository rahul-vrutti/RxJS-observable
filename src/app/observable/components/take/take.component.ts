import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from '../../../appServices/design-utility.service';

@Component({
  selector: 'app-take',
  standalone: true,
  imports: [],
  templateUrl: './take.component.html',
  styleUrl: './take.component.scss'
})
export class TakeComponent implements OnInit {

  randomNames = ['Apple', 'Banana', 'Grapes', 'Orange', 'Strawberry', 'Watermellon', 'Cherry', 'Guava', 'Juciy'];

  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    
    const nameSource = from(this.randomNames);

    //Ex - 01
    nameSource.pipe(take(4))
    .subscribe(res => {
      // console.log(res);
      this._designUtility.print(res, 'elContainer');
    });

    //Ex - 02
    nameSource.pipe(takeLast(4))
    .subscribe(res => {
      // console.log(res);
      this._designUtility.print(res, 'elContainer2');
    });

    //Ex - 03
    const source = interval(1000);

    let condition1 = timer(4000);
    // let condition2 = fromEvent(document, 'click');

    source.pipe(
      takeUntil(condition1)
    )
    .subscribe(res => {
      console.log(res);
      this._designUtility.print(res, 'elContainer3');
    });
  }

}
