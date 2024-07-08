import { Component, Input } from '@angular/core';
import { ItemComponent } from '@/components/core/item/item.component';

import { VideoInterface } from '@/models/video.model';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  imports: [ItemComponent],
})
export class ListComponent {
  @Input() items: VideoInterface[] = [];
}
