import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  providers:[DataService]
})
export class AppComponent implements OnInit{
  title = 'product-list-with-cart';
  productsList: Product[] = []
  constructor(private readonly dataService: DataService){}
  ngOnInit(): void {
    this.productsList = this.dataService.getProducts()
  }
  
}
