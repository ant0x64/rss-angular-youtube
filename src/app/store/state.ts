import { createEntityAdapter, EntityState } from '@ngrx/entity';

import { VideoInterface } from '@/youtube/models/video.model';
import { SortOrderOptions } from '@/youtube/services/api.service';

// YOUTUBE

export interface YoutubeSearchResultState extends EntityState<VideoInterface> { }

export interface YoutubeState {
  data: {
    result: YoutubeSearchResultState,
    sortOrder: SortOrderOptions,
    filter: string,
  }
}

export const videoAdapter = createEntityAdapter<VideoInterface>({
  selectId: (video) => video.id,
});

// AUTH

export interface AuthState {
  authorized: boolean;
}

// APP

export interface AppState extends YoutubeState, AuthState {
  loading: boolean;
}

export const initialState: AppState = {
  data: {
    result: videoAdapter.getInitialState(),
    sortOrder: SortOrderOptions.DATE,
    filter: '',
  },
  authorized: false,
  loading: false,
};
