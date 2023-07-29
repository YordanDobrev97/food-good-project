import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private toastr: ToastrService,
    private authService: AuthenticationService,
    private router: Router){
  }

  async login(username: HTMLInputElement, password: HTMLInputElement) {
    this.authService.login(username.value, password.value)
      .subscribe((response) => {
        if (response) {
          localStorage.setItem('jwt', response)
          this.toastr.success('Succesfully logged in')

          setTimeout(() => {
            this.router.navigate(['/'])
          }, 3000)
        }
      })
  }
}
