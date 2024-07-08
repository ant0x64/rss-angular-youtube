import { Component, Input } from '@angular/core';
import { VideoInterface } from '@/models/video.model';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() data: VideoInterface | undefined;
}
