import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';

import { ListComponent } from '@/core/components/list/list.component';
import { HeaderComponent } from '@/core/components/header/header.component';
import { SearchFormComponent } from '@/core/components/search-form/search-form.component';

import { ApiService } from '@/shared/services/api.service';
import { VideoInterface } from '@/core/models/video.model';
import { ContainerWrapperComponent } from "../../shared/components/container/container-wrapper.component";

@Component({
  selector: 'app-page-search',
  templateUrl: 'search.page.html',
  standalone: true,
  providers: [ApiService],
  imports: [ListComponent, HeaderComponent, SearchFormComponent, ContainerWrapperComponent],
})
export class SearchPage implements AfterViewInit {
  constructor(private cd: ChangeDetectorRef) {}

  @ViewChild(SearchFormComponent)
  private searchForm: SearchFormComponent | undefined;

  public items: VideoInterface[] = [];

  ngAfterViewInit() {
    if (!this.searchForm) {
      throw new Error('The search form is not initialized');
    }
    this.searchForm.result$.subscribe(this.showResult.bind(this));
  }

  protected showResult(items: VideoInterface[]) {
    this.items = [...items];
    this.cd.markForCheck();
  }
}
