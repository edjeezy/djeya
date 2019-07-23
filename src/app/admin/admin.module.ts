import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminPage } from './admin.page';
import { MesProduitsComponent } from './mes-produits/mes-produits.component';
import { AjouterProduitsComponent } from './ajouter-produits/ajouter-produits.component';
import { UiModule } from '../ui/ui.module';
import { AjouterCategoriesComponent } from './ajouter-categories/ajouter-categories.component';
import { MesCommandesComponent } from './mes-commandes/mes-commandes.component';
import { MesUtilisateursComponent } from './mes-utilisateurs/mes-utilisateurs.component';
import { IonicStorageModule } from '@ionic/storage';
import { GestionPageAcceuilComponent } from './gestion-page-acceuil/gestion-page-acceuil.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'mes-produits' },
      { path: 'mes-produits', component: MesProduitsComponent },
      { path: 'ajouter-produits', component: AjouterProduitsComponent },
      { path: 'ajouter-categuories', component: AjouterCategoriesComponent },
      { path: 'mes-commandes', component: MesCommandesComponent },
      { path: 'partenaires/ua39', component: MesUtilisateursComponent },
      { path: 'gestion-page-acceuil/dkv23', component: GestionPageAcceuilComponent },

    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    UiModule,
    IonicStorageModule
  ],
  declarations: [AdminPage,
    MesProduitsComponent, AjouterProduitsComponent,
    AjouterCategoriesComponent, MesCommandesComponent,
    MesUtilisateursComponent,
    GestionPageAcceuilComponent]
})
export class AdminPageModule {}
