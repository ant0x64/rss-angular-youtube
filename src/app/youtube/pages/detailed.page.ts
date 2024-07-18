import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe, NgIf } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';

import { VideoInterface } from '../models/video.model';
import { ApiService } from '../services/api.service';
import { PublicationStatusDirective } from '@/shared/directives/publication-status.directive';
import { YoutubeItemStatisticComponent } from '../components/item/statistic.component';

@Component({
  selector: 'app-page-detailed',
  templateUrl: 'detailed.page.html',
  styleUrl: 'detailed.page.scss',
  standalone: true,
  providers: [],
  imports: [
    NgIf,
    FlexModule,
    PublicationStatusDirective,
    DatePipe,
    YoutubeItemStatisticComponent,
  ],
})
export class DetailedPage implements OnInit {
  data: VideoInterface | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private cd: ChangeDetectorRef,
  ) { }
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.api.getById(id || '').subscribe((result) => {
        if (!result) {
          this.router.navigate(['/404']);
        }
        this.data = result;
        this.cd.markForCheck();
      });
    });
  }
}
