import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-mes-commandes',
  templateUrl: './mes-commandes.component.html',
  styleUrls: ['./mes-commandes.component.scss']
})
export class MesCommandesComponent implements OnInit {
  commandes$: Observable<any>;
  total = 0;
  constructor(private db: AngularFirestore,
    private realtime: AngularFireDatabase,
    private storage: Storage) {
    this.storage.get('seller').then((seller) => {
      this.commandes$ = this.realtime.
        list(seller.sellerId)
        .valueChanges();
    });



  }

  ngOnInit() {
  }

}
