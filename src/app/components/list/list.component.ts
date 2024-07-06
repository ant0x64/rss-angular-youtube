import { Component, Input } from '@angular/core';
import { ItemComponent } from '@/components/item/item.component';

@Component({
  selector: 'app-component-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  imports: [ItemComponent],
})
export class ListComponent {
  @Input() private items: unknown[] = [];
}
