import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    console.log('RUNNING GUARD');
    const store = await this.storage.get('seller');
    console.log(store);
    if (store) {
      return true;
    }
    this.router.navigate(['/seller-login']);
    return false;
  }
}
