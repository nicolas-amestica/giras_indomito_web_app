import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, ElementRef, PLATFORM_ID, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-immersive-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="immersive-hero" #hero aria-labelledby="hero-title">
      <div class="hero-photo" aria-hidden="true"></div>
      <canvas #scene class="hero-canvas" aria-hidden="true"></canvas>
      <div class="hero-shade"></div>
      <div class="hero-copy">
        <p class="eyebrow">GIRAS INDÓMITO · CHILE</p>
        <h1 id="hero-title">Dale una vuelta <em>a la aventura.</em></h1>
        <p>Experiencias que conectan personas, destinos e historias inolvidables.</p>
        <a routerLink="/services" class="action">Explora nuestros viajes <span aria-hidden="true">↗</span></a>
      </div>
      <span class="scroll-cue">DESLIZA PARA DESCUBRIR ↓</span>
    </section>
    <section class="story" #story>
      <div class="story-image" role="img" aria-label="Paisajes y aventura en el sur de Chile"></div>
      <div class="story-copy">
        <span class="eyebrow">01 / EXPERIENCIAS</span>
        <h2>El viaje es mucho más que el destino.</h2>
        <p>Diseñamos giras de estudio, aventuras grupales y programas turísticos para descubrir Chile y Sudamérica con una mirada diferente.</p>
        <a routerLink="/about" class="text-link">Conoce nuestra historia ↗</a>
      </div>
    </section>
    <section class="journeys" aria-labelledby="journeys-title">
      <p class="eyebrow">02 / NUESTROS VIAJES</p>
      <h2 id="journeys-title">Tu próxima historia comienza aquí.</h2>
      <div class="journey-grid">
        <a routerLink="/services" class="journey-card">
          <img src="/assets/images/content/foto-web-aventuras.jpg" alt="Paisaje de aventura en Chile" loading="lazy">
          <span>01 — Giras de estudio</span><h3>Aprender también es explorar.</h3>
        </a>
        <a routerLink="/services" class="journey-card">
          <img src="/assets/images/content/services/foto_web_1.jpg" alt="Destino turístico en la Patagonia" loading="lazy">
          <span>02 — Viajes grupales</span><h3>Recuerdos para compartir.</h3>
        </a>
        <a routerLink="/services" class="journey-card">
          <img src="/assets/images/content/services/foto_web_4.jpg" alt="Destino turístico internacional" loading="lazy">
          <span>03 — Experiencias a medida</span><h3>La aventura a tu manera.</h3>
        </a>
      </div>
    </section>
    <section class="closing">
      <p class="eyebrow">03 / COMENCEMOS</p>
      <h2>Hay historias que merecen vivirse.</h2>
      <a routerLink="/contact" class="action">Planifiquemos tu viaje ↗</a>
    </section>
  `,
  styles: [`
    :host { display:block; background:#171b18; color:#fff; font-family:Avenir,system-ui,sans-serif; overflow:hidden }
    .immersive-hero { height:100svh; min-height:640px; position:relative; display:flex; align-items:center; padding:clamp(24px,8vw,140px); isolation:isolate }
    .hero-photo,.hero-shade,.hero-canvas { position:absolute; inset:0; width:100%; height:100%; pointer-events:none }
    .hero-photo { background:url('/assets/images/slider/web-galeria-1.jpg') center/cover; z-index:-3; transform:scale(1.12) }
    .hero-shade { background:linear-gradient(90deg,rgba(9,18,14,.82),rgba(9,18,14,.1)),linear-gradient(0deg,rgba(9,18,14,.6),transparent 45%); z-index:-1 }
    .hero-canvas { z-index:-2; opacity:.75 }
    .hero-copy { max-width:850px; position:relative }
    .eyebrow { color:#d7ff00; font-size:.75rem; letter-spacing:.28em; font-weight:800; margin-bottom:24px }
    h1,h2,h3,p { margin:0 }
    h1 { font-size:clamp(3.8rem,9vw,9rem); line-height:.95; letter-spacing:-.07em; font-weight:800 }
    h1 em { color:#d7ff00; font-style:normal }
    .hero-copy>p:not(.eyebrow) { font-size:clamp(1rem,1.5vw,1.35rem); max-width:530px; line-height:1.6; margin:30px 0 }
    .action { display:inline-flex; gap:24px; align-items:center; padding:18px 28px; background:#d7ff00; color:#171b18; border-radius:4px; font-weight:800; text-decoration:none; transition:transform .25s,background .25s }
    .action:hover { transform:translateY(-4px); background:#e7ff33 }
    .scroll-cue { position:absolute; bottom:28px; left:clamp(24px,8vw,140px); font-size:.7rem; letter-spacing:.2em }
    .story { min-height:100svh; display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:7vw; padding:9vw }
    .story-image { height:65vh; min-height:380px; background:url('/assets/images/slider/web-galeria-3.jpg') center/cover; border-radius:4px }
    h2 { font-size:clamp(2.8rem,5.5vw,6rem); line-height:1.04; letter-spacing:-.055em }
    .story-copy>p:not(.eyebrow) { margin:30px 0; color:#cbd1c9; font-size:1.15rem; line-height:1.8 }
    .text-link { color:#d7ff00; font-weight:700; text-decoration:none }
    .journeys { padding:110px max(24px,7vw); background:#f4f4ee; color:#20251e }
    .journeys>.eyebrow { color:#536a00 }
    .journeys h2 { max-width:820px; margin-bottom:60px }
    .journey-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:20px }
    .journey-card { position:relative; display:flex; flex-direction:column; justify-content:flex-end; min-height:510px; padding:28px; color:#fff; text-decoration:none; overflow:hidden; isolation:isolate }
    .journey-card:after { content:''; position:absolute; inset:0; background:linear-gradient(transparent 35%,rgba(0,0,0,.8)); z-index:-1 }
    .journey-card img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:-2; transition:transform .7s }
    .journey-card:hover img { transform:scale(1.08) }
    .journey-card span { font-size:.8rem; letter-spacing:.1em }
    .journey-card h3 { font-size:clamp(1.7rem,2.3vw,2.8rem); line-height:1.1; margin-top:12px }
    .closing { padding:150px 24px; text-align:center }
    .closing h2 { max-width:900px; margin:0 auto 45px }
    @media(max-width:800px) { .story { grid-template-columns:1fr; padding:90px 24px }.story-image { height:48vh; min-height:280px }.journey-grid { grid-template-columns:1fr }.journey-card { min-height:420px }.immersive-hero { min-height:580px } }
    @media(prefers-reduced-motion:reduce) { .hero-photo,.journey-card img,.action { transform:none!important; transition:none!important } .hero-canvas { display:none } }
  `]
})
export class ImmersiveHomeComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly hero = viewChild.required<ElementRef<HTMLElement>>('hero');
  private readonly story = viewChild.required<ElementRef<HTMLElement>>('story');
  private readonly scene = viewChild.required<ElementRef<HTMLCanvasElement>>('scene');

  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
    if (this.destroyRef.destroyed) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.to('.hero-photo', { scale:1.4, yPercent:20, ease:'none', scrollTrigger:{trigger:this.hero().nativeElement,start:'top top',end:'bottom top',scrub:true} });
      gsap.to('.hero-copy', { yPercent:-30, opacity:0, ease:'none', scrollTrigger:{trigger:this.hero().nativeElement,start:'top top',end:'bottom 40%',scrub:true} });
      gsap.from('.story-image', { clipPath:'inset(18% 12%)', ease:'none', scrollTrigger:{trigger:this.story().nativeElement,start:'top 90%',end:'center center',scrub:true} });
      gsap.utils.toArray<HTMLElement>('.journey-card').forEach((card) => {
        gsap.from(card, { y:90, opacity:0, duration:.9, scrollTrigger:{trigger:card,start:'top 90%',once:true} });
      });
    });
    this.destroyRef.onDestroy(() => context.revert());
    void this.initScene();
  }

  private async initScene(): Promise<void> {
    const THREE = await import('three');
    if (this.destroyRef.destroyed) return;
    const canvas = this.scene().nativeElement;
    const host = this.hero().nativeElement;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:false, powerPreference:'low-power' });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, .1, 100);
    camera.position.z = 12;
    const geometry = new THREE.BufferGeometry();
    const count = 140;
    const positions = new Float32Array(count * 3);
    for (let i=0;i<count;i++) { positions[i*3]=(Math.random()-.5)*24; positions[i*3+1]=(Math.random()-.5)*12; positions[i*3+2]=(Math.random()-.5)*9; }
    geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
    const material = new THREE.PointsMaterial({color:0xd7ff00,size:.035,transparent:true,opacity:.75});
    const particles = new THREE.Points(geometry,material);
    scene.add(particles);
    const resize = () => { const w=host.clientWidth,h=host.clientHeight; renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix(); };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    let frame=0;
    const animate = () => { particles.rotation.y += .00025;renderer.render(scene,camera);frame=requestAnimationFrame(animate); };
    animate();
    this.destroyRef.onDestroy(() => { cancelAnimationFrame(frame);observer.disconnect();geometry.dispose();material.dispose();renderer.dispose(); });
  }
}
