import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  public orderBy: keyof Hero = 'name'

  public hero: Hero[] = [{
    name: 'Superman',
    canfly: true,
    color: Color.blue
  }, {
    name: 'Batman',
    canfly: false,
    color: Color.black
  }, {
    name: 'Flash',
    canfly: false,
    color: Color.red
  }, {
    name: 'Flecha Verde',
    canfly: false,
    color: Color.greed
  }, {
    name: 'Literna Verde',
    canfly: true,
    color: Color.greed
  },
  ]
  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }


  public sortBy(key: keyof Hero): void {
    this.orderBy = key;
  }

}
