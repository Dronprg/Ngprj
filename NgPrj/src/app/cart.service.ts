import { Injectable } from '@angular/core';
import { ProductCart } from './product-cart';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProductItems: ProductCart[] = [];
  cartItemsCount = new BehaviorSubject(0);
  totalPrice = new BehaviorSubject(0);

  constructor() { }

  AddToCart(productCart: ProductCart){
    let prod = this.cartProductItems.find(x => x.product.id == productCart.product.id);

    if(prod != null) {
      prod.count = +prod.count + +productCart.count;
    }
    else {
      if(productCart.count > 0) {
            this.cartProductItems.push(productCart);
            this.cartItemsCount.next(this.GetCartItemsCount());
      }
    }

    this.totalPrice.next(this.GetSumCartItems());

    console.log(this.GetSumCartItems());
  }

  GetCartItemsCount() {
    return this.cartProductItems.length;
  }

  GetCartItems(): Observable<ProductCart> {
    return from(this.cartProductItems);
  }

  GetSumCartItems() {
    let sum : number = 0;
    this.cartProductItems.forEach(i => {
      sum = +sum + +i.count * i.product.price;
    });
    return sum;
  }
}
