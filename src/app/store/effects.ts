/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  exhaustMap, map, take,
  tap,
} from 'rxjs';

import { Router } from '@angular/router';

import * as AppActions from './actions';

import { ApiService } from '@/youtube/services/api.service';

@Injectable({ providedIn: 'root' })
export class AppEffects {
  constructor(
    private actions$: Actions,
    private api: ApiService,
    private router: Router,
  ) {}

  search$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.youtubeSearch),
      tap(() => {
        return AppActions.appLoading({ loading: true });
      }),
      exhaustMap(({ term }) => {
        return this.api.search(term).pipe(
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
