import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-button',
  imports: [NgStyle],
  templateUrl: './app-button.component.html',
  styleUrl: './app-button.component.scss'
})
export class AppButtonComponent {
  @Input() backgroundColor!: string;
  @Input() text!: string;
  @Input() iconUrl?: string;
  @Output() click = new EventEmitter<void>();
  
  clicked(e: Event): void {
    e.stopPropagation(); this.click.emit();
  }
}
