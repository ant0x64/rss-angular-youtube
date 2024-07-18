import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthInterface, TokenInterface } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private key = 'access_token';
  private storage: Storage = localStorage;

  auth(auth: AuthInterface) {
    return new Observable<TokenInterface>((subscribe) => {
      subscribe.next({
        accessToken: auth.login,
      });
    }).pipe(tap((token) => {
      this.saveToken(token);
    }));
  }

  saveToken({ accessToken }: TokenInterface) {
    this.storage.setItem(this.key, accessToken);
  }

  getToken(): TokenInterface['accessToken'] | null {
    return this.storage.getItem(this.key);
  }

  clearToken(): void {
    this.storage.removeItem(this.key);
  }
}
