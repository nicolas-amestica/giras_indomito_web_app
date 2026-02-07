import { Component, PLATFORM_ID, inject, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { DestinationCardComponent } from '../../shared/components/card/destination-card.component';
import { ParallaxDirective } from '../../shared/directives/parallax.directive';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    CarouselModule,
    SectionTitleComponent,
    DestinationCardComponent,
    ParallaxDirective
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  // Renderizar carousel solo en el navegador para evitar problemas con Event Replay
  isBrowser = false;

  // Deshabilitar autoplay en SSR para evitar que la aplicación quede inestable
  carouselAutoplayInterval: number | undefined = undefined;

  sliderImages = [
    '/assets/images/slider/web-galeria-1.jpg',
    '/assets/images/slider/web-galeria-2.jpg',
    '/assets/images/slider/web-galeria-3.jpg',
    '/assets/images/slider/web-galeria-4.jpg',
    '/assets/images/slider/web-galeria-5.jpg',
    '/assets/images/slider/web-galeria-6.jpg'
  ];

  destinations = [
    {
      title: 'Pucón',
      description: 'Aventura y naturaleza en el corazón del sur de Chile',
      image: '/assets/images/content/foto-web-aventuras.jpg',
      badge: 'Nacional',
      routerLink: '/services'
    },
    {
      title: 'San Carlos de Bariloche',
      description: 'Experiencia única en la Patagonia Argentina',
      image: '/assets/images/content/services/foto_web_1.jpg',
      badge: 'Internacional',
      routerLink: '/services'
    },
    {
      title: 'Camboriú',
      description: 'Playas paradisíacas y diversión en Brasil',
      image: '/assets/images/content/services/foto_web_4.jpg',
      badge: 'Internacional',
      routerLink: '/services'
    }
  ];

  testimonials = [
    {
      text: 'Una experiencia inolvidable. Todo perfectamente organizado y con la mejor atención.',
      author: 'Colegio San José',
      location: 'Santiago'
    },
    {
      text: 'Nuestros estudiantes vivieron momentos únicos. Altamente recomendado.',
      author: 'Liceo Técnico',
      location: 'Concepción'
    },
    {
      text: 'Profesionalismo y seguridad en todo momento. Volveremos sin duda.',
      author: 'Instituto Superior',
      location: 'Valparaíso'
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
      register();
      // Habilitar autoplay solo en el navegador (no durante SSR)
      this.carouselAutoplayInterval = 3000;
    }
  }
}
