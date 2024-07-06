import { Component } from '@angular/core';
import { ListComponent } from '@/components/list/list.component';

@Component({
  selector: 'app-page-search',
  templateUrl: 'search.page.html',
  standalone: true,
  imports: [ListComponent],
})
export class SearchPage {}
