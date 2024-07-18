import {
  Component, OnInit, ViewChild, ViewContainerRef,
} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LogoComponent } from '@/core/components/logo/logo.component';
import { ContainerWrapperComponent } from '@/shared/components/container/container-wrapper.component';
import { HeaderService } from '@/core/services/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [LogoComponent, FlexLayoutModule, ContainerWrapperComponent],
})
export class HeaderComponent implements OnInit {
  @ViewChild('elements', { static: true, read: ViewContainerRef })
  private elementsContainer!: ViewContainerRef;

  constructor(
    private headerService: HeaderService,
  ) { }

  ngOnInit(): void {
    this.headerService.elements$.subscribe((elements) => {
      this.elementsContainer.clear();
      elements.forEach((component) => {
        this.elementsContainer.createEmbeddedView(component);
      });
    });
  }
}
