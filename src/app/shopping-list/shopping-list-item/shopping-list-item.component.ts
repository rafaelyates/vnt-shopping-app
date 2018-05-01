import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { ShoppingItem } from 'app/models/shopping-item.model';
import { ShoppingListService } from 'app/services/shopping-list.service';

@Component({
    selector: 'app-shopping-list-item',
    templateUrl: './shopping-list-item.component.html',
    styleUrls: ['./shopping-list-item.component.scss'],
})
export class ShoppingListItemComponent implements OnInit, OnDestroy {

    @Input()
    public item: ShoppingItem;

    public itemAmount: number = 1;

    constructor(
        private shoppingListService: ShoppingListService,
    ) { }

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public removeFromList(): void {
        this.shoppingListService.remove(this.item);
    }

    public crossItem(): void {
        const clone: ShoppingItem = Object.assign({}, this.item, { disabled: true });
        this.shoppingListService.update(clone);
    }

    public saveAmount(): void {
        if (this.itemAmount < 1) {
            return;
        }

        this.item.amount = this.itemAmount;
        this.shoppingListService.update(this.item);
    }

}
