import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/immersive-home/immersive-home.component').then(m => m.ImmersiveHomeComponent),
    title: 'Inicio - Giras Indómito'
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent),
    title: 'Servicios - Giras Indómito'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contacto - Giras Indómito'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'Nosotros - Giras Indómito'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
