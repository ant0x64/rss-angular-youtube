import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'search',
    loadComponent: () => import('./pages/search.page').then((m) => m.SearchPage),
  },
  {
    path: '',
    redirectTo: 'search'
  }
];
