import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './state';

// APP

export const selectApp = createFeatureSelector<State>('app');
export const selectLoading = createSelector(
  selectApp,
  (app) => app.loading,
);

// YOUTUBE

export const selectYoutubeResult = createSelector(
  selectApp,
  (app) => app.data.result,
);
