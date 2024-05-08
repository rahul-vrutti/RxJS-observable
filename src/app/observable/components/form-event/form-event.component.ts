import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../../appServices/design-utility.service';

@Component({
  selector: 'app-form-event',
  standalone: true,
  imports: [],
  templateUrl: './form-event.component.html',
  styleUrl: './form-event.component.scss'
})
export class FormEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn') addBtn: ElementRef;

  constructor(private _designUitility: DesignUtilityService) { }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let countValue = 'Video' + count++;
      console.log(countValue);
      this._designUitility.print(countValue, 'elContainer');
      this._designUitility.print(countValue, 'elContainer2');
    })
  }

}
