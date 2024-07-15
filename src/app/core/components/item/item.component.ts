import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { MatIcon } from '@angular/material/icon';
import { FlexModule } from '@angular/flex-layout';

import { VideoInterface } from '@/core/models/video.model';
import { ButtonComponent } from '@/shared/components/button/button.component';
import { PublicationStatusDirective } from '@/shared/directives/publication-status.directive';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgIf, MatIcon, FlexModule, ButtonComponent, PublicationStatusDirective],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() data: VideoInterface | undefined;
}
