import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { VideoInterface } from '@/youtube/models/video.model';

@Component({
  selector: 'app-item-statistics',
  standalone: true,
  imports: [
    MatIcon,
  ],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.scss',
})
export class YoutubeItemStatisticComponent {
  @Input() data!: VideoInterface['statistics'];
}
