import { NgComponentOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButton, MatFabButton } from '@angular/material/button';

export enum ButtonView {
  FLAT = 'mat-flat-button',
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButton, MatFabButton, NgComponentOutlet],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() shadowed: boolean = false;

  @Input() view: ButtonView = ButtonView.FLAT;
}
