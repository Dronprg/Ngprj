import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from '../product-datail/product-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ProductsComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
