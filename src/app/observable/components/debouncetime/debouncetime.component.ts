import { NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debouncetime',
  standalone: true,
  imports: [NgIf],
  templateUrl: './debouncetime.component.html',
  styleUrl: './debouncetime.component.scss'
})
export class DebouncetimeComponent implements OnInit, AfterViewInit {

  reqData = null;
  reqData2 = null;

  @ViewChild('myInput') myInput:ElementRef;
  @ViewChild('myInput2') myInput2:ElementRef;

  constructor() {}
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {

    //Ex - 01 Debounce Time
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500)
    );
    searchTerm.subscribe(res => {
      console.log(res)
      this.reqData = res;

      setTimeout(() => {
        this.reqData = null;
      },2000)
    });

    //Ex - 01 Distinct Until Changed
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );
    searchTerm2.subscribe(res => {
      console.log(res)
      this.reqData2 = res;

      setTimeout(() => {
        this.reqData2 = null;
      },2000)
    });
  }

}
