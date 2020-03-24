import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { ItemComponent } from './components/item/item.component';
import { ItemListComponent } from './components/item/item-list/item-list.component';
import { ItemSingleComponent } from './components/item/item-list/item-single/item-single.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemImagesComponent } from './components/item-detail/item-images/item-images.component';
import { ItemImagesSingleComponent } from './components/item-detail/item-images/item-images-single/item-images-single.component';
import { ItemService } from './components/item.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    NavComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    ItemComponent,
    ItemListComponent,
    ItemSingleComponent,
    ItemDetailComponent,
    ItemImagesComponent,
    ItemImagesSingleComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
