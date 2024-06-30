import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component'
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component'

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'about-us', component: AboutComponent },
      { path: 'products/all', component: ProductListComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: AdminComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
