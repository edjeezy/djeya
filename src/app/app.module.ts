import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import { IonicStorageModule } from '@ionic/storage';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr);



export const firebaseUiAuthConfig: firebaseui.auth.Config = {
  autoUpgradeAnonymousUsers: true,
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
      ],
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
  callbacks: {
    // signInFailure callback must be provided to handle merge conflicts which
    // occur when an existing credential is linked to an anonymous user.
    signInFailure: function (error) :any {
      // For merge conflicts, the error.code will be
      // 'firebaseui/anonymous-upgrade-merge-conflict'.
      if (error.code !== 'firebaseui/anonymous-upgrade-merge-conflict') {
        return Promise.resolve();
      }
      // The credential the user tried to sign in with.
      const cred = error.credential;
      // Copy data from anonymous user to permanent user and delete anonymous
      // user.
      // ...
      // Finish sign-in after data is copied.
      return firebase.auth().signInWithCredential(cred);
    }
  }
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    AppRoutingModule, UiModule, BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

