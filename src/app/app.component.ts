import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '@/core/components/header/header.component';
import { SearchFormComponent } from '@/core/components/search-form/search-form.component';
import { ContainerWrapperComponent } from '@/shared/components/container/container-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SearchFormComponent, ContainerWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'rss-angular-youtube';
}
