import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();
  // userName = new Subject<string>();
  userName = new BehaviorSubject<string>('Default');

  videoEmit = new ReplaySubject<string>(4, 10000);

  asyncVideoEmit = new AsyncSubject();

  constructor() { }

  print(val:any, containerId:any){
    let element = document.createElement('li');
    element.innerText = val;
    document.getElementById(containerId)?.appendChild(element);
  }

  print2(val:any, containerId:any){
    let element = document.createElement('div');
    element.setAttribute('class', 'item');
    element.innerHTML = val;
    document.getElementById(containerId)?.prepend(element);
  }

}
