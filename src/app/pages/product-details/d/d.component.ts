import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DirectBuyComponent } from 'src/app/ui/modals/direct-buy/direct-buy.component';
import { CartService } from 'src/app/services/cart/cart.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.scss']
})
export class DComponent implements OnInit {
  product$;
  _quantity = 1;
  constructor(private route: ActivatedRoute,
    private dialog: MatDialog,
    private _cart: CartService,
    public menu: MenuController,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.loadProduct(params['id']);
    });
  }

  setQuantity(incremental) {
    this._quantity += incremental;
  }

  loadProduct(name) {
    this.product$ = this.firestore.collection('produits').doc(name).valueChanges();
  }

  addToCart(product) {
    const dialogRef = this.dialog.open(DirectBuyComponent, {
      width: '95vw',
      data: {product: product, quantity: this._quantity}
    });

  }

  ajoutPanier(product) {
    const p = product;
    p.quantity = this._quantity;
    p.total = Number(product.prix) * Number(this._quantity);
    this._cart.addToCart(p).subscribe(result => {
      this.menu.enable(true, 'cartMenu');
      this.menu.open('cartMenu');
    });
  }

  directBuy() {

  }

}
