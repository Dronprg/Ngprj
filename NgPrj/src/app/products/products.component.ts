import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { map } from 'rxjs';
import { ProductCart } from '../product-cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productCarts: ProductCart[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().pipe(
      map((prods: Product[]) => { 
        return prods.map(i => ({ 
          product: i, count: 0 
        } as ProductCart))
      }))
    .subscribe(p => this.productCarts = p);
  }

  addToCart(productCart: ProductCart){
    this.cartService.AddToCart(productCart);
  }
}
