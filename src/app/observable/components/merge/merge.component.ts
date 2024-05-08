import { Component } from '@angular/core';
import { DesignUtilityService } from '../../../appServices/design-utility.service';
import { interval, map, merge, take } from 'rxjs';

@Component({
  selector: 'app-merge',
  standalone: true,
  imports: [],
  templateUrl: './merge.component.html',
  styleUrl: './merge.component.scss'
})
export class MergeComponent {

  constructor(private designUtility: DesignUtilityService) {}


  ngOnInit(): void {
    
    const sourceTech = interval(4000).pipe( map(v => 'Tech Video #' + (v+1)), take(5) );
    const sourceComedy = interval(2000).pipe( map(v => 'Comedy Video #' + (v+1)), take(3) );
    const sourceNews = interval(1000).pipe( map(v => 'News Video #' + (v+1)), take(4) );

    const finalObs = merge(sourceTech, sourceComedy, sourceNews)

    finalObs.subscribe(res => {
      // console.log(res);
      this.designUtility.print(res, 'elContainer');
    })
  }

}
