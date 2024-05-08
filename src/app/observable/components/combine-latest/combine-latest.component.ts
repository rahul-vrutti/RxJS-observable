import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, forkJoin, fromEvent, map, take, withLatestFrom, zip } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  standalone: true,
  imports: [NgFor],
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.scss'
})
export class CombineLatestComponent implements OnInit, AfterViewInit {

  nameSource = ['Name','Apple', 'Banana', 'Grapes', 'Orange', 'Guava', 'Cherry'];
  colorSource = ['Color','red', 'green', 'orange', 'yellow', 'purple', 'blue'];

  //templet reference
  @ViewChild('name') name:ElementRef;
  @ViewChild('color') color:ElementRef;

  constructor() {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(map(event => event.target.value));
    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(map(event => event.target.value));

    //for ForkJoin use below with take for complete the stream
    // const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(map(event => event.target.value), take(4));  
    // const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(map(event => event.target.value), take(2));

    //Ex-01 Combine Latest
    combineLatest(nameObs,colorObs).subscribe(([name, color]) => {
      // console.log(name, color);
      this.createBox(name, color, 'elContainer');
    });

    //Ex-02 WithLatestFrom master:nameObs  slave:colorObs
    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name, color]) => {
      this.createBox(name, color, 'elContainer2');
    });

    //Ex-03 Zip
    zip(nameObs,colorObs).subscribe(([name, color]) => {
      // console.log(name, color);
      this.createBox(name, color, 'elContainer3')
    });

    //Ex-03 Forkjoin
    forkJoin(nameObs,colorObs).subscribe(([name, color]) => {
      // console.log(name, color);
      this.createBox(name, color, 'elContainer4');
    });

  }

  createBox(name, color, containerId){
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute("class", color);
    document.getElementById(containerId).appendChild(el);
  }

}
