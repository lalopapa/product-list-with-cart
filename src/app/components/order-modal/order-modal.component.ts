import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartListItemComponent } from '../product-cart/cart-list-item/cart-list-item.component';

@Component({
  selector: 'app-order-modal',
  imports: [CartListItemComponent],   
  templateUrl: './order-modal.component.html', 
  styleUrl: './order-modal.component.scss',
  standalone: true
})
export class OrderModalComponent {
  @Output() closeClicked = new EventEmitter<void>();
  constructor(public readonly cartService: CartService) {}
  closeModal(): void {
    this.closeClicked.emit();
  }
}
