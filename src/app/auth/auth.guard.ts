import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { selectIsAuth } from '../store/selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router,
  ) {}

  canActivate() {
    return this.store.select(selectIsAuth).pipe(
      take(1),
      map((isAuth) => {
        if (!isAuth) {
          this.router.navigate(['/auth']);
          return false;
        }

        return true;
      }),
    );
  }
}
