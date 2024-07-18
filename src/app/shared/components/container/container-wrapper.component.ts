import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  template: '<ng-content></ng-content>',
  styleUrl: './container-wrapper.component.scss',
})
export class ContainerWrapperComponent {
}
