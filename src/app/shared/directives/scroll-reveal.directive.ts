import { Directive, ElementRef, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(this.el.nativeElement, {
        scrollTrigger: {
          trigger: this.el.nativeElement,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }
  }
}
