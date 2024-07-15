import { createReducer, on } from '@ngrx/store';

import { initialState, State, videoAdapter } from './state';
import * as Actions from './actions';

export const reducer = createReducer(
  initialState,

  // APP

  on(Actions.appLoading, (state, { loading }): State => ({
    ...state,
    loading,
  })),

  // YOUTUBE

  on(Actions.youtubeSearchSuccess, (state, { result }): State => ({
    ...state,
    data: {
      ...state.data,
      result: videoAdapter.setAll(result, state.data.result),
    },
  })),

);
