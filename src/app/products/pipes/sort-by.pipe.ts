import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy:keyof Hero ): Hero[] {
    switch (sortBy) {
       case 'name' :
        return heroes.sort((a, b) => (a.name > b.name) ? 1 : -1);
       case 'canfly' :
        return heroes.sort((a, b) => (a.canfly > b.canfly) ? 1 : -1);
       case 'color' :
          return heroes.sort((a, b) => (a.color > b.color) ? 1 : -1);
       default:
        return heroes
    }
  }

}
