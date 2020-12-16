import User = firebase.User;
import UserCredential = firebase.auth.UserCredential;
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<firebase.User | null>(null);

  constructor(public afa: AngularFireAuth) {
    this.afa.user.subscribe((u) => {
      this.user$.next(u);
    });
  }

  public login(): Observable<UserCredential> {
    return from(
      this.afa.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    );
  }

  public logout(): Observable<void> {
    return from(this.afa.signOut());
  }

  /** @deprecated Use user$ instead */
  public user(): Observable<User | null> {
    return this.user$;
  }
}
