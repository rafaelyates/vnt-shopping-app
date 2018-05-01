import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';

import { firebase } from '@firebase/app';
import { User } from '@firebase/auth-types';

@Injectable()
export class AuthService implements CanActivate {

    constructor(
        private angularFireAuth: AngularFireAuth
    ) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.angularFireAuth.authState.map((user: User | null) => user ? true : false);
    }

    public login(): void {
        if (!firebase.auth) {
            return;
        }

        this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    public logout(): void {
        this.angularFireAuth.auth.signOut();
    }

    public get authState(): Observable<User | null> {
        return this.angularFireAuth.authState;
    }
}
