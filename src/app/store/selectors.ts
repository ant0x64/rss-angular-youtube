import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './state';

// APP

export const selectApp = createFeatureSelector<AppState>('app');
export const selectLoading = createSelector(
  selectApp,
  (app) => app.loading,
);

// AUTH

export const selectIsAuth = createSelector(selectApp, (app) => app.authorized);

// YOUTUBE

export const selectYoutubeResult = createSelector(
  selectApp,
  (app) => app.data.result,
);

export const selectYoutubeSortOrder = createSelector(
  selectApp,
  (app) => app.data.sortOrder,
);

export const selectYoutubeFilter = createSelector(
  selectApp,
  (app) => app.data.filter,
);
