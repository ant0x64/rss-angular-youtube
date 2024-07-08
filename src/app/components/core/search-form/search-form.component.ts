import { Component } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';

import { ButtonComponent } from '@/components/shared/button/button.component';

import { VideoInterface } from '@/models/video.model';
import { ApiService } from '@/services/api.service';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [MatInput, MatFormField, FormsModule, ButtonComponent],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  private resultSubject = new BehaviorSubject<VideoInterface[]>([]);

  public loading: boolean = false;

  public term: string = '';

  public result$ = this.resultSubject.asObservable();

  constructor(private api: ApiService) {}

  search() {
    this.loading = true;
    this.api
      .search(this.term)
      .pipe(take(1))
      .subscribe((items: VideoInterface[]) => {
        this.resultSubject.next(items);
        this.loading = false;
      });
  }
}
