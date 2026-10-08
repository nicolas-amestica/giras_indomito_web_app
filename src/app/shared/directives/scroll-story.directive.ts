import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, DestroyRef, ElementRef, PLATFORM_ID, inject } from '@angular/core';

@Directive({selector:'[appScrollStory]',standalone:true})
export class ScrollStoryDirective implements AfterViewInit {
  private readonly element=inject(ElementRef<HTMLElement>);
  private readonly platformId=inject(PLATFORM_ID);
  private readonly destroyRef=inject(DestroyRef);
  async ngAfterViewInit():Promise<void>{
    if(!isPlatformBrowser(this.platformId)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const [{gsap},{ScrollTrigger}]=await Promise.all([import('gsap'),import('gsap/ScrollTrigger')]);
    if(this.destroyRef.destroyed)return;
    gsap.registerPlugin(ScrollTrigger);
    const context=gsap.context(()=>{
      gsap.utils.toArray<HTMLElement>('.reveal').forEach(el=>gsap.from(el,{y:65,opacity:0,duration:1,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
      gsap.utils.toArray<HTMLElement>('.photo-band img').forEach(el=>gsap.to(el,{scale:1.22,yPercent:9,ease:'none',scrollTrigger:{trigger:el.parentElement,start:'top bottom',end:'bottom top',scrub:true}}));
    },this.element.nativeElement);
    this.destroyRef.onDestroy(()=>context.revert());
  }
}