import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingOrderComponent } from 'app/shopping-order/shopping-order.component';

describe('ShoppingOrderComponent', () => {
    let component: ShoppingOrderComponent;
    let fixture: ComponentFixture<ShoppingOrderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShoppingOrderComponent],
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(ShoppingOrderComponent);
                component = fixture.debugElement.componentInstance;
                fixture.detectChanges();
            });
    }));

    it('should create the shopping order', async(() => {
        expect(component).toBeTruthy();
    }));
});
