import { Routes } from '@angular/router';

import { AboutComponent } from 'app/about/about.component';
import { AuthService } from 'app/services/auth.service';
import { ShoppingListComponent } from 'app/shopping-list/shopping-list.component';
import { ShoppingOrderComponent } from 'app/shopping-order/shopping-order.component';

export const APP_ROUTES: Routes = [
    {
        path: 'about',
        component: AboutComponent,
        canActivate: [AuthService]
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent,
        canActivate: [AuthService]
    },
    {
        path: 'shopping-orders',
        component: ShoppingOrderComponent,
        canActivate: [AuthService]
    },
    {
        path: '',
        redirectTo: '/shopping-list',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: ShoppingListComponent
    }
];
