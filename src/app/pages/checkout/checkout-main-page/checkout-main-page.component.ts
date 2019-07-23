import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { tap, map, filter, take } from 'rxjs/operators';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-checkout-main-page',
  templateUrl: './checkout-main-page.component.html',
  styleUrls: ['./checkout-main-page.component.scss']
})
export class CheckoutMainPageComponent implements OnInit {
  cart;
  total = 0;
  param;
  previousUrl: any;
  constructor(private route: ActivatedRoute, private router: Router, private _cart: CartService) {
  }

  ngOnInit() {
    this.route.params.pipe(take(1)).subscribe(params => {
      this.param = params['product_id'];
      if (params['product_id'] === '_') {
        this.getAllCart();
      } else {
        this.getFilteredCart(params['product_id']);
      }
    });
  }

  getAllCart() {
    this.cart = this._cart.getCart().pipe(tap(data => this.calculateTotal(data)));
  }

  getFilteredCart(id) {
    const s$ = this._cart
      .getFromCart(id)
      .pipe(
        tap((data: any) => console.log(data)),
        tap(o => {
          this.cart = of([o]);
          this.total = o.total;
        })
      )
      .subscribe(() => s$.unsubscribe());
  }

  calculateTotal(d: any[]) {
    console.log(d);
    if (d.length >= 1) {
      const reducer = (accumulator, currentValue) => accumulator.total + currentValue.total;
      d.forEach(data => {
        this.total += data.total;
      });
      console.log(this.total);
    }
  }

  goToProfilSelection() {
    this.router.navigate(['/checkout/account/', this.param]);
  }
}
