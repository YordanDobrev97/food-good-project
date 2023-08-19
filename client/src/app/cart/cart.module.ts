import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductsComponent } from './products/products.component'
import { CartRoutingModule } from './cart.routing.module';
import { CheckoutComponent } from './checkout/checkout.component'

@NgModule({
  declarations: [
    ProductsComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports: [ProductsComponent]
})
export class CartModule { }
