import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategoriesPage } from './categories.page';
import { UiModule } from 'src/app/ui/ui.module';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { CategorieComponent } from './categorie/categorie.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { TagCategoryComponent } from './tag-category/tag-category.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'toutes_les_categories' },
      { path: 'toutes_les_categories', component: AllCategoriesComponent },
      { path: 'c/:category_name', component: CategorieComponent },
      { path: 'sous-categorie/:subcategory_name', component: SubCategoryComponent },
      { path: 'tag/:tag_name', component: TagCategoryComponent },

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoriesPage, AllCategoriesComponent, CategorieComponent, SubCategoryComponent, TagCategoryComponent]
})
export class CategoriesPageModule {}
