import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, BehaviorSubject, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit, OnDestroy {
  categoryName: string;
  SubCategoryProducts: Observable<any>;
  sub$: Subscription;
  tileConfig = new BehaviorSubject(null);
  constructor(
    private route: ActivatedRoute,
    public _utils: UtilsService,
    private _responsive : ResponsiveService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.tileConfig.next(
      this._responsive.configureTiles()

    );
    this.sub$ = this.route.params.pipe(
      switchMap(params => {
        console.log(params);
        this.categoryName = params['subcategory_name'];
        this.processSubCategories(params['subcategory_name']);
        return of(params['subcategory_name']);
      }
      )).subscribe();
  }
  processSubCategories(name: any): any {
    return this.SubCategoryProducts =  this.firestore
    .collection('produits', ref => ref.where('sub_category_value', '==', name)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          data.id = a.payload.doc.id;
          return data;
        });
      }),
      map(produits => this._utils.processCategory(produits, 'tag_id')),
      tap(console.log),
  );
  }

  processTitle(title: string) {
    return title.replace('_', ' ');
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

}
