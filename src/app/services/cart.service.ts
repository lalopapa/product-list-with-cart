import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  //private _productsList: Product[] = [] 
  private _productsList = new Map<string, {product: Product; count: number}>();

  get productsList() : {product: Product; count: number}[] {
    return [...this._productsList.values()];
  }
  
  addProduct(product: Product): void {
    const existingProduct = this._productsList.get(product.name);
    if(existingProduct) {
      this._productsList.set(existingProduct.product.name, {product: existingProduct.product, count: ++existingProduct.count});
    } else {
      this._productsList.set(product.name, {product, count: 1});
    }
  }

  removeProduct(name: string): void {
    const existingProduct = this._productsList.get(name)!;
    if(existingProduct.count === 1) {
      this._productsList.delete(existingProduct.product.name);
    } else {
      this._productsList.set(existingProduct.product.name, {product: existingProduct.product, count: --existingProduct.count});
    }
  }

  getTotal(): number {
    return this.productsList.reduce((acc, item)=>{
      const itemTotal = item.product.price * item.count;
      return acc + itemTotal;
    },0)
  }

}
