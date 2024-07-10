import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MatGridList, MatGridTile } from '@angular/material/grid-list';

import { ItemComponent } from '@/core/components/item/item.component';
import { VideoInterface } from '@/core/models/video.model';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  imports: [ItemComponent, MatGridList, MatGridTile],
})
export class ListComponent {
  @Input() items: VideoInterface[] = [];

  responsiveMap: { [key: string]: number } = {
    [Breakpoints.XSmall]: 1,
    [Breakpoints.Small]: 2,
    [Breakpoints.Medium]: 3,
  };

  config = {
    columns: 4,
  };

  constructor(private bo: BreakpointObserver, private cd: ChangeDetectorRef) {
    this.initAdaptive();
  }

  protected initAdaptive() {
    Object.keys(this.responsiveMap).forEach((breakpoint) => {
      this.bo.observe(breakpoint).subscribe((result) => {
        if (result.matches) {
          this.config.columns = this.responsiveMap[breakpoint];
          this.cd.markForCheck();
        }
      });
    });
  }
}
