import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { CartService } from 'src/app/services/cart/cart.service';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';

export class Livraison {
  constructor(
    public phone: number,
    public region: string,
    public ville: string,
    public infoSuplementaire?: string
  ) {}

  toJSON() {
    return {
      phone: this.phone,
      region: this.region,
      ville: this.ville,
      infoSuplementaire: this.infoSuplementaire
    };
  }
}

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.scss']
})
export class LivraisonComponent implements OnInit {
  you;
  phone;
  cart_type = null;
  model = new Livraison(77, 'Dakar', 'yoff', '');

  submitted = false;

  constructor(
    private _user: UserService,
    private db: AngularFirestore,
    private _cart: CartService,
    private route: ActivatedRoute,
    private realtime: AngularFireDatabase
  ) {
    this.route.params.subscribe(params => {
      if (params['phone'] === '_') {
      } else {
        this.phone = params['phone'];
      }

      if (params['product_id'] === '_') {
      } else {
        this.cart_type = params['product_id'];
      }
    });
  }

  ngOnInit() {
    this.you = this._user.authState.pipe(tap(console.log));
  }

  onSubmit() {
    this._user.authState.subscribe(you => {
      if (you) {
        if (!you.isAnonymous) {
          const basicUser = {
            displayName: you.displayName,
            email: you.email,
            photoUrl: you.photoURL,
            phone: this.model.phone,
            region: this.model.region,
            ville: this.model.ville,
            infoSuplementaire: this.model.infoSuplementaire ? this.model.infoSuplementaire : ''
          };

          this.db
            .collection('users')
            .doc(you.uid)
            .set(basicUser, { merge: true })
            .then(() => {
              let i = 1;
              const timestamp = Date.now();
              if (this.cart_type === null) {
                this._cart.getCart().subscribe(cart => {
                  console.log('Panier ', cart);
                  if (cart.length >= 1) {
                    if (i === 1) {
                      this.AddOrder({ cart: cart, user: basicUser, date: timestamp }).then(() => {
                        this._cart.deleteCart(cart);
                        this.submitted = true;
                        i += 1;
                      });
                    }
                  }
                });
              } else {
                console.log(this.cart_type);
                this._cart.getFromCart(this.cart_type)
                  .subscribe(cart => {
                    console.log('Single Sale cart', cart);

                    this.AddOrder({ cart: [cart], user: basicUser, date: timestamp }).then(() => {
                      this._cart.deleteCart([cart]);
                      this.submitted = true;
                    });
                  });
              }
            });
        }
      }
    });
  }

  AddOrder(order) {
    return this.db.collection('orders').add(order).then(() => {
      let group = {};
      let i = 0;

        group = this.groupBy(order.cart, 'sellerId');
        console.log(group);
        const sellers_ids = Object.keys(group);
        console.log('seller_IDS', sellers_ids);
        sellers_ids.map(seller_id => {

          group[seller_id].forEach((cart_element) => {
          console.log('cart', cart_element);

          this.realtime.list(seller_id).push({...cart_element, ...order.user, ...order.date});
          });
        });
    });
  }
  groupBy(array, property) {
    const hash = {};
    for (let i = 0; i < array.length; i++) {
        if (!hash[array[i][property]]) { hash[array[i][property]] = []; }
        hash[array[i][property]].push(array[i]);
    }
    return hash;
}
}
