import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { BehaviorSubject } from 'rxjs';
import { debounce, tap } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  megaMenuOpenState = new BehaviorSubject(null);
  currentCat = new BehaviorSubject('higiene');
  subcat$: any;
  cartLenght;
  constructor(private menu: MenuController, public _responsive: ResponsiveService,
  public _cart: CartService) { }

  ngOnInit() {
    this.cartLenght = this._cart.cartLength.pipe(tap(console.log));
  }

  openSearch() {
    this.menu.enable(true, 'searchMenu');
    this.menu.open('searchMenu').then(res => console.log(res)).catch(err => console.log(err));
  }

  openCart() {
    this.menu.enable(true, 'cartMenu');
    this.menu.open('cartMenu').then(res => console.log(res)).catch(err => console.log(err));
  }

  openMegaMenu(ev) {
    console.log('Hovered', ev);
    setTimeout(() => {
    return this.megaMenuOpenState.next(true);

    }, 400);
  }

  closeMegaMenu(ev) {
    console.log('Leaving', ev);
    return this.megaMenuOpenState.next(false);
  }

}
