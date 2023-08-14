import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { JWT } from '../../utils'
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cartService.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  productsInCart: number = 0

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.cartService.productsInCartUpdated.subscribe((newCount) => {
      this.productsInCart = newCount;
    })
  }

  isLogged() {
    return this.authService.isLoggedUser()
  }

  logout(){
    localStorage.removeItem(JWT)
    this.router.navigate(['/'])
  }
}
