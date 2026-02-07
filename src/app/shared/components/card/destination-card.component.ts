import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-destination-card',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule],
  template: `
    <div
      class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer h-96"
      [attr.data-aos]="animation"
    >
      <!-- Imagen de fondo -->
      <div class="absolute inset-0">
        <img
          [src]="image"
          [alt]="title"
          class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      <!-- Contenido -->
      <div class="relative h-full flex flex-col justify-end p-6 text-white">
        @if (badge) {
          <span class="inline-block px-3 py-1 bg-primary-500 text-black text-sm font-semibold rounded-full mb-3 w-fit">
            {{ badge }}
          </span>
        }

        <h3 class="text-2xl sm:text-3xl font-bold mb-2">
          {{ title }}
        </h3>

        @if (description) {
          <p class="text-gray-200 mb-4 line-clamp-2">
            {{ description }}
          </p>
        }

        @if (routerLink) {
          <button
            pButton
            [routerLink]="routerLink"
            class="p-button-outlined p-button-secondary w-fit"
          >
            {{ buttonText }}
            <i class="pi pi-arrow-right ml-2"></i>
          </button>
        }
      </div>
    </div>
  `
})
export class DestinationCardComponent {
  @Input() title: string = '';
  @Input() description?: string;
  @Input() image: string = '';
  @Input() badge?: string;
  @Input() routerLink?: string;
  @Input() buttonText: string = 'Ver más';
  @Input() animation: string = 'fade-up';
}
