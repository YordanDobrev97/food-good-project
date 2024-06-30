import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MenuComponent } from './menu.component'
//import { MenuRoutingModule } from './menu.routing.module'

@NgModule({
  declarations: [
    MenuComponent,
    //ProductDetailComponent
  ],
  imports: [
    CommonModule,
   // MenuRoutingModule
  ],
  exports: []
})
export class MenuModule { }
