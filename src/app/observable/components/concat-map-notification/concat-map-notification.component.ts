import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../../appServices/design-utility.service';
import { concatMap, delay, from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-concat-map-notification',
  standalone: true,
  imports: [],
  templateUrl: './concat-map-notification.component.html',
  styleUrl: './concat-map-notification.component.scss'
})
export class ConcatMapNotificationComponent implements OnInit {

  notifyData = [
    {
      name: 'Facebook',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png',
      time: '4 Second',
      image: 'https://purepng.com/public/uploads/large/nature-3yp.png',
      strong: 'Alax Jonson',
      p: 'Commented on your #Cool Post: Awesome Post'
    },
    {
      name: 'Facebook',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png',
      time: '4 Second',
      image: 'https://purepng.com/public/uploads/large/nature-3yp.png',
      strong: 'Peter Paker',
      p: 'Commented on your #Cool Post: Awesome Post'
    }
  ]

  constructor(private designUtility: DesignUtilityService) {}

  ngOnInit(): void {

    from(this.notifyData).pipe(
      // mergeMap(res => this.getHtml(res))
      concatMap(res => this.getHtml(res))
    )
    .subscribe(res => {
      this.designUtility.print2(res, 'elContainer')
    });
  }

  getHtml(data){
    return of(` <div class="header flex ">
                  <div class="app">
                    <img src="${data.icon}" width="12">
                    ${data.name}
                  </div>
                  <div class="time">${data.time}</div>
                </div>
                <div class="body">
                  <img src="${data.image}" width="53" height="36" class="item-img" alt="">
                  <strong>${data.strong}</strong>
                  <p>${data.p}</p>
                </div>`).pipe(delay(2000));
  }

}
