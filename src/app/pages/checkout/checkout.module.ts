import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckoutPage } from './checkout.page';
import { CheckoutMainPageComponent } from './checkout-main-page/checkout-main-page.component';
import { UiModule } from 'src/app/ui/ui.module';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutPage, children: [
      { path: 'p/:product_id', component: CheckoutMainPageComponent },
      { path: 'account/:product_id', component: AccountComponent },
      // { path: 'livraison/:product_id/:phone', component: LivraisonComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    UiModule
  ],
  declarations: [CheckoutPage, CheckoutMainPageComponent, AccountComponent]
})
export class CheckoutPageModule {}
