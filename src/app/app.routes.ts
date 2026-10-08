import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/immersive-home/immersive-home.component').then(m => m.ImmersiveHomeComponent),
    title: 'Giras de Estudio en Chile y Sudamérica | Giras Indómito',
    data:{description:'Organiza la gira de estudio de tu curso con Giras Indómito. Descubre destinos, experiencias grupales y solicita una cotización.'}
  },
  {
    path: 'programas',
    loadComponent: () => import('./features/programs/programs.component').then(m => m.ProgramsComponent),
    title: 'Programas de Giras de Estudio | Giras Indómito',
    data: {description:'Descubre rutas para giras de estudio en Chile, Bariloche y Brasil. Revisa itinerarios de referencia y solicita una propuesta para tu curso.'}
  },
  {
    path: 'programas/:slug',
    loadComponent: () => import('./features/programs/program-detail.component').then(m => m.ProgramDetailComponent),
    title: 'Programa de Gira de Estudio | Giras Indómito',
    data: {description:'Conoce circuitos, experiencias y condiciones referenciales para organizar tu gira de estudio.'}
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent),
    title: 'Destinos y Servicios para Giras de Estudio | Giras Indómito',
    data:{description:'Giras de estudio, viajes grupales y destinos en Chile y Sudamérica. Conoce propuestas y actividades referenciales.'}
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Cotiza tu Gira de Estudio | Giras Indómito',
    data:{description:'Solicita una cotización personalizada para la gira de estudio de tu curso. Cuéntanos destino, fecha y cantidad de pasajeros.'}
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'Nuestra Historia y Compromiso | Giras Indómito',
    data:{description:'Conoce Giras Indómito: viajes grupales, giras de estudio y experiencias turísticas para descubrir Chile y Sudamérica.'}
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
