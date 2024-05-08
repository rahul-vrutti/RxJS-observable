import { Component } from '@angular/core';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  standalone: true,
  imports: [],
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.scss'
})
export class Comp3Component {

  userName:string;

  constructor(private _designUtility: DesignUtilityService) {
    this._designUtility.userName.subscribe(res => {
      this.userName = res;
  })
}

onChange(uname) {
  console.log(uname.value);
  this._designUtility.userName.next(uname.value);
}

}
