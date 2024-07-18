import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Store } from '@ngrx/store';
import { HeaderComponent } from '@/core/components/header/header.component';
import { SearchFormComponent } from '@/core/components/search-form/search-form.component';

import { ContainerWrapperComponent } from '@/shared/components/container/container-wrapper.component';

import { AuthService } from './auth/services/auth.service';
import { setAuthorized } from './store/actions';
import { HeaderService } from './core/services/header.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SearchFormComponent,
    ContainerWrapperComponent,
  ],
  providers: [
    HeaderService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'rss-angular-youtube';
  constructor(
    private store: Store,
    private authService: AuthService,
  ) {
    if (this.authService.getToken()) {
      this.store.dispatch(setAuthorized());
    }
  }
}
