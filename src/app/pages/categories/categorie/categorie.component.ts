import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription, of, from, Observable, BehaviorSubject } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit, OnDestroy {
  categoryName: string;
  categoryProducts: Observable<any>;
  sub$: Subscription;
  tileConfig = new BehaviorSubject(null);
  constructor(private route: ActivatedRoute,
    private _utils: UtilsService,
    private _responsive: ResponsiveService,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    this.tileConfig.next(
      this._responsive.configureTiles()

    );
    this.sub$ = this.route.params.pipe(
      switchMap(params => {
        console.log(params);
        this.categoryName = params['category_name'];
        this.processCategories(params['category_name']);
        return of(params['category_name']);
      }
      )).subscribe();
  }

  processTitle(title: string) {
    return title.replace('_', ' ');
  }

  processCategories(name) {
    return this.categoryProducts = this.firestore
      .collection('produits', ref => ref.where('category_value', '==', name)).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as any;
            data.id = a.payload.doc.id;
            return data;
          });
        }),
        map(produits => this._utils.processCategory(produits, 'sub_category_id')),
        tap(console.log),
    );
  }
  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
