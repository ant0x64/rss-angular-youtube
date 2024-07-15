import { createAction, props } from '@ngrx/store';

import { VideoInterface } from '@/youtube/models/video.model';

export const enum ActionsList {
  APP_LOADING = '[APP] Loading',
  YOUTUBE_SEARCH = '[YOUTUBE] Search',
  YOUTUBE_SEARCH_SUCCESS = '[YOUTUBE] Search Success',
}

// CORE

export const appLoading = createAction(ActionsList.APP_LOADING, props<{ loading: boolean }>());

// YOUTUBE

export const youtubeSearch = createAction(ActionsList.YOUTUBE_SEARCH, props<{ term: string }>());
export const youtubeSearchSuccess = createAction(
  ActionsList.YOUTUBE_SEARCH_SUCCESS,
  props<{ result: VideoInterface[] }>(),
);
