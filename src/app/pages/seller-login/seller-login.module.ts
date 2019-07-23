import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SellerLoginPage } from './seller-login.page';
import { UiModule } from 'src/app/ui/ui.module';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

const routes: Routes = [
  {
    path: '',
    component: SellerLoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AngularFirestoreModule,
    UiModule
  ],
  declarations: [SellerLoginPage]
})
export class SellerLoginPageModule {}
