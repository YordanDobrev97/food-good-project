import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateProductComponent } from './createProducts/createProducts.component';

const routes: Routes = [
  {
    path: 'admin',
    children: [
        {
            path: '',
            component: AdminComponent
        },
        {
            path: 'products/create',
            component: CreateProductComponent
        }
        // {
        //   path: ':id',
        //   component: ProductDetailComponent
        // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
