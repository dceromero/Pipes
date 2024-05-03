import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``
})
export class BasicsPageComponent {

  public nameLower: string = 'Jimmy';
  public nameUpper: string = 'JIMMY';
  public fullname: string = 'JiMmY RoMeRo';

  public date: Date = new Date();
}
