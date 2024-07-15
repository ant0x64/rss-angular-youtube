import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { MatIcon } from '@angular/material/icon';
import { FlexModule } from '@angular/flex-layout';
import { VideoInterface } from '@/core/models/video.model';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgIf, MatIcon, FlexModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() data: VideoInterface | undefined;
}
