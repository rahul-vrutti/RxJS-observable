import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  exclusive: boolean = false;

  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    this._designUtility.exclusive.subscribe(res => {
      this.exclusive = res;
    })
  }
  

}
