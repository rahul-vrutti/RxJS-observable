import { Component, OnInit } from '@angular/core';
import { from, interval, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from '../../../appServices/design-utility.service';

@Component({
  selector: 'app-merge-map',
  standalone: true,
  imports: [],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss'
})
export class MergeMapComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    
    const source = from(['Tech','Comedy','News']);

    //Ex - 01 Map
    source.pipe(
      map(res => this.getData(res))
    )
    .subscribe(res => res.subscribe(res2 => {
      // console.log(res);
      this.designUtility.print(res2, 'elContainer1');
    }));

    //Ex - 02 | Map + MergeAll
    source.pipe(
      map(res => this.getData(res)),
      mergeAll()
    )
    .subscribe(res => {
      // console.log(res);
      this.designUtility.print(res, 'elContainer2');
    });

    //Ex - 03 | MergeMap
    source.pipe(
      mergeMap(res => this.getData(res))
    )
    .subscribe(res => {
      console.log(res);
      this.designUtility.print(res, 'elContainer3');
    });

  }

  


  getData(data) {
    return of(data + ' Video Uploaded')
  }

}
