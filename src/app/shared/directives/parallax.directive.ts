import { Directive, ElementRef, HostListener, inject, Input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective {
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  @Input() parallaxSpeed: number = 0.5;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrolled = window.pageYOffset;
      const parallaxValue = scrolled * this.parallaxSpeed;
      this.el.nativeElement.style.transform = `translateY(${parallaxValue}px)`;
    }
  }
}
