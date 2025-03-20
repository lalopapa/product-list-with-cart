import { Component, Input } from '@angular/core';
import { AppButtonComponent } from '../../shared/components/app-button/app-button.component';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [AppButtonComponent],
  providers: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  standalone: true
})
export class ProductCardComponent {
  @Input() product!: Product;
  
  constructor(private readonly cartService: CartService) { }
  clicked(product: Product):void {
    this.cartService.addProduct(product); 
  }
}
