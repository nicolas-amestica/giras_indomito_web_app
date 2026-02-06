import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionTitleComponent, CardModule, ButtonModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  // Referencia a window para usar en el template
  readonly window = window;

  contactInfo = [
    {
      icon: 'pi pi-envelope',
      title: 'Email',
      value: 'info@girasindomito.cl',
      link: 'mailto:info@girasindomito.cl'
    },
    {
      icon: 'pi pi-phone',
      title: 'Teléfono',
      value: '+56 9 6355 2893',
      link: 'tel:+56963552893'
    },
    {
      icon: 'pi pi-whatsapp',
      title: 'WhatsApp',
      value: '+56 9 6355 2893',
      link: 'https://wa.link/yhfi8d'
    }
  ];

  socialLinks = [
    {
      icon: 'pi pi-facebook',
      name: 'Facebook',
      url: 'https://www.facebook.com/giras.indomito',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: 'pi pi-instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/giras_indomito/',
      color: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      icon: 'pi pi-whatsapp',
      name: 'WhatsApp',
      url: 'https://wa.link/yhfi8d',
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];
}
