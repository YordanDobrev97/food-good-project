import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { AuthenticationService } from '../authentication.service'
import { JWT } from '../../utils'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private toastr: ToastrService,
    private authService: AuthenticationService,
    private router: Router){
  }

  async registerUser(username: HTMLInputElement, password: HTMLInputElement, repeatPassword: HTMLInputElement) {
    const usernameValue = username.value
    const passwordValue = password.value
    const repeatPasswordValue = repeatPassword.value
    
    if (passwordValue !== repeatPasswordValue) {
      this.toastr.error('Password error!', 'Password doesn\'t match!');
    } else {
      this.authService.register(usernameValue, passwordValue)
      .subscribe((response) => {
        console.log('success, user -> ', response)
        if (!response) {
          this.toastr.error('Invalid user', 'Invalid password or username')
        } else {
          this.toastr.success('Succesfully', 'You logged succesfully')
          setTimeout(() => {
            localStorage.setItem(JWT, JSON.stringify(response))
            this.router.navigate(['/'])
          }, 3000)
        }
      })
    }
  }
}
