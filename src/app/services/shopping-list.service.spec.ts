import { async, inject, TestBed } from '@angular/core/testing';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import { ShoppingListService } from 'app/services/shopping-list.service';

describe('ShoppingListService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                ShoppingListService,
                AngularFireDatabase,
                FirebaseApp
            ],
        }).compileComponents();
    }));

    it('should be created', inject([ShoppingListService], async((service: ShoppingListService) => {
        expect(service).toBeTruthy();
    })));

});
