import {
  AfterViewInit, Component, ElementRef, ViewChild,
} from '@angular/core';
import {
  debounceTime, distinctUntilChanged, fromEvent, Observable, of, switchMap,
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

import { FlexModule } from '@angular/flex-layout';

import { Store } from '@ngrx/store';

import { youtubeSearch, youtubeSetFilter, youtubeSetSortOrder } from '@/store/actions';
import { selectYoutubeFilter, selectYoutubeSortOrder } from '@/store/selectors';

import { SortOrderOptions } from '@/youtube/services/api.service';
import { ButtonComponent } from '@/shared/components/button/button.component';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgClass,
    AsyncPipe,
    FormsModule,
    FlexModule,
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
export class SearchFormComponent implements AfterViewInit {
  readonly sortOrderOptions = Object.values(SortOrderOptions);
  isSortOrderVisible: boolean = false;

  @ViewChild('term') term!: ElementRef<HTMLInputElement>;
  filter: string = '';

  sortOrder$: Observable<SortOrderOptions>;
  filter$: Observable<string>;

  constructor(private store: Store) {
    this.sortOrder$ = this.store.select(selectYoutubeSortOrder);
    this.filter$ = this.store.select(selectYoutubeFilter);
  }

  ngAfterViewInit(): void {
    fromEvent(this.term.nativeElement, 'input').pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((event) => {
        const target = event.target as HTMLInputElement;
        return of(target.value);
      }),
    ).subscribe((term) => {
      if (term.length >= 3) {
        this.search(term);
      }
    });
  }

  search(term: string) {
    this.store.dispatch(youtubeSearch({ term }));
  }

  setOrder(sortOrder: SortOrderOptions) {
    this.store.dispatch(youtubeSetSortOrder({ sortOrder }));
  }

  setFilter(filter: string) {
    this.store.dispatch(youtubeSetFilter({ filter }));
  }

  toggleSortOrderVisibility() {
    this.isSortOrderVisible = !this.isSortOrderVisible;
  }
}
