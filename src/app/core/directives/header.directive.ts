import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { HeaderService } from '../services/header.service';

@Directive({
  selector: '[appHeader]',
  standalone: true,
})
export class HeaderElementDirective implements OnInit, OnDestroy {
  @Input() id!: string;

  constructor(
    private el: TemplateRef<HTMLElement>,
    private headerService: HeaderService,
  ) {}

  ngOnInit() {
    if (!this.id) {
      throw Error('ID should be specified');
    }
    this.headerService.addHeaderElement(this.el, this.id);
  }

  ngOnDestroy() {
    this.headerService.removeHeaderElement(this.id);
  }
}
