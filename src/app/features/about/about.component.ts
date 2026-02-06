import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  values = [
    {
      icon: 'pi pi-shield',
      title: 'Seguridad',
      description: 'La seguridad de nuestros estudiantes es nuestra máxima prioridad en cada viaje'
    },
    {
      icon: 'pi pi-star',
      title: 'Calidad',
      description: 'Ofrecemos servicios de la más alta calidad en alojamiento, transporte y actividades'
    },
    {
      icon: 'pi pi-heart',
      title: 'Compromiso',
      description: 'Estamos comprometidos con hacer de cada gira una experiencia memorable'
    },
    {
      icon: 'pi pi-users',
      title: 'Cercanía',
      description: 'Atención personalizada y seguimiento constante antes, durante y después del viaje'
    }
  ];
}
