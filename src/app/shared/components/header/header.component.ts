import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MenubarModule, MenuModule, ButtonModule],
  templateUrl: './header.component.html',
  styles: [`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 1000;
      background: white;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      routerLink: '/'
    },
    {
      label: 'Servicios',
      icon: 'pi pi-briefcase',
      routerLink: '/services'
    },
    {
      label: 'Programas',
      icon: 'pi pi-file-pdf',
      routerLink: '/programs'
    },
    {
      label: 'Nosotros',
      icon: 'pi pi-users',
      routerLink: '/about'
    },
    {
      label: 'Contacto',
      icon: 'pi pi-envelope',
      routerLink: '/contact'
    }
  ];
}
