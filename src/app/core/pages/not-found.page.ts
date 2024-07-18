import { Component } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';

@Component({
  selector: 'app-page-not-found',
  templateUrl: 'not-found.page.html',
  standalone: true,
  providers: [],
  imports: [
    FlexModule,
  ],
})
export class NotFoundPage {
}
