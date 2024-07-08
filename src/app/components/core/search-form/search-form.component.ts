import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { VideoInterface } from '@/models/video.model';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  private resultSubject = new BehaviorSubject<VideoInterface[]>([]);

  public result$ = this.resultSubject.asObservable();
}
