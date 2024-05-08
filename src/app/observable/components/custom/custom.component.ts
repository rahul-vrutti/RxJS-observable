import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../../appServices/design-utility.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [NgClass],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss'
})
export class CustomComponent implements OnInit, OnDestroy {

  techStatus:any;
  techStatus2:any;
  subs2:Subscription;
  names;

  constructor(private _designUtility:DesignUtilityService) {}

  ngOnDestroy(): void {
    // this.subs2.unsubscribe();
  }
  
  ngOnInit(): void {
    //Ex -01 (Manual)
    const cusObs1 = new Observable(observer => {
      setTimeout(() => {
        observer.next('Angular')
      }, 1000);
      setTimeout(() => {
        observer.next('Typescript')
      }, 2000);
      setTimeout(() => {
        observer.next('Html & Css');
        // observer.error("Limit Exced")
        
      }, 3000);
      setTimeout(() => {
        observer.next('RxJx');
        observer.complete();
      }, 4000);
      
    })

    cusObs1.subscribe((res) => {
      // console.log(res)
      this._designUtility.print(res, 'elContainer')
    },
    (err) => {
      this.techStatus='error'
    },
    () => {
      this.techStatus = 'completed'
    });


    // Ex -02 (Custom Interval)
    const Arr2 = ['Angular', 'Javascript', 'Html', 'Css', 'Typescript']
    const cusObs2 = new Observable(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(Arr2[count]);
        count++;

        if(count>=4){
          // observer.complete();
          observer.error();
        }
      }, 1000)
    });

    this.subs2 = cusObs2.subscribe(res=>{
      // console.log(res);
      this._designUtility.print(res, 'elContainer2');
    },
    (err) => {
      this.techStatus2 = 'error'
    },
    () => {
      this.techStatus2 = 'completed'
    });


    //Ex -03(Random Names)
    const Arr3 = ['Apple', 'Banana', 'Grapes', 'Guava', 'Orange', 'Pinaple', 'Strawberry', 'Watermellon', 'Berry']
    const cusObs3 = new Observable(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(Arr3[count]);
        count++;

        if(count>=9){
          observer.complete();
          // observer.error();
        }
      }, 1000)
    });

    cusObs3.subscribe(res => {
      // console.log(res)
      this.names = res;
    })

  }

}
