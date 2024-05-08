import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pluck.component.html',
  styleUrl: './pluck.component.scss'
})
export class PluckComponent implements OnInit {

  constructor() {}

  user = [
    {name: 'Ayush', skills: 'Angular', job: {title: 'MEAN Developer', exp: '2 years'}},
    {name: 'Smit', skills: 'React', job: {title: 'Frontend Developer', exp: '1 years'}},
    {name: 'Keval', skills: 'ViewJs', job: {title: 'Frontend Developer', exp: 'Freasher'}},
    {name: 'Renil', skills: 'NextJs', job: {title: 'Fullstack Developer', exp: '2 years'}},
  ];
  data;
  data2;

  ngOnInit(): void {

    //Ex - 01
    from(this.user).pipe(
      // map(data => data.name),
      pluck('name'),
      toArray()
    )
    .subscribe(res => {
      // console.log(res);
      this.data = res;
    });

    //Ex - 02
    from(this.user).pipe(
      // map(data => data.name),
      map(x => x?.job?.title),
      toArray()
    )
    .subscribe(res => {
      // console.log(res);
      this.data2 = res;
    });
    
  }

}
