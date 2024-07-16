import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'search',
    loadComponent: () => import('./youtube/pages/search.page').then((m) => m.SearchPage),
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('./core/pages/not-found.page').then((m) => m.NotFoundPage),
  },
];
