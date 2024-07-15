import { createEntityAdapter, EntityState } from '@ngrx/entity';

import { VideoInterface } from '@/youtube/models/video.model';

// YOUTUBE

export interface YoutubeSearchResultState extends EntityState<VideoInterface> { }

export interface YoutubeState {
  data: {
    result: YoutubeSearchResultState
  }
}

export const videoAdapter = createEntityAdapter<VideoInterface>({
  selectId: (video) => video.id,
});

// APP

export interface State extends YoutubeState {
  loading: boolean;
}

export const initialState: State = {
  data: {
    result: videoAdapter.getInitialState(),
  },
  loading: false,
};
