import { ChangeDetectorRef, Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { ListComponent } from '@/youtube/components/list/list.component';

import { ApiService, SortOrderOptions } from '@/youtube/services/api.service';
import { VideoInterface } from '@/youtube/models/video.model';

import {
  selectYoutubeFilter,
  selectYoutubeResult,
  selectYoutubeSortOrder,
} from '@/store/selectors';

import { HeaderElementDirective } from '@/core/directives/header.directive';
import { FilterComponent } from '../components/filter/filter.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-page-search',
  templateUrl: 'search.page.html',
  standalone: true,
  providers: [ApiService],
  imports: [
    NgIf,
    ListComponent,
    AsyncPipe,
    FilterComponent,
    HeaderElementDirective,
    ButtonComponent,
    MatIcon,
  ],
})
export class SearchPage {
  isSortOrderVisible: boolean = false;

  protected items$: Observable<VideoInterface[]>;

  constructor(private cd: ChangeDetectorRef, private store: Store) {
    this.items$ = combineLatest({
      result: this.store.select(selectYoutubeResult),
      sortOrder: this.store.select(selectYoutubeSortOrder),
      filter: this.store.select(selectYoutubeFilter),
    }).pipe(
      map(({ result, sortOrder, filter }) => {
        const items = Object.values(result.entities) as [];
        return this.sortItems(this.filterItems(items, filter), sortOrder);
      }),
    );
  }

  toggleSortOrderVisibility() {
    this.isSortOrderVisible = !this.isSortOrderVisible;
  }

  protected filterItems(items: VideoInterface[], term: string) {
    return term.length
      ? items.filter(
        (item) => item.snippet.title
          .toLocaleLowerCase()
          .indexOf(term.toLocaleLowerCase()) !== -1,
      )
      : items;
  }

  protected sortItems(
    items: VideoInterface[],
    sortOrder: SortOrderOptions,
  ): VideoInterface[] {
    return items.sort((a, b) => {
      if (sortOrder === SortOrderOptions.DATE) {
        return (
          new Date(a.snippet.publishedAt).getTime()
          - new Date(b.snippet.publishedAt).getTime()
        );
      }
      if (sortOrder === SortOrderOptions.VIEWS) {
        return (
          parseInt(a.statistics.viewCount, 10)
          - parseInt(b.statistics.viewCount, 10)
        );
      }
      return 0;
    });
  }
}
