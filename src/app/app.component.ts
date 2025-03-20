import { Component, OnInit } from '@angular/core';
import { OrderModalComponent } from './components/order-modal/order-modal.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCartComponent } from "./components/product-cart/product-cart.component";
import { Product } from './models/product';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  imports: [ProductCardComponent, ProductCartComponent, OrderModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  providers:[DataService]
})
export class AppComponent implements OnInit{
  showModal = false;
  title = 'product-list-with-cart';
  productsList: Product[] = [];
  constructor(private readonly dataService: DataService){}
  ngOnInit(): void {
    this.productsList = this.dataService.getProducts();
  }
  
}
