import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {


  menuItems: MenuItem[] = [];

  activeItem?: MenuItem;


  ngOnInit(): void {
    this.menuItems = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/'},
      {
        label: 'Pipes de Angular', icon: 'pi pi-desktop', 
        items: [
          { label: 'Textos y Fechas', icon: 'pi pi-align-left', routerLink: '/' },
          { label: 'Numeros', icon: 'pi pi-dollar', routerLink: '/numbers' },
          { label: 'No comunes', icon: 'pi pi-globe', routerLink: '/uncommon' }
        ]
      },
      { label: 'Pipes Personalizados', icon: 'pi pi-cog', routerLink: '/custom' },
    ];

    this.activeItem = this.menuItems[0];
  }

  

}
