import {
  Directive, ElementRef, Input, OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appPublicationStatus]',
  standalone: true,
})
export class PublicationStatusDirective implements OnInit {
  @Input() date!: string;

  protected classMap: { [key: number]: string } = {
    180: 'status-red',
    30: 'status-yellow',
    7: 'status-green',
    0: 'status-blue',
  };

  constructor(private el: ElementRef, private render: Renderer2) {
  }

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, this.getClassName());
  }

  protected getClassName() {
    const date = new Date(this.date);
    const currentDate = new Date();

    const diffDays = Math.floor((currentDate.getTime() - date.getTime()) / (1000 * 3600 * 24));

    const key = Object.keys(this.classMap)
      .map(Number)
      .sort((a, b) => b - a)
      .find((max) => diffDays >= max);

    if (key) {
      return this.classMap[key];
    }
    return 'status-none';
  }
}
