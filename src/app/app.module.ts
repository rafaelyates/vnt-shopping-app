import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AboutComponent } from 'app/about/about.component';
import { AppComponent } from 'app/app.component';
import { APP_ROUTES } from 'app/app.routing.module';
import { FooterComponent } from 'app/footer/footer.component';
import { HeaderComponent } from 'app/header/header.component';
import { AuthService } from 'app/services/auth.service';
import { ShoppingListService } from 'app/services/shopping-list.service';
import { ShoppingOrderService } from 'app/services/shopping-order.service';
import { ShoppingListItemComponent } from 'app/shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListComponent } from 'app/shopping-list/shopping-list.component';
import { ShoppingOrderComponent } from 'app/shopping-order/shopping-order.component';

import { environment } from 'environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingOrderComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [
    ShoppingListService,
    ShoppingOrderService,
    AuthService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
