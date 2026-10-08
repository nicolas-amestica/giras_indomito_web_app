import { RenderMode, ServerRoute } from '@angular/ssr';
import { TOUR_PROGRAMS } from './features/programs/programs.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'programas/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => TOUR_PROGRAMS.map(({ slug }) => ({ slug }))
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
