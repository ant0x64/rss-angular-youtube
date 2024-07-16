import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideRouter, withHashLocation } from '@angular/router';

import { provideAnimations } from '@angular/platform-browser/animations';

// STORE
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { reducer } from './store/reducers';
import { AppEffects } from './store/effects';

// APP

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes, withHashLocation()),

    provideStore(),
    provideState('app', reducer),
    provideEffects(AppEffects),

    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
  ],
};
