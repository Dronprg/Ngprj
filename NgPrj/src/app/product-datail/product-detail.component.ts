import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductCart } from '../product-cart';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @Input() productCart?: ProductCart;
  @Output() addToCartEvent = new EventEmitter<ProductCart>();

  addToCartClick(productCart: ProductCart) {
    this.addToCartEvent.emit(productCart);
  }

}
