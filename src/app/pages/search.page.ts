import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { ListComponent } from '@/components/core/list/list.component';
import { HeaderComponent } from '@/components/core/header/header.component';
import { SearchFormComponent } from '@/components/core/search-form/search-form.component';

import { VideoInterface } from '@/models/video.model';

@Component({
  selector: 'app-page-search',
  templateUrl: 'search.page.html',
  standalone: true,
  imports: [ListComponent, HeaderComponent, SearchFormComponent],
})
export class SearchPage implements AfterViewInit {
  @ViewChild(SearchFormComponent)
  private searchForm: SearchFormComponent | undefined;

  items: VideoInterface[] = [];

  ngAfterViewInit() {
    if (!this.searchForm) {
      throw new Error('The search form is not initialized');
    }
    this.searchForm.result$.subscribe(this.showResult);
  }

  protected showResult(items: VideoInterface[]) {
    this.items = items;
  }
}
