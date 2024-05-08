import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, interval, map, mergeAll, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { DesignUtilityService } from '../../../appServices/design-utility.service';

@Component({
  selector: 'app-switch-map',
  standalone: true,
  imports: [],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss'
})
export class SwitchMapComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    
    const source = from(['Tech','Comedy','News']);

    //Ex - 01 Map
    source.pipe(
      map(data => this.getData(data))
    )
    .subscribe(res => res.subscribe(res2 => {
      // console.log(res);
      this.designUtility.print(res2, 'elContainer1');
    }));

    //Ex - 02 | Map + SwitchAll
    source.pipe(
      map(res => this.getData(res)),
      switchAll()
    )
    .subscribe(res => {
      // console.log(res);
      this.designUtility.print(res, 'elContainer2');
    });

    //Ex - 03 | SwitchMap
    source.pipe(
      switchMap(res => this.getData(res))
    )
    .subscribe(res => {
      // console.log(res);
      this.designUtility.print(res, 'elContainer3');
    });
    //Ex - 04 | MergeMap
    source.pipe(
      mergeMap(res => this.getData(res))
    )
    .subscribe(res => {
      // console.log(res);
      this.designUtility.print(res, 'elContainer4');
    });
    //Ex - 05 | ConcatMap
    source.pipe(
      concatMap(res => this.getData(res))
    )
    .subscribe(res => {
      // console.log(res);
      this.designUtility.print(res, 'elContainer5');
    });

  }

  getData(data) {
    return of(data + ' Video Uploaded').pipe(delay(1000));
  }


}
