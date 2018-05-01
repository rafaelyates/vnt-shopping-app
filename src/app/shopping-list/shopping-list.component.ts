import { Component, OnDestroy, OnInit } from '@angular/core';

import 'rxjs/add/operator/mergeMap';
import { Subscription } from 'rxjs/Subscription';

import { User } from '@firebase/auth-types';

import { ShoppingItem } from 'app/models/shopping-item.model';
import { ShoppingOrder } from 'app/models/shopping-order.model';
import { AuthService } from 'app/services/auth.service';
import { ShoppingListService } from 'app/services/shopping-list.service';
import { ShoppingOrderService } from 'app/services/shopping-order.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

    private _shoppingSub: Subscription = Subscription.EMPTY;

    public listItems: ShoppingItem[];
    public itemToAdd: string = '';

    constructor(
        private shoppingListService: ShoppingListService,
        private shoppingOrderService: ShoppingOrderService,
        private authService: AuthService,
    ) { }

    public ngOnInit() {
        this._shoppingSub = this.authService.authState
            .flatMap((user: User | null) => {
                if (user) {
                    // Setup the project for the specific user
                    this.shoppingListService.setup(user);
                    this.shoppingOrderService.setup(user);
                }

                // Whenever an item is add, removed or crossed
                return this.shoppingListService.all;
            })
            .subscribe((allItems: ShoppingItem[]) => this.listItems = allItems);
    }

    public ngOnDestroy(): void {
        if (this._shoppingSub) {
            this._shoppingSub.unsubscribe();
        }
    }

    // Enables the user to add new items
    public get operationsEnabled(): boolean {
        if (!this.listItems || this.listItems.length <= 0) {
            return false;
        }

        return this.listItems.length >= 4;
    }

    // Checks if all items have been crossed
    public get itemsCrossed(): boolean {
        return this.listItems
            .every((item: ShoppingItem) => item.disabled === true);
    }

    public get total(): number {
        if (!this.listItems || this.listItems.length <= 0) {
            return 0;
        }

        return this.listItems
            .filter((item: ShoppingItem) => item.disabled)
            .map((item: ShoppingItem) => item.price * item.amount)
            .reduce((amount: number, value: number) => amount + value, 0);
    }

    public addToList(): void {
        if (this.itemToAdd === '') {
            return;
        }

        // Generates a random price for the product
        const price: number = this.generateRandomPrice();
        // creates a new item
        const newItem: ShoppingItem = new ShoppingItem(null, this.itemToAdd, false, price, 1);
        // adds it to the list
        this.shoppingListService.add(newItem);
        // clear text
        this.itemToAdd = '';
    }

    public orderTheList(): void {
        // The user still need to fill the list and cross all values
        if (!this.operationsEnabled || !this.itemsCrossed) {
            return;
        }

        const order: ShoppingOrder = new ShoppingOrder(
            null,
            new Date().toUTCString(),
            this.total,
            this.listItems
        );

        this.shoppingOrderService.add(order);

        // Clear the current list
        this.listItems.forEach((item: ShoppingItem) => this.shoppingListService.remove(item));
    }

    private generateRandomPrice(): number {
        const integers: number = Math.random() * 90;
        const floating: number = Math.random() + 10;

        return Math.round((integers + floating) * 100 + Number.EPSILON) / 100;
    }
}
