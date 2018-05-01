import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { User } from '@firebase/auth-types';

import { AuthService } from 'app/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

    private _authSub: Subscription = Subscription.EMPTY;

    public user: User | null;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    public ngOnInit(): void {
        this._authSub = this.authService.authState
            .subscribe((user: User | null) => {
                if (user) {
                    this.router.navigate(['shopping-list']);
                }

                this.user = user;
            });
    }

    public ngOnDestroy(): void {
        if (this._authSub) {
            this._authSub.unsubscribe();
        }
    }

    public logIn(): void {
        this.authService.login();
    }

    public logOut(): void {
        this.authService.logout();
    }
}
