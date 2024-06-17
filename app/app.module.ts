// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './service/cart.service'; 
import { ExhibitionComponent } from './exhibition/exhibition.component';
import { FormComponent } from './form/form.component';
import { SignComponent} from './sign/sign.component';
import { HomeComponent } from './home/home.component';
import { SuccessComponent} from './success/success.component';
import { ArtistComponent} from './artist/artist.component';
import { BuyComponent } from './buy/buy.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CartComponent,
    ExhibitionComponent,
    FormComponent,
    SignComponent,
    HomeComponent,
    SuccessComponent,
    ArtistComponent,
    BuyComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
