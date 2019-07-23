import { Component, OnInit } from '@angular/core';
import { AngularFirestore, Query } from '@angular/fire/firestore';
import {  tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import {  ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.page.html',
  styleUrls: ['./seller-login.page.scss'],
})
export class SellerLoginPage implements OnInit {
  seller;
  email = '';
  password = '';
  error = '';
  constructor(private db: AngularFirestore,
    private toast: ToastController,
    private router: Router,
  private storage: Storage) { }

  ngOnInit() {
  }

  login() {
    let message = 'Bienvenue';
    const _toast = this.toast.create(
      {
        message: message,
      });
    this.db.collection('sellers', ref => ref.where('credentials', '==', this.email + this.password).limit(1))
      .valueChanges().pipe(
      tap(console.log)
    ).subscribe((success: any[]) => {
      console.log(success.length);
      if (success.length !== 0) {
        message += success[0].displayName;
        this.storage.set('seller', success[0]).then(() => {
          _toast.then();
          this.router.navigate(['/admin']);
        });
      } else {
        this.error = 'Email ou mot de passe incorrect';
        message = 'Email ou mot de passe incorrect';
        _toast.then();
      }
    },
      error => {
        this.error = 'Erreur réseau';
        _toast.then();
        console.log(error);
      });
  }

}
