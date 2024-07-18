import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MatGridList, MatGridTile } from '@angular/material/grid-list';

import { ItemComponent } from '@/youtube/components/item/item.component';
import { VideoInterface } from '@/youtube/models/video.model';

@Component({
  selector: 'app-list',
  standalone: true,
  template: `
    <mat-grid-list [cols]="config.columns" rowHeight="30:35" gutterSize="20px">
      @for (item of items; track $index) {
      <mat-grid-tile>
        <app-item [data]="item" />
      </mat-grid-tile>
      }
    </mat-grid-list>
  `,
  styles: 'mat-grid-tile {overflow: visible}',
  imports: [ItemComponent, MatGridList, MatGridTile],
})
export class ListComponent {
  @Input() items!: VideoInterface[];

  responsiveMap: { [key: string]: number } = {
    [Breakpoints.XSmall]: 1,
    [Breakpoints.Small]: 2,
    [Breakpoints.Medium]: 3,
    [Breakpoints.Large]: 4,
  };

  config = {
    columns: 0,
  };

  constructor(private bo: BreakpointObserver, private cd: ChangeDetectorRef) {
    this.initAdaptive();
  }

  protected initAdaptive() {
    Object.keys(this.responsiveMap)
      .forEach((breakpoint) => {
        this.bo.observe(breakpoint).subscribe((result) => {
          if (result.matches) {
            this.config.columns = this.responsiveMap[breakpoint];
            this.cd.markForCheck();
          }
        });
        if (!this.config.columns && this.bo.isMatched(breakpoint)) {
          this.config.columns = this.responsiveMap[breakpoint];
        }
      });
  }
}
