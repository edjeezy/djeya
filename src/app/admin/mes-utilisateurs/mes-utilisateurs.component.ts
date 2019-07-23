import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mes-utilisateurs',
  templateUrl: './mes-utilisateurs.component.html',
  styleUrls: ['./mes-utilisateurs.component.scss']
})
export class MesUtilisateursComponent implements OnInit {
  newUser = {
    displayName: '',
    phone: null,
    adress: '',
    email: '',
    autresInfos: '',
    password: 'bienvenue1234',
    credentials: '',
    sellerId:  Math.floor(100000000 + Math.random() * 900000000)
  };
  seller$: Observable<any>;
  constructor(private db: AngularFirestore,
    private toast: ToastController) { }

  ngOnInit() {
    this.seller$ = this.db.collection('sellers').valueChanges();
  }

  submit() {
    this.newUser.credentials = this.newUser.email + this.newUser.password;
    this.db.collection('sellers').add(this.newUser).then(() => {
      const ok = this.toast.create({
        message: 'Nouvel utlisateur créé avec mot de passe par défaut',
        duration: 3000
      });
    });
  }
}
