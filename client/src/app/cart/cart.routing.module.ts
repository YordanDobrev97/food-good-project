import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component'
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: 'cart',
    children: [
        {
            path: 'products',
            component: ProductsComponent
        },
        {
          path: 'checkout',
          component: CheckoutComponent
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
