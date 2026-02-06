import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      name: 'Facebook',
      icon: 'pi pi-facebook',
      url: 'https://www.facebook.com/giras.indomito',
      color: 'hover:text-primary-500'
    },
    {
      name: 'Instagram',
      icon: 'pi pi-instagram',
      url: 'https://www.instagram.com/giras_indomito/',
      color: 'hover:text-primary-500'
    },
    {
      name: 'WhatsApp',
      icon: 'pi pi-whatsapp',
      url: 'https://wa.link/yhfi8d',
      color: 'hover:text-primary-500'
    }
  ];
}
