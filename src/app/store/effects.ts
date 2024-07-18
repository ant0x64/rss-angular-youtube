/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  exhaustMap, map, of, take,
  tap,
} from 'rxjs';

import { Router } from '@angular/router';

import * as AppActions from './actions';

import { ApiService } from '@/youtube/services/api.service';
import { AuthService } from '@/auth/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AppEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router,
  ) { }

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.login),
      exhaustMap(({ auth }) => {
        return this.authService.auth(auth).pipe(
          map(() => {
            return AppActions.setAuthorized();
          }),
          catchError(() => {
            return of(AppActions.setUnauthorized());
          }),
        );
      }),
    );
  });

  search$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.youtubeSearch),
      tap(() => {
        return AppActions.appLoading({ loading: true });
      }),
      exhaustMap(({ term }) => {
        return this.apiService.search(term).pipe(
          take(1),
          tap(() => {
            this.router.navigate(['/search']);
          }),
          map((result) => {
            return AppActions.youtubeSearchSuccess({ result });
          }),
        );
      }),
    );
  });
}
