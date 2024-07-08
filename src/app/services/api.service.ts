import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { VideoInterface } from '@/models/video.model';
import { ItemListDto } from './api.dto';

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
}
