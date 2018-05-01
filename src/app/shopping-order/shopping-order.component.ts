import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { User } from '@firebase/auth-types';

import { ShoppingOrder } from 'app/models/shopping-order.model';
import { AuthService } from 'app/services/auth.service';
import { ShoppingOrderService } from 'app/services/shopping-order.service';

@Component({
    selector: 'app-shopping-order',
    templateUrl: './shopping-order.component.html',
    styleUrls: ['./shopping-order.component.scss'],
})
export class ShoppingOrderComponent implements OnInit, OnDestroy {

    private _orderSub: Subscription = Subscription.EMPTY;

    public orders: ShoppingOrder[];

    constructor(
        private shoppingOrderService: ShoppingOrderService,
        private authService: AuthService,
    ) { }

    public ngOnInit() {
        this._orderSub = this.authService.authState
            .flatMap((user: User | null) => {
                if (user) {
                    // Setup the project for the specific user
                    this.shoppingOrderService.setup(user);
                }

                // Gets all the orders
                return this.shoppingOrderService.all;
            })
            .subscribe((orders: ShoppingOrder[]) => this.orders = orders);
    }

    public ngOnDestroy() {
        if (this._orderSub) {
            this._orderSub.unsubscribe();
        }
    }

    public get hasOrders(): boolean {
        return this.orders && this.orders.length > 0;
    }

}
