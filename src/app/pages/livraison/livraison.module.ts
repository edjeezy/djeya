import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LivraisonPage } from './livraison.page';
import { UiModule } from 'src/app/ui/ui.module';
import { LivraisonComponent } from './livraison/livraison.component';

const routes: Routes = [
  {
    path: '',
    component: LivraisonPage, children: [
      { path: 'livraison/:product_id/:phone', component: LivraisonComponent },
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
  declarations: [LivraisonPage, LivraisonComponent]
})
export class LivraisonPageModule {}
