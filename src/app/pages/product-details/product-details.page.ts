import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product$;
  constructor() { }

  ngOnInit() {

  }

  loadProduct(id) {
/*     return this.product$ = this.firestore
      .collection('produits', (ref) => ref.where(firebase.firestore.FieldPath.documentId(), '==', id))
      .valueChanges().subscribe(res => console.log(res)); */

  }

}
