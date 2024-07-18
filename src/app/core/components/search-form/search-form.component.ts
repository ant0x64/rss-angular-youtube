import {
  AfterViewInit, Component, ElementRef, ViewChild,
} from '@angular/core';
import {
  debounceTime, distinctUntilChanged, fromEvent, of, switchMap,
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

import { youtubeSearch } from '@/store/actions';

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
  @ViewChild('term') term!: ElementRef<HTMLInputElement>;

  constructor(private store: Store) {}

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
}
