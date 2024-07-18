import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'search',
        canActivate: [AuthGuard],
        loadComponent: () => import('./youtube/pages/search.page').then((m) => m.SearchPage),
      },
      {
        path: 'detailed/:id',
        loadComponent: () => import('./youtube/pages/detailed.page').then((m) => m.DetailedPage),
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/pages/auth.page').then((m) => m.AuthPage),
  },
  {
    path: '**',
    loadComponent: () => import('./core/pages/not-found.page').then((m) => m.NotFoundPage),
  },
];
