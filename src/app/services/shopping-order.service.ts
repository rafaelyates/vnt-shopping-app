import { Injectable } from '@angular/core';
import { AngularFireAction, AngularFireDatabase, AngularFireList, DatabaseSnapshot } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';

import { User } from 'firebase';

import { ShoppingOrder } from 'app/models/shopping-order.model';

@Injectable()
export class ShoppingOrderService {

    private databaseReference: AngularFireList<ShoppingOrder>;

    constructor(
        private readonly angularFireDatabase: AngularFireDatabase,
    ) { }

    public setup(user: User): void {
        this.databaseReference = this.angularFireDatabase.list<ShoppingOrder>(user.uid + '/orders');
    }

    public get all(): Observable<ShoppingOrder[]> {
        if (!this.databaseReference) {
            return Observable.empty();
        }

        return this.databaseReference
            .snapshotChanges()
            .map((actions: AngularFireAction<DatabaseSnapshot>[]) => actions
                .map((snapshot: AngularFireAction<DatabaseSnapshot>) => snapshot.payload)
                .map((data: DatabaseSnapshot) => new ShoppingOrder(
                    data.key,
                    data.val()['date'],
                    data.val()['total'],
                    data.val()['items']
                ))
            );
    }

    public add(item: ShoppingOrder): void {
        this.databaseReference.push(item);
    }
}
