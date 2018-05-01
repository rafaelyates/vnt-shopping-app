export class ShoppingItem {

    constructor(
        public key: string | null,
        public name: string,
        public disabled: boolean,
        public price: number,
        public amount: number,
    ) { }
}
