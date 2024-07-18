import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  map, Observable, take,
} from 'rxjs';

import { VideoInterface } from '@/youtube/models/video.model';
import { ItemListDto } from './api.dto';

export enum SortOrderOptions {
  DATE = 'date',
  VIEWS = 'views',
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
  search(_term: string): Observable<VideoInterface[]> {
    return this.http.get<ItemListDto>('/assets/response.json').pipe(
      map((result) => result.items),
    );
  }

  getById(id: VideoInterface['id']) {
    return this.search('').pipe(take(1), map((items) => items.find((item) => item.id === id)));
  }
}
