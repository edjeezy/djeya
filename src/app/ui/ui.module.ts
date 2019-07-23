import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { IonicModule } from '@ionic/angular';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HomeCategoriesComponent } from './home-categories/home-categories.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import { LayoutModule } from '@angular/cdk/layout';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

import { SearchMenuComponent } from './search-menu/search-menu.component';
import { CartMenuComponent } from './cart-menu/cart-menu.component';
import { RouterModule } from '@angular/router';
import { DirectBuyComponent } from './modals/direct-buy/direct-buy.component';

import { FirebaseUIModule } from 'firebaseui-angular';
import { CategoriesDisplayComponent } from './categories-display/categories-display.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const deps = [
  CommonModule,
  RouterModule,
  IonicModule,
  MatTabsModule,
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatDialogModule,
  MatChipsModule,
  MatCardModule,
  MatProgressBarModule,
  MatTabsModule,
  LayoutModule,
  AngularFireStorageModule,
  AngularFireDatabaseModule,
  AngularFirestoreModule,
  AngularFireAuthModule,
  AngularFireStorageModule,
  MatProgressSpinnerModule,
  FirebaseUIModule
];

@NgModule({
  declarations: [MainNavComponent, MegaMenuComponent,
    SideMenuComponent, HomeCategoriesComponent,
    SearchMenuComponent, CartMenuComponent, DirectBuyComponent, CategoriesDisplayComponent],
  imports: [
    deps
  ],
  exports: [
    deps,
    MainNavComponent,
    MegaMenuComponent,
    SideMenuComponent,
    HomeCategoriesComponent,
    SearchMenuComponent,
    CartMenuComponent,
    CategoriesDisplayComponent
  ],
  entryComponents: [
    DirectBuyComponent
  ]
})
export class UiModule { }
