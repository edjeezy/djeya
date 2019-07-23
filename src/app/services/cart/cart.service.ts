import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { of, from, forkJoin, BehaviorSubject } from 'rxjs';
import { switchMap, map, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartLength: BehaviorSubject<number> = new BehaviorSubject(null);
  constructor(private _user: UserService, private db: AngularFirestore) {}
  addToCart(product) {
    return this._user.authState.pipe(
      switchMap(user => {
        return this.db
          .collection('users')
          .doc(user.uid)
          .collection('panier')
          .add(product);
      })
    );
  }

  getFromCart(id) {
    return this._user.authState.pipe(
      switchMap(user => {
        console.log('YOU', user);
        if (user !== null) {
          return this.db
            .collection('users')
            .doc(user.uid)
            .collection('panier')
            .doc(id)
            .snapshotChanges()
            .pipe(
              map(action => {
                const data = action.payload.data() as any;
                data.id = id;
                return data;
              }),
              tap(console.log),

            );
        }
        return from([]);
      })
    );
  }

  getCart() {
    return this._user.authState.pipe(
      switchMap(user => {
        if (user !== null && user !== undefined) {
          return this.db
          .collection('users')
          .doc(user.uid)
          .collection('panier')
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data() as any;
                data.id = a.payload.doc.id;
                return data;
              });
            }),
            tap(console.log),
            tap(r => {
              this.cartLength.next(r.length);
            })
          );
        } else {
          return from([]);
        }
      })
    );
  }

  deleteCart(cart: any[]) {
    this._user.authState.pipe(take(1)).subscribe(you => {
      const upload = cart.map(o => {
        return from(
          this.db
            .collection('users')
            .doc(you.uid)
            .collection('panier')
            .doc(o.id)
            .delete()
        );
      });
// tslint:disable-next-line: deprecation
      const batch = forkJoin(...upload).subscribe(res => {
        batch.unsubscribe();
      });
    });
    // TODO
  }

  removeFromCart(id) {
    if (this._user.authenticated) {
      return this.db
        .doc(this._user.currentUserId)
        .collection('panier')
        .doc(this._user.currentUserId)
        .collection('panier')
        .doc(id)
        .delete();
    }
    return of(null).toPromise();
  }
}
