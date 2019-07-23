import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  isAdmin;
  seller: any;
  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
    this.storage.get('seller').then((seller) => {
      this.seller = seller;
    });
  }

  logout() {
    this.storage.remove('seller').then(() => {
      this.router.navigate(['/home']);
    });
  }

}
