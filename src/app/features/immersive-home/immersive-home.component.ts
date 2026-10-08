import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, ElementRef, PLATFORM_ID, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PAYMENT_PORTAL_ENABLED } from '../../shared/constants/payment-portal.constants';

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
        <h1 id="hero-title">Tu gira de estudio, <em>una gran aventura.</em></h1>
        <p>Viajes grupales para cursos que quieren explorar y vivir grandes experiencias.</p>
        <a routerLink="/services" class="action">Explora nuestros viajes <span aria-hidden="true">↗</span></a>
      </div>
      <span class="scroll-cue">DESLIZA PARA DESCUBRIR ↓</span>
    </section>
    <section class="trust-strip"><strong>Giras de estudio y experiencias grupales</strong><span>Programas organizados</span><span>Destinos en Chile y Sudamérica</span><a routerLink="/contact">Cotiza tu curso ↗</a></section>
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

    <section class="editorial" aria-labelledby="editorial-title">
      <div class="editorial-heading">
        <p class="eyebrow">03 / UNA FORMA DIFERENTE DE VIAJAR</p>
        <h2 id="editorial-title">No coleccionamos destinos.<br><em>Creamos historias.</em></h2>
      </div>
      <div class="editorial-columns">
        <p>Un viaje puede ser el primer encuentro con la cordillera, una conversación que cambia la forma de mirar el mundo o una amistad que se recuerda toda la vida.</p>
        <p>En Giras Indómito buscamos que cada experiencia tenga un sentido: descubrir nuevos lugares, compartir en grupo y vivir momentos que merezcan ser contados al regresar.</p>
      </div>
    </section>
    <section class="panorama" aria-labelledby="panorama-title">
      <div class="panorama-visual" aria-hidden="true"></div>
      <div class="panorama-overlay"></div>
      <div class="panorama-content">
        <p class="eyebrow">04 / EL SUR NOS INSPIRA</p>
        <h2 id="panorama-title">Volcanes.<br>Lagos.<br><em>Libertad.</em></h2>
        <p>Desde los paisajes de Pucón hasta la Patagonia, cada ruta es una invitación a salir de lo cotidiano.</p>
        <a routerLink="/services" class="action">Descubre los destinos ↗</a>
      </div>
    </section>
    <section class="values" aria-labelledby="values-title">
      <div class="values-intro">
        <p class="eyebrow">05 / LO QUE NOS MUEVE</p>
        <h2 id="values-title">Nos importa tanto el camino como la llegada.</h2>
        <p>Cada grupo es diferente. Por eso escuchamos lo que esperan del viaje y buscamos una experiencia cercana, organizada y adaptada a sus intereses.</p>
      </div>
      <div class="values-grid">
        <article class="value-card"><span>01 — PLANIFICACIÓN</span><h3>El viaje comienza mucho antes de salir.</h3><p>Conversamos sobre destinos, duración, actividades y necesidades del grupo para dar forma a una propuesta clara.</p></article>
        <article class="value-card"><span>02 — ACOMPAÑAMIENTO</span><h3>Compartimos el entusiasmo de cada aventura.</h3><p>Entendemos la importancia de una buena coordinación y de mantener una comunicación cercana durante la experiencia.</p></article>
        <article class="value-card"><span>03 — EXPERIENCIAS</span><h3>Lo inolvidable está en los detalles.</h3><p>Una nueva amistad, un paisaje imponente o una actividad compartida pueden convertirse en el mejor recuerdo.</p></article>
      </div>
    </section>
    <section class="route-section" aria-labelledby="routes-title">
      <p class="eyebrow">06 / DESTINOS QUE INSPIRAN</p>
      <h2 id="routes-title">Un mapa lleno de posibilidades.</h2>
      <div class="route-grid">
        <article class="route"><span>CHILE</span><h3>Pucón y la Araucanía</h3><p>Montañas, lagos y actividades para conectar con la naturaleza en uno de los grandes escenarios del sur.</p></article>
        <article class="route"><span>CHILE</span><h3>Puerto Varas y Chiloé</h3><p>La belleza de los volcanes, los paisajes lacustres y la identidad cultural del archipiélago.</p></article>
        <article class="route"><span>ARGENTINA</span><h3>San Carlos de Bariloche</h3><p>Paisajes patagónicos, bosques y nuevas experiencias más allá de nuestras fronteras.</p></article>
        <article class="route"><span>BRASIL</span><h3>Camboriú</h3><p>Una alternativa internacional para descubrir otros paisajes, disfrutar de la costa y compartir en grupo.</p></article>
      </div>
      <a routerLink="/services" class="text-link">Ver todos nuestros servicios ↗</a>
    </section>
    <section class="photo-story" aria-labelledby="photo-story-title">
      <div class="photo-story-image" role="img" aria-label="Fotografía de viaje de Giras Indómito"></div>
      <div class="photo-story-copy">
        <p class="eyebrow">07 / RECUERDOS REALES</p>
        <h2 id="photo-story-title">Lo que vivimos juntos permanece.</h2>
        <p>Las mejores historias no caben en un itinerario. Descubre parte de las aventuras que han compartido nuestros viajeros y conoce nuestra forma de explorar.</p>
        <a routerLink="/experiencias-reales" class="text-link">Ver experiencias reales ↗</a>
        <small>Fotografías auténticas de nuestros viajes, publicadas con autorización.</small>
      </div>
    </section>
    <section class="faq" aria-labelledby="faq-title">
      <div><p class="eyebrow">08 / RESOLVEMOS TUS DUDAS</p><h2 id="faq-title">Antes de partir, conversemos.</h2></div>
      <div class="faq-items">
        <details><summary>¿Qué tipos de viajes organizan?</summary><p>Nos enfocamos en giras de estudio, viajes grupales y experiencias turísticas que pueden adaptarse a las características de cada grupo.</p></details>
        <details><summary>¿Puedo solicitar una propuesta personalizada?</summary><p>Sí. Puedes contarnos el destino que tienes en mente, las fechas aproximadas y el número de pasajeros para comenzar a planificar.</p></details>
        <details><summary>¿Organizan viajes nacionales e internacionales?</summary><p>Presentamos alternativas dentro de Chile y en destinos de Sudamérica. La disponibilidad y los servicios específicos se confirman en cada propuesta.</p></details>
        @if (paymentPortalEnabled) {
          <details><summary>¿Dónde puedo gestionar mis pagos?</summary><p>Si ya tienes un viaje contratado, utiliza nuestro acceso al portal de pagos. Los pagos se administran en una plataforma externa a este sitio informativo.</p><a href="https://pagos.dev.girasindomito.cl/" target="_blank" rel="noopener noreferrer" class="text-link">Ir al portal de pagos ↗</a></details>
        }
      </div>
    </section>
    @if (paymentPortalEnabled) {
      <section class="payments-banner"><div><p class="eyebrow">09 / PARA NUESTROS VIAJEROS</p><h2>Tu aventura también se organiza en línea.</h2><p>¿Ya estás preparando tu próximo viaje con nosotros? Accede al portal de pagos desde aquí.</p></div><a class="action" href="https://pagos.dev.girasindomito.cl/" target="_blank" rel="noopener noreferrer">Acceder a pagos ↗</a></section>
    }
    <section class="closing">
      <p class="eyebrow">10 / COMENCEMOS</p>
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

.trust-strip{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:22px;padding:24px;background:#d7ff00;color:#172018}.trust-strip a{color:#172018;font-weight:900;text-decoration:underline}.trust-strip strong{font-weight:900}
    .editorial{padding:clamp(90px,12vw,180px) 7vw;background:#212a22}.editorial h2{max-width:1100px}.editorial h2 em,.panorama h2 em{color:#d7ff00;font-style:normal}.editorial-columns{margin-top:70px;display:grid;grid-template-columns:1fr 1fr;gap:10vw;max-width:1100px}.editorial-columns p{font-size:clamp(1.15rem,2vw,1.65rem);line-height:1.65;color:#dce4dc}
    .panorama{position:relative;min-height:105svh;display:flex;align-items:center;padding:10vw 8vw;isolation:isolate}.panorama-visual,.panorama-overlay{position:absolute;inset:0;z-index:-2}.panorama-visual{background:url('/assets/images/slider/web-galeria-5.jpg') center/cover;transform:scale(1.08)}.panorama-overlay{z-index:-1;background:linear-gradient(90deg,rgba(10,20,15,.84),rgba(10,20,15,.25))}.panorama-content{max-width:780px}.panorama h2{font-size:clamp(5rem,11vw,11rem)}.panorama-content>p:not(.eyebrow){max-width:500px;font-size:1.25rem;line-height:1.65;margin:30px 0}
    .values{padding:130px 7vw;background:#f3f4ec;color:#1c271f}.values .eyebrow,.route-section .eyebrow,.photo-story .eyebrow,.faq .eyebrow{color:#617600}.values-intro{max-width:950px}.values-intro>p:not(.eyebrow){font-size:1.3rem;line-height:1.7;margin-top:30px;max-width:700px;color:#526052}.values-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;margin-top:75px}.value-card{padding:45px 30px;min-height:340px;border:1px solid #cdd4c8;display:flex;flex-direction:column;justify-content:space-between}.value-card span,.route span{font-size:.72rem;letter-spacing:.15em;font-weight:800;color:#647a00}.value-card h3{font-size:clamp(1.6rem,2vw,2.4rem);line-height:1.15;letter-spacing:-.035em}.value-card p,.route p{line-height:1.7;color:#526052}
    .route-section{padding:120px 7vw;background:#e5e9df;color:#19231b}.route-section h2{max-width:900px}.route-grid{margin:70px 0 40px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1px;background:#b6c2b5;border:1px solid #b6c2b5}.route{background:#e5e9df;padding:50px 40px;min-height:285px}.route h3{font-size:clamp(2rem,3vw,3.5rem);margin:32px 0 16px;letter-spacing:-.045em}.route-section .text-link{color:#405a00}
    .photo-story{display:grid;grid-template-columns:1.1fr .9fr;min-height:720px;background:#f8f8f2;color:#1a241d}.photo-story-image{background:url('/assets/images/slider/web-galeria-6.jpg') center/cover;min-height:620px}.photo-story-copy{padding:clamp(40px,7vw,110px);display:flex;flex-direction:column;justify-content:center}.photo-story-copy>p:not(.eyebrow){font-size:1.2rem;line-height:1.7;color:#526052;margin:30px 0}.photo-story .text-link{color:#4d6c00}.photo-story small{display:block;margin-top:18px;color:#647064;line-height:1.5}
    .faq{padding:130px 7vw;background:#222e25;display:grid;grid-template-columns:.9fr 1.1fr;gap:9vw}.faq .eyebrow{color:#d7ff00}.faq-items details{border-bottom:1px solid #536456;padding:22px 0}.faq-items summary{cursor:pointer;list-style:none;font-size:1.25rem;font-weight:700;display:flex;justify-content:space-between;gap:15px}.faq-items summary:after{content:'+';color:#d7ff00}.faq-items details[open] summary:after{content:'−'}.faq-items details p{margin:20px 0;line-height:1.7;color:#c8d5ca}
    .payments-banner{background:#d7ff00;color:#162018;padding:65px 7vw;display:flex;justify-content:space-between;align-items:center;gap:40px}.payments-banner .eyebrow{color:#435700}.payments-banner h2{font-size:clamp(2rem,3.5vw,4rem);max-width:750px}.payments-banner p:not(.eyebrow){margin-top:16px;line-height:1.6}.payments-banner .action{background:#19231c;color:#d7ff00;white-space:nowrap}
    @media(max-width:800px){.editorial-columns,.values-grid,.route-grid,.photo-story,.faq{grid-template-columns:1fr}.values,.route-section,.faq{padding:80px 24px}.editorial{padding:100px 24px}.editorial-columns{margin-top:35px;gap:24px}.panorama{padding:100px 24px;min-height:90svh}.photo-story-image{min-height:420px}.photo-story-copy{padding:65px 24px}.payments-banner{flex-direction:column;align-items:flex-start;padding:65px 24px}.values-grid{margin-top:45px}.value-card{min-height:280px}.route{padding:35px 25px;min-height:230px}}
    @media(prefers-reduced-motion:reduce) { .hero-photo,.journey-card img,.action { transform:none!important; transition:none!important } .hero-canvas { display:none } }
  `]
})
export class ImmersiveHomeComponent implements AfterViewInit {
  protected readonly paymentPortalEnabled = PAYMENT_PORTAL_ENABLED;
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
      gsap.to('.panorama-visual', { scale:1.3, yPercent:12, ease:'none', scrollTrigger:{trigger:'.panorama',start:'top bottom',end:'bottom top',scrub:true} });
      gsap.utils.toArray<HTMLElement>('.editorial h2, .value-card, .route, .photo-story-copy, .faq h2').forEach((element) => {
        gsap.from(element, { y:65, opacity:0, duration:1, ease:'power2.out', scrollTrigger:{trigger:element,start:'top 90%',once:true} });
      });
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
    let isVisible = true;
    const visibilityObserver = new IntersectionObserver(entries => { isVisible = !!entries[0]?.isIntersecting; });
    visibilityObserver.observe(host);
    const resize = () => { const w=host.clientWidth,h=host.clientHeight; renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix(); };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    let frame=0;
    const animate = () => { if (isVisible && !document.hidden) { particles.rotation.y += .00025;renderer.render(scene,camera); }frame=requestAnimationFrame(animate); };
    animate();
    this.destroyRef.onDestroy(() => { cancelAnimationFrame(frame);observer.disconnect();visibilityObserver.disconnect();geometry.dispose();material.dispose();renderer.dispose(); });
  }
}
