import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() data: unknown;
}
