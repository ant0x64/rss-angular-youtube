import { createAction, props } from '@ngrx/store';

import { VideoInterface } from '@/youtube/models/video.model';
import { AppState } from './state';

export const enum ActionsList {
  APP_LOADING = '[APP] Loading',
  YOUTUBE_SEARCH = '[YOUTUBE] Search',
  YOUTUBE_SEARCH_SUCCESS = '[YOUTUBE] Search Success',
  YOUTUBE_SET_SORT_ORDER = '[YOUTUBE] Set Sort Order',
  YOUTUBE_SET_FILTER = '[YOUTUBE] Set Filter',
}

// CORE

export const appLoading = createAction(ActionsList.APP_LOADING, props<{ loading: boolean }>());

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
