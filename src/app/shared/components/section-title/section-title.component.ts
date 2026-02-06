import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center mb-12" [attr.data-aos]="animation">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {{ title }}
      </h2>
      @if (subtitle) {
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          {{ subtitle }}
        </p>
      }
      <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto mt-6 rounded-full"></div>
    </div>
  `
})
export class SectionTitleComponent {
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() animation: string = 'fade-up';
}
