import { async, inject, TestBed } from '@angular/core/testing';

import { ShoppingOrderService } from 'app/services/shopping-order.service';

describe('ShoppingOrderService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                ShoppingOrderService,
            ],
        }).compileComponents();
    }));

    it('should be created', inject([ShoppingOrderService], async((service: ShoppingOrderService) => {
        expect(service).toBeTruthy();
    })));

});
