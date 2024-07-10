import { Component } from '@angular/core';
import {
  BehaviorSubject, combineLatest, map, take,
} from 'rxjs';

import {
  AsyncPipe, NgClass, NgFor, NgIf,
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';

import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';

import { VideoInterface } from '@/core/models/video.model';
import { ButtonComponent } from '@/shared/components/button/button.component';
import { ApiService } from '@/shared/services/api.service';

enum SortOrderOptions {
  DATE = 'date',
  VIEWS = 'views',
}

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgClass,
    AsyncPipe,
    FormsModule,
    ButtonComponent,
    MatIcon,
    MatInput,
    MatFormField,
    MatButtonToggle,
    MatButtonToggleGroup,
  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  readonly sortOrderOptions = Object.values(SortOrderOptions);

  private defaultOptions = {
    sortOrder: SortOrderOptions.DATE,
  };

  private itemsSubject = new BehaviorSubject<VideoInterface[]>([]);
  private items$ = this.itemsSubject.asObservable();

  loading: boolean = false;
  isSortOrderVisible = false;

  filterTerm$ = new BehaviorSubject<string>('');
  sortOrder$ = new BehaviorSubject<SortOrderOptions>(
    this.defaultOptions.sortOrder,
  );

  public result$ = combineLatest({
    items: this.items$,
    sortOrder: this.sortOrder$,
    filterTerm: this.filterTerm$,
  }).pipe(
    // eslint-disable-next-line max-len
    map(({ items, sortOrder, filterTerm }) => this.sortItems(this.filterItems(items, filterTerm), sortOrder)),
  );

  constructor(private api: ApiService) {}

  protected filterItems(items: VideoInterface[], term: string) {
    return term.length
      // eslint-disable-next-line max-len
      ? items.filter((item) => item.snippet.title.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) !== -1)
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

  search(term: string) {
    this.loading = true;
    this.api.search(term).pipe(take(1)).subscribe((items) => {
      this.itemsSubject.next(items);
      this.loading = false;
    });
  }

  setOrder(order: SortOrderOptions) {
    this.sortOrder$.next(order);
  }

  setFilterTerm(term: string) {
    this.filterTerm$.next(term);
  }

  toggleSortOrderVisibility() {
    this.isSortOrderVisible = !this.isSortOrderVisible;
  }
}
