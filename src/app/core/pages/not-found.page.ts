import { Component } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { HeaderComponent } from '@/core/components/header/header.component';
import { SearchFormComponent } from '@/core/components/search-form/search-form.component';

import { ContainerWrapperComponent } from '@/shared/components/container/container-wrapper.component';

@Component({
  selector: 'app-page-not-found',
  templateUrl: 'not-found.page.html',
  standalone: true,
  providers: [],
  imports: [
    FlexModule,
    HeaderComponent,
    SearchFormComponent,
    ContainerWrapperComponent,
  ],
})
export class NotFoundPage {
}
