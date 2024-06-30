import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component'
import { AdminProductsComponent } from './products/products.component'
import { CreateProductComponent } from './createProducts/createProducts.component'

import { AdminRoutingModule } from './admin.routing.module'

@NgModule({
  declarations: [
    AdminComponent,
    AdminProductsComponent,
    CreateProductComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ],
  exports: [AdminRoutingModule]
})
export class AdminModule { }
