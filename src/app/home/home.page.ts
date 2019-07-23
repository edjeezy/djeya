import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap, map } from 'rxjs/operators';
import { ResponsiveService } from '../services/responsive.service';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild('heroSlides') heroSlides: IonSlides;
  products1: any;
  products2: any;
  products3: any;
  tileConfig = new BehaviorSubject(null);
  constructor(private _db: AngularFirestore,
    private _user: UserService,
    private _responsive: ResponsiveService) {
  }

  ngOnInit() {
    this.tileConfig.next(this._responsive.configureTiles());
    console.log('State');
    // Load a array of categories from the firebase database
    // Create a slider component with custom links
    // CRUD on admin page
    // Tag Categories
  }

  ngAfterViewInit() {
    this.heroSlides.startAutoplay();
    this.products1 = this._db.collection('produits', ref => ref.where('category_value', '==', 'higyenne_beaute')).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          data.id = a.payload.doc.id;
          return data;
        });
      }),
      tap(console.log)
    );
    this.products2 = this._db.collection('produits', ref => ref.where('category_value', '==', 'univers_bebe')).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          data.id = a.payload.doc.id;
          return data;
        });
      }),
      tap(console.log)
    );

    this.products3 = this._db.collection('produits', ref => ref.where('category_value', '==', 'entretient_maison')).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          data.id = a.payload.doc.id;
          return data;
        });
      }),
      tap(console.log)
    );
  }

}
