import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShareModule } from "./share/share.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { CommonModule } from '@angular/common';
import { CartsModule } from './carts/carts.module';

@NgModule({
    declarations: [
      AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ShareModule,
      FormsModule,
      RouterModule,
      HttpClientModule,
      CommonModule,
      CartsModule
    ]
})
export class AppModule { }
