import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [NgFor],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {

  dataArr = [
    {id: 1, name: 'Aayush', gender: 'Male'},
    {id: 2, name: 'Krisha', gender: 'Female'},
    {id: 3, name: 'Renil', gender: 'Male'},
    {id: 4, name: 'Smit', gender: 'Male'},
    {id: 5, name: 'Riddhi', gender: 'Female'},
    {id: 6, name: 'Keval', gender: 'Male'},
    {id: 7, name: 'Sakshi', gender: 'Female'},
    {id: 8, name: 'Rajvi', gender: 'Female'},
    {id: 9, name: 'Jeel', gender: 'Male'},
  ];

  data;
  data2;
  data3;
  gender:string;

  constructor() {}

  ngOnInit(): void {

    const source = from(this.dataArr);

    //Ex - 01 Filter by Length
    source.pipe(
      filter(member => member.name.length > 5),
      toArray()
      )
    .subscribe(res => {
      console.log(res);
      this.data = res;
    });

    //Ex - 02 Filter by Gender
    // source.pipe(
    //   filter(member => member.gender === this.gender),
    //   toArray()
    //   )
    // .subscribe(res => {
    //   console.log(res);
    //   this.data2 = res;
    // });
    this.filterData();

    //Ex - 03 Filter by nth Item
    source.pipe(
      filter(member => member.id < 6),
      toArray()
      )
    .subscribe(res => {
      console.log(res);
      this.data3 = res;
    });
    
  }

  filterData(): void{
    const source = from(this.dataArr);

    source.pipe(
      filter(member => !this.gender || member.gender === this.gender),
      toArray()
    )
      .subscribe(res => {
        console.log(res);
        this.data2 = res;
      });
  }

  selectMale(){
    this.gender = 'Male';
    this.filterData();
  }
  selectFemale(){
    this.gender = 'Female';
    this.filterData();
  }

}
