import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListComponent } from 'app/shopping-list/shopping-list.component';

describe('ShoppingListComponent', () => {
    let component: ShoppingListComponent;
    let fixture: ComponentFixture<ShoppingListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShoppingListComponent],
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(ShoppingListComponent);
                component = fixture.debugElement.componentInstance;
                fixture.detectChanges();
            });
    }));

    it('should create the shopping list', async(() => {
        expect(component).toBeTruthy();
    }));
});
