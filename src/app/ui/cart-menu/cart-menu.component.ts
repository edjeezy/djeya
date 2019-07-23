import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.scss']
})
export class CartMenuComponent implements OnInit {
  my_cart;
  numItems: number;
  total = 0;
  constructor(private _cart: CartService) { }

  ngOnInit() {
    this.my_cart = this._cart.getCart().pipe(
      tap(cart => this.numItems = cart.length),
      tap(cart => {
        if (cart.length >= 1) {
          cart.forEach(data => {
            this.total += data.total;
          });
        }
      })
    );
  }

}
