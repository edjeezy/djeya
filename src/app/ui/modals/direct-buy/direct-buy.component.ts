import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-direct-buy',
  templateUrl: './direct-buy.component.html',
  styleUrls: ['./direct-buy.component.scss']
})
export class DirectBuyComponent implements OnInit {
  finalPrice: number;
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<DirectBuyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _cart: CartService) {
    this.finalPrice = data.quantity * Number(data.product.prix);
  }

  ngOnInit() {
  }


  addToCart() {
    const p = this.data.product;
    p.quantity = this.data.quantity;
    p.total = this.finalPrice;
    this._cart.addToCart(p).subscribe(result => {
      this.router.navigate(['/home']).then(() => this.closeDialog());
    });
  }

  GoToCheckout() {
    const p = this.data.product;
    p.quantity = this.data.quantity;
    p.total = this.finalPrice;
    this._cart.addToCart(p).subscribe(result => {
      this.router
      .navigate(['/checkout/p/', result.id])
      .then(() => this.closeDialog());
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
