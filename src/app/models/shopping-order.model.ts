import { ShoppingItem } from 'app/models/shopping-item.model';

export class ShoppingOrder {

    constructor(
        public key: string | null,
        public date: string,
        public total: number,
        public items: ShoppingItem[],
    ) { }
}
