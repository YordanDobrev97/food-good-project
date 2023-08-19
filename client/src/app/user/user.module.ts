import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileComponent } from './profile/profile.component'
import { UserRoutingModule } from './user.routing.module'
import { HeaderComponent } from './profile/header/header.component'
import { ListOrdersComponent } from './profile/list-orders/list-orders.component'


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileComponent,
    HeaderComponent,
    ListOrdersComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
