import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DesignUtilityService } from '../../../appServices/design-utility.service';
import { NgIf } from '@angular/common';
import { concatMap, exhaustMap, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  standalone: true,
  imports: [NgIf],
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.scss'
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {

  num = 0;
  url = 'http://localhost:3000/exhaustmap';
  saveRequest;
  fetching = false;

  @ViewChild('btn') btn:ElementRef

  constructor(private http: HttpClient, private designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
    fromEvent(this.btn.nativeElement, 'click').pipe(
      tap(() => this.fetching = true),
      // concatMap(()=> this.onSave(this.num++)),
      exhaustMap(() => this.onSave(this.num++))
    )
    .subscribe(res => {
      // console.log(res)
      setTimeout(() => {
        this.onFetch()
      this.fetching = false;
      },2000)
    })
  }

  onSave(changes) {
    return this.http.put(this.url, {data:changes})
  }

  onFetch() {
    this.http.get<any>(this.url).subscribe(res => {
      console.log(res.data);
      this.saveRequest = res.data
    })
  }

  // btnClick() {
  //   this.onSave(this.num++).subscribe(res => {
  //     console.log(res)
  //   })
  // }

}
