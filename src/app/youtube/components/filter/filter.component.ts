import {
  Component,
  Input,
} from '@angular/core';
import {
  Observable,
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

import { youtubeSetFilter, youtubeSetSortOrder } from '@/store/actions';
import { selectYoutubeFilter, selectYoutubeSortOrder } from '@/store/selectors';

import { SortOrderOptions } from '@/youtube/services/api.service';
import { ButtonComponent } from '@/shared/components/button/button.component';

@Component({
  selector: 'app-filter',
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
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  readonly sortOrderOptions = Object.values(SortOrderOptions);
  @Input() isSortOrderVisible: boolean = false;

  filter: string = '';

  sortOrder$: Observable<SortOrderOptions>;
  filter$: Observable<string>;

  constructor(private store: Store) {
    this.sortOrder$ = this.store.select(selectYoutubeSortOrder);
    this.filter$ = this.store.select(selectYoutubeFilter);
  }

  setOrder(sortOrder: SortOrderOptions) {
    this.store.dispatch(youtubeSetSortOrder({ sortOrder }));
  }

  setFilter(filter: string) {
    this.store.dispatch(youtubeSetFilter({ filter }));
  }
}
