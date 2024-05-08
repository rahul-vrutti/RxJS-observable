import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../../appServices/design-utility.service';
import { Comp1Component } from "../../../components/comp1/comp1.component";
import { Comp2Component } from "../../../components/comp2/comp2.component";
import { Comp3Component } from "../../../components/comp3/comp3.component";

@Component({
    selector: 'app-subject',
    standalone: true,
    templateUrl: './subject.component.html',
    styleUrl: './subject.component.scss',
    imports: [Comp1Component, Comp2Component, Comp3Component]
})
export class SubjectComponent implements OnInit, OnDestroy {
  
  userName:string;

  constructor(private _designUtility: DesignUtilityService) {
    this._designUtility.userName.subscribe(res => {
    this.userName = res;
    })
  }

  ngOnInit(): void {
    this._designUtility.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this._designUtility.exclusive.next(false);
  }

}
