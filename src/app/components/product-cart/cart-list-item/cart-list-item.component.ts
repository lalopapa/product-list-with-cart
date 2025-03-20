import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-list-item',
  imports: [],
  templateUrl: './cart-list-item.component.html',
  styleUrl: './cart-list-item.component.scss'
})
export class CartListItemComponent {
  @Input() deleteIcon = true;
  @Input() item!: {product: Product; count: number};
  constructor(public readonly cartService: CartService) { }
}
