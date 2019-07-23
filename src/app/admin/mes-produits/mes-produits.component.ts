import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { CATEGORIES } from 'src/app/constants/categories';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-mes-produits',
  templateUrl: './mes-produits.component.html',
  styleUrls: ['./mes-produits.component.scss']
})
export class MesProduitsComponent implements OnInit {
  products;
  mod = new BehaviorSubject(null);
  category = { val: '', id: 0 };
  tagCategory: any;
  tag = { val: '', id: 0 };
  subCategories: any;
  subCategory = { val: '', id: 0, tags: [] };
  uploadPercent: any;
  c = CATEGORIES;
  updateNum = 0;
  seller: any;
  constructor(private db: AngularFirestore,
    private storage: Storage,
    private router: Router) { }

  ngOnInit() {
    this.tagCategory = [
      {
        id: 0,
        display_name: '',
        value: ''
      }
    ];
    this.subCategories = [
      [
        {
          id: 0,
          subcat_display_name: 'Corps',
          subcat_value: 'corps',
          tags: this.tagCategory
        }
      ]
    ];
    // ref => ref.limit(15)
    this.storage.get('seller').then((seller) => {
      this.seller = seller;
      this.products = this.db
        .collection('produits', ref => ref.where('sellerId', '==', seller.sellerId))
        .snapshotChanges()
        .pipe(
          map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data() as any;
              data.id = a.payload.doc.id;
              return data;
            });
          })
        );
    });

  }

  nav(to) {
    this.router.navigate([to]);
  }
  onSelect(prod) {
    this.mod.next(prod);
  }

  selectCategories() {
    console.log(this.category);
    this.subCategories = this.c.filter(d => d.id === this.category.id).map(e => e.sub_category);
    console.log(this.subCategories);
    return this.subCategories;
  }

  selectSubCategories() {
    this.tagCategory = this.subCategories.filter(d => d.id === this.subCategory.id);
    console.log(this.tagCategory);
  }

  modifyProd() {
    this.mod.subscribe(prod => {
      prod.category_id = this.category.id;
      prod.category_value = this.category.val;
      prod.sub_category_id = this.subCategory.id;
      prod.sub_category_value = this.subCategory.val;
      prod.tag_id = this.tag.id;
      prod.tag_value = this.tag.val;
      console.log(prod);
      this.db
        .doc('produits/' + prod.id)
        .set(prod)
        .then(res => {
          console.log('Modification effectuée');
          this.mod.next(null);
          this.router.navigate(['admin/mes-produits']);
        })
        .catch(err => console.log(err));
    });
  }

  update(product) {
    this.db
    .doc('produits/' + product.id)
    .update({sellerId: 1})
    .then(() => {
      this.updateNum += 1;
      console.log('Updated', this.updateNum);
    })
    .catch(err => console.log('Error on sending', err));
  }

  updateAll(products: any[]) {
    return products.map(product => {
      const name: string = product.name;
      const keywords_array = name.split(' ');
      const prod = {
        sellerId: 1,
      };
      this.updateNum += 1;

      this.db
        .doc('produits/' + product.id)
        .update(prod)
        .then(() => {
          this.updateNum += 1;
          console.log('Updated', this.updateNum);
        })
        .catch(err => console.log('Error on sending', err));
    });
  }
}
