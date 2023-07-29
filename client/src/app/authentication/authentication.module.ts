import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './authentication.service'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { RouterModule } from '@angular/router';
import { AuthenticationRoutingModule } from './authentication.routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationRoutingModule
  ],
  providers: [AuthenticationService],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthenticationModule { }