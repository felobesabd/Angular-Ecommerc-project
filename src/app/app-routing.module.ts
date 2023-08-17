import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/component/product-details/product-details.component';
import { CartsComponent } from './carts/component/carts/carts.component';
import { AllProductsComponent } from './products/component/all-products/all-products.component';

const routes: Routes = [
  {path:'products', component: AllProductsComponent},
  {path:'details/:id', component: ProductDetailsComponent},
  {path:'cart', component: CartsComponent},
  {path:'**', redirectTo:'products', pathMatch:'full'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
