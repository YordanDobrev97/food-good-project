import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavComponent } from './core/nav/nav.component'
import { HeaderComponent } from './core/header/header.component'
import { FooterComponent } from './core/footer/footer.component'
import { MainComponent } from './main/main.component'

import { provideToastr } from 'ngx-toastr'
import { ToastrModule } from 'ngx-toastr'
import { LoginComponent } from './authentication/login/login.component'
import { RegisterComponent } from './authentication/register/register.component'
import { AuthenticationModule } from './authentication/authentication.module'
import { ProductsModule } from './products/products.module'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticationModule,
    ProductsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideAnimations(),
    provideToastr()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
