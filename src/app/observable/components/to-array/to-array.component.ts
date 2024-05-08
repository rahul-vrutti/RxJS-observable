import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  standalone: true,
  imports: [],
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.scss'
})
export class ToArrayComponent implements OnInit {

  sourceSub: Subscription;
  users = [
    { name: 'Apple', color: 'Red' },
    { name: 'Banana', color: 'Yellow' },
    { name: 'Grapes', color: 'Green' },
    { name: 'Orange', color: 'Orange' },
  ]

  constructor() { }


  ngOnInit(): void {

    //Ex - 01
    const source = interval(1000);
    this.sourceSub = source.pipe(take(5), toArray())
      .subscribe(res => {
        console.log(res);
        // if(res >= 4){
        //   this.sourceSub.unsubscribe();
        // }
      });


    const source2 = from(this.users);
    source2.pipe(toArray())
      .subscribe(res => {
        console.log(res);
      });

    //Ex -03
    const source3 = of('Bus', 'Bike', 'Car', 'Train');
    source3.pipe(toArray())
      .subscribe(res => {
        console.log(res);
      })
  }

}
