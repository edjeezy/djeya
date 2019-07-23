import { Component, OnInit } from '@angular/core';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public _responsive: ResponsiveService,
    private _db: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
  }
  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log(signInSuccessData);
    this._db.collection('utilisateurs').add(signInSuccessData.authResult.user).then(
      user => console.log(user)
    );
}

errorCallback(errorData: FirebaseUISignInFailure) {
  console.log(errorData);
}
}
