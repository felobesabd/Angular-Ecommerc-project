import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser'
import { ShareModule } from "../share/share.module";
import { AllProductsComponent } from './component/all-products/all-products.component';
import { ProductComponent } from './component/product/product.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      AllProductsComponent,
      ProductDetailsComponent,
      ProductComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        ShareModule,
        RouterModule,
    ]
})
export class ProductsModule { }
