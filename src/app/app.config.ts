import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from '@/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
