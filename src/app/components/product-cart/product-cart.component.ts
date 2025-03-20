import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartListItemComponent } from './cart-list-item/cart-list-item.component';

@Component({
  selector: 'app-product-cart',
  imports: [CartListItemComponent],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent {
  @Output() orderClicked = new EventEmitter<void>();
  constructor(public readonly cartService: CartService) {}

}
