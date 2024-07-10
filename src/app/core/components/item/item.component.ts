import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { VideoInterface } from '@/core/models/video.model';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() data: VideoInterface | undefined;
}
