import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LogoComponent } from '@/core/components/logo/logo.component';
import { ContainerWrapperComponent } from '@/shared/components/container/container-wrapper.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [LogoComponent, FlexLayoutModule, ContainerWrapperComponent],
})
export class HeaderComponent {}
