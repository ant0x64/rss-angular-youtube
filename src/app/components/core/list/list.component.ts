import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

import { ItemComponent } from '@/components/core/item/item.component';

import { VideoInterface } from '@/models/video.model';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  imports: [ItemComponent, MatGridList, MatGridTile],
})
export class ListComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  @Input() items: VideoInterface[] = [];
}
