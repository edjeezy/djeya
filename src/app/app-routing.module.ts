import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuardGuard } from './guards/admin-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule', canActivate: [AdminGuardGuard]},
  { path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesPageModule'  },
  { path: 'product-details', loadChildren: './pages/product-details/product-details.module#ProductDetailsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'tos', loadChildren: './pages/tos/tos.module#TosPageModule' },
  { path: 'checkout', loadChildren: './pages/checkout/checkout.module#CheckoutPageModule' },
  { path: 'livraison', loadChildren: './pages/livraison/livraison.module#LivraisonPageModule' },
  { path: 'seller-login', loadChildren: './pages/seller-login/seller-login.module#SellerLoginPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
