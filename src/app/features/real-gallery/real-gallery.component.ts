import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ScrollStoryDirective} from '../../shared/directives/scroll-story.directive';

interface GalleryPhoto {src:string; alt:string; caption:string; tag:string; }
@Component({
 selector:'app-real-gallery',standalone:true,imports:[RouterLink,ScrollStoryDirective],
 template:`
 <main appScrollStory class="gallery">
  <section class="intro"><p class="eyebrow">FOTOGRAFÍAS REALES / GIRAS INDÓMITO</p><h1>La aventura se vive. <em>Los recuerdos quedan.</em></h1><p>Estas imágenes forman parte de nuestro archivo de experiencias y viajes. Aquí no encontrarás fotografías de banco de imágenes: son momentos capturados durante actividades de nuestros grupos.</p><a routerLink="/contact" class="action">Cotiza la gira de tu curso ↗</a></section>
  <section class="photo-grid" aria-label="Galería de experiencias reales">
   @for(photo of photos;track photo.src;let i=$index){
    <figure class="photo reveal" [class.wide]="i===0">
      <img [src]="photo.src" [alt]="photo.alt" loading="lazy" decoding="async" [attr.width]="i===1?900:1600" [attr.height]="i===1?1600:900">
      <figcaption><span>{{photo.tag}}</span><strong>{{photo.caption}}</strong></figcaption>
    </figure>
   }
  </section>
  <section class="story"><p class="eyebrow">DE LA PLANIFICACIÓN AL RECUERDO</p><h2>Tu curso también puede vivir su propia historia.</h2><p>Los itinerarios se adaptan a las necesidades del grupo y las condiciones de cada propuesta. Conoce nuestros programas de referencia y conversemos sobre la experiencia que quieren compartir.</p><div class="links"><a routerLink="/programas" class="action">Ver programas ↗</a><a routerLink="/contact" class="secondary">Hablar con Giras Indómito ↗</a></div></section>
 </main>
 `,
 styles:[`:host{display:block;background:#172019;color:#fff;font-family:Avenir,system-ui,sans-serif}.intro{padding:150px 7vw 100px;max-width:1150px}.eyebrow{color:#d7ff00;font-size:.78rem;letter-spacing:.22em;font-weight:800}.intro h1,.story h2{font-size:clamp(3.3rem,7.5vw,8rem);line-height:1.03;letter-spacing:-.06em;margin:25px 0}.intro h1 em{color:#d7ff00;font-style:normal}.intro>p:last-of-type,.story>p:last-of-type{font-size:clamp(1.05rem,1.7vw,1.3rem);line-height:1.8;max-width:760px}.action{display:inline-block;padding:17px 26px;background:#d7ff00;color:#172019;text-decoration:none;font-weight:800;margin-top:30px}.photo-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;padding:0 7vw 100px}.photo{margin:0;position:relative;overflow:hidden;min-height:400px;background:#263429}.photo.wide{grid-column:1/-1;height:min(85svh,760px)}.photo:not(.wide){height:500px}.photo img{width:100%;height:100%;object-fit:cover;transition:transform .7s ease}.photo.wide img{object-position:center 47%}.photo:hover img{transform:scale(1.035)}.photo:after{content:'';position:absolute;inset:30% 0 0;background:linear-gradient(transparent,rgba(0,0,0,.8));pointer-events:none}.photo figcaption{position:absolute;bottom:30px;left:30px;right:30px;z-index:1;display:grid;gap:10px}.photo figcaption span{font-size:.75rem;letter-spacing:.2em;color:#d7ff00}.photo figcaption strong{font-size:clamp(1.3rem,2.4vw,2.6rem)}.story{background:#243328;padding:100px 7vw}.story h2{max-width:1000px}.links{display:flex;align-items:center;gap:30px;flex-wrap:wrap}.secondary{color:#d7ff00;text-decoration:underline;font-weight:800}@media(max-width:760px){.intro{padding:120px 24px 75px}.photo-grid{grid-template-columns:1fr;padding:0 24px 70px}.photo.wide{grid-column:auto;height:530px}.photo:not(.wide){height:360px}.story{padding:75px 24px}}@media(prefers-reduced-motion:reduce){.photo img{transition:none}.photo:hover img{transform:none}}`]
})
export class RealGalleryComponent {
 readonly photos:readonly GalleryPhoto[]=[
  {src:'/assets/images/drive/bariloche-curso.jpg',alt:'Grupo de estudiantes caminando frente a un edificio histórico de Bariloche',caption:'Momentos que compartimos en Bariloche',tag:'EXPERIENCIAS / BARILOCHE'},
  {src:'/assets/images/drive/bariloche-grupo.jpg',alt:'Grupo de estudiantes posando durante su visita a Bariloche',caption:'Una fotografía que cuenta una aventura compartida',tag:'GRUPO / BARILOCHE'},
  {src:'/assets/images/drive/comida-grupal.jpg',alt:'Grupo de estudiantes compartiendo una comida durante el viaje',caption:'La convivencia también es parte de la aventura',tag:'CONVIVENCIA / VIAJE GRUPAL'},
  {src:'/assets/images/drive/actividad-nocturna.jpg',alt:'Estudiantes participando en una actividad recreativa nocturna con luces azules',caption:'Experiencias para recordar con los compañeros',tag:'RECREACIÓN / ACTIVIDADES'}
 ];
}