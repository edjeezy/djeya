import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authState: BehaviorSubject<firebase.User | null> = new BehaviorSubject(null);
  s: firebase.User;
  constructor(public fireAuth: AngularFireAuth) {

  }

  initListener() {
    this.fireAuth.authState
      .subscribe(result => {
      if (result === null) {
        this.fireAuth.auth.signInAnonymously();
      } else {
        this.authState.next(result);
        this.s = result;
        console.log('authstate', result);
      }
    });
  }

  // Returns true if user is logged in
get authenticated(): boolean {
  return this.s !== null;
}

get isAnonymous(): boolean {
  return this.s.isAnonymous;
}

get currentUser(): any {
  return this.authenticated ? this.s : null;
}

// Returns current user UID
get currentUserId(): string {
  return this.authenticated ? this.s.uid : '';
}
}
