import { createReducer, on } from '@ngrx/store';

import { initialState, AppState, videoAdapter } from './state';
import * as Actions from './actions';

export const reducer = createReducer(
  initialState,

  // APP

  on(Actions.appLoading, (state, { loading }): AppState => ({
    ...state,
    loading,
  })),

  // AUTH

  on(Actions.setUnauthorized, (state): AppState => ({
    ...state,
    authorized: false,
  })),

  on(Actions.setAuthorized, (state): AppState => ({
    ...state,
    authorized: true,
  })),

  // YOUTUBE

  on(Actions.youtubeSearchSuccess, (state, { result }): AppState => ({
    ...state,
    data: {
      ...state.data,
      result: videoAdapter.setAll(result, state.data.result),
    },
  })),

  on(Actions.youtubeSetSortOrder, (state, { sortOrder }): AppState => ({
    ...state,
    data: {
      ...state.data,
      sortOrder,
    },
  })),

  on(Actions.youtubeSetFilter, (state, { filter }): AppState => ({
    ...state,
    data: {
      ...state.data,
      filter,
    },
  })),

);
