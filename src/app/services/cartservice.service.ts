import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor() { }

  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.productId===product.productId);//item caritems içerisinde varmı sorgusunu yapmaktadır.
    if (item) {
      item.quantity +=1;
    }else{
      let cartItem = new CartItem();
      cartItem.product=product;
      cartItem.quantity=1;
      CartItems.push(cartItem);
    }
  }
  list():CartItem[]{
    return CartItems;
  }

  removeFromCart(product:Product){
    let item:CartItem = CartItems.find(c=>c.product.productId===product.productId);
    CartItems.splice(CartItems.indexOf(item),1);//splice belirli indeksten itibaren silme işlemini yapmaktadır.
    
  }
}
