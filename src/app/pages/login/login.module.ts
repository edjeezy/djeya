import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { UiModule } from 'src/app/ui/ui.module';
import { FirebaseUIModule } from 'firebaseui-angular';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    UiModule,
    FirebaseUIModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
