import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, of } from 'rxjs';
import { DesignUtilityService } from '../../../appServices/design-utility.service';

@Component({
  selector: 'app-concat-map',
  standalone: true,
  imports: [],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.scss'
})
export class ConcatMapComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    
    const source = from(['Tech','Comedy','News']);

    //Ex - 01 | Map
    source.pipe(
      // map(res => )
    )
    .subscribe(res => {
      this.designUtility.print(res, 'elContainer1');
    })

    //Ex - 02 | Map + ConcatAll
    source.pipe(
      map(res => this.getData(res)),
      concatAll()
    )
    .subscribe(res => {
      this.designUtility.print(res, 'elContainer2');
    })

    //Ex - 03 | ConcatMap
    source.pipe(
      concatMap(res => this.getData(res))
    )
    .subscribe(res => {
      this.designUtility.print(res, 'elContainer3');
    })

  }

  getData(data) {
    return of(data + ' Video Uploaded').pipe(delay(2000));
  }

}
