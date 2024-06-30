import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component'

import { AdminNavbarComponent } from './core/admin-navbar/admin-navbar.component'
import { AdminFooterComponent } from './core/admin-footer/admin-footer.component'
import { AdminProductsComponent } from './admin/products/products.component'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavComponent } from './core/nav/nav.component'
import { HeaderComponent } from './core/header/header.component'
import { FooterComponent } from './core/footer/footer.component'
import { MainComponent } from './main/main.component'

import { provideToastr } from 'ngx-toastr'
import { ToastrModule } from 'ngx-toastr'
import { AuthenticationModule } from './authentication/authentication.module'
import { ProductsModule } from './products/products.module';
import { AboutComponent } from './about/about.component';
import { CartModule } from './cart/cart.module'
import { UserModule } from './user/user.module'
import { MenuModule } from './menu/menu.module'
import { AdminModule } from './admin/admin.module'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    MainLayoutComponent,
    AdminLayoutComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticationModule,
    ProductsModule,
    CartModule,
    UserModule,
    MenuModule,
    AdminModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideAnimations(),
    provideToastr()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
