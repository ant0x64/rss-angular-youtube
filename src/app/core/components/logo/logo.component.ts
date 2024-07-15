import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <a [routerLink]="['/search']" routerLinkActive="router-link-active">
      <img src="assets/images/logo.svg" alt="Logo">
    </a>
  `,
  styles: 'img {display: block}',
  imports: [
    RouterLink,
  ],
})
export class LogoComponent {
  readonly icon = 'assets/images/logo.svg';
}
