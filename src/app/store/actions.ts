import { createAction, props } from '@ngrx/store';

import { AppState } from './state';

import { VideoInterface } from '@/youtube/models/video.model';
import { AuthInterface } from '@/auth/models/auth.model';

export const enum ActionsList {
  APP_LOADING = '[APP] Loading',

  LOGIN = '[AUTH] Login',
  LOGIN_SUCCESS = '[AUTH] Login Success',
  UNAUTHORIZED = '[AUTH] Unauthorized',

  YOUTUBE_SEARCH = '[YOUTUBE] Search',
  YOUTUBE_SEARCH_SUCCESS = '[YOUTUBE] Search Success',
  YOUTUBE_SET_SORT_ORDER = '[YOUTUBE] Set Sort Order',
  YOUTUBE_SET_FILTER = '[YOUTUBE] Set Filter',
}

// CORE

export const appLoading = createAction(ActionsList.APP_LOADING, props<{ loading: boolean }>());

// AUTH

export const login = createAction(
  ActionsList.LOGIN,
  props<{ auth: AuthInterface }>(),
);
export const setAuthorized = createAction(ActionsList.LOGIN_SUCCESS);
export const setUnauthorized = createAction(ActionsList.UNAUTHORIZED);

// YOUTUBE

export const youtubeSearch = createAction(ActionsList.YOUTUBE_SEARCH, props<{ term: string }>());
export const youtubeSearchSuccess = createAction(
  ActionsList.YOUTUBE_SEARCH_SUCCESS,
  props<{ result: VideoInterface[] }>(),
);

export const youtubeSetSortOrder = createAction(
  ActionsList.YOUTUBE_SET_SORT_ORDER,
  props<{ sortOrder: AppState['data']['sortOrder'] }>(),
);

export const youtubeSetFilter = createAction(
  ActionsList.YOUTUBE_SET_FILTER,
  props<{ filter: AppState['data']['filter'] }>(),
);
