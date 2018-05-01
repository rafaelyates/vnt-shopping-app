import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListItemComponent } from 'app/shopping-list/shopping-list-item/shopping-list-item.component';

describe('ShoppingListItemComponent', () => {
    let component: ShoppingListItemComponent;
    let fixture: ComponentFixture<ShoppingListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShoppingListItemComponent],
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(ShoppingListItemComponent);
                component = fixture.debugElement.componentInstance;
                fixture.detectChanges();
            });
    }));

    it('should create the shopping list item', async(() => {
        expect(component).toBeTruthy();
    }));
});
