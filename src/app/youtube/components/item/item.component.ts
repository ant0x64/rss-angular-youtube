import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { FlexModule } from '@angular/flex-layout';

import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { VideoInterface } from '@/youtube/models/video.model';
import { PublicationStatusDirective } from '@/shared/directives/publication-status.directive';
import { YoutubeItemStatisticComponent } from './statistic.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    YoutubeItemStatisticComponent,
    NgIf,
    MatButtonModule,
    FlexModule,
    PublicationStatusDirective,
    RouterLink,
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() data: VideoInterface | undefined;
}
