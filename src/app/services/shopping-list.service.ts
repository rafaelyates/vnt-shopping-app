import { Injectable } from '@angular/core';
import { AngularFireAction, AngularFireDatabase, AngularFireList, DatabaseSnapshot } from 'angularfire2/database';

import 'rxjs/add/observable/empty';
import { Observable } from 'rxjs/Observable';

import { User } from '@firebase/auth-types';

import { ShoppingItem } from 'app/models/shopping-item.model';

@Injectable()
export class ShoppingListService {

    private databaseReference: AngularFireList<ShoppingItem>;

    constructor(
        private readonly angularFireDatabase: AngularFireDatabase,
    ) { }

    public setup(user: User): void {
        this.databaseReference = this.angularFireDatabase.list<ShoppingItem>(user.uid + '/items');
    }

    public get all(): Observable<ShoppingItem[]> {
        if (!this.databaseReference) {
            return Observable.empty();
        }

        return this.databaseReference
            .snapshotChanges()
            .map((actions: AngularFireAction<DatabaseSnapshot>[]) => actions
                .map((snapshot: AngularFireAction<DatabaseSnapshot>) => snapshot.payload)
                .map((data: DatabaseSnapshot) => new ShoppingItem(
                    data.key,
                    data.val()['name'],
                    data.val()['disabled'],
                    data.val()['price'],
                    data.val()['amount']
                ))
            );
    }

    public add(item: ShoppingItem): void {
        this.databaseReference.push(item);
    }

    public remove(item: ShoppingItem): void {
        if (!item.key) {
            return;
        }

        this.databaseReference.remove(item.key);
    }

    public update(item: ShoppingItem): void {
        if (!item.key) {
            return;
        }

        this.databaseReference.update(item.key, item);
    }

}
