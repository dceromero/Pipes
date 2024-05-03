import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'vuela' : 'no vuela';
  }

}
