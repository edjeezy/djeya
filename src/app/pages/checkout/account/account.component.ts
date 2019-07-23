import { Component, OnInit } from '@angular/core';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  param;
  activated = new BehaviorSubject(false);
  constructor(private route: ActivatedRoute,
    private _user: UserService,
    private router: Router) {
   }

  ngOnInit() {
    const sub = this.route.params.pipe(take(1)).subscribe(params => {
      this.param = params['product_id'];
      console.log('Param', this.param);
      this.listenToAccount();
    });
  }

  whatsappAchat() {

  }

  activateNext() {
    console.log('activating')
    this.activated.next(true);
  }

  goToInfoLivraison(phone) {
    console.log('Phone', phone);
    return this.router.navigate(['/livraison/livraison', this.param , phone]);
  }

  listenToAccount() {
    const s$ = this._user.authState
      .subscribe(
      you => {
        if (you) {
          if (!you.isAnonymous) {
            if (you.phoneNumber === null) {
              this.goToInfoLivraison('_').then(() => s$.unsubscribe());
            } else {
              this.goToInfoLivraison(you.phoneNumber).then(() => s$.unsubscribe());
            }
          }
        }


      });

  }
}
