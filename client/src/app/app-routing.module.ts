import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component'
import { LoginComponent } from './authentication/login/login.component'
import { RegisterComponent } from './authentication/register/register.component'
import { ProductListComponent } from './products/product-list/product-list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    component: AboutComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
