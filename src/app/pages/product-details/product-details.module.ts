import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsPage } from './product-details.page';
import { UiModule } from 'src/app/ui/ui.module';
import { DComponent } from './d/d.component';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsPage,
    children: [
      { path: 'd/:id', component: DComponent },
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
  declarations: [ProductDetailsPage, DComponent]
})
export class ProductDetailsPageModule {}
