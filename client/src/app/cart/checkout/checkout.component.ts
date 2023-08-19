import { Component, OnInit, } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { CartService } from '../cartService.service'
import { IProduct } from '../interfaces/product.interface'
import jwt_decode from 'jwt-decode'
import { OrderService } from '../orderService.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cardNumber: number = 0
  expireDate: { month: number, year: number } = { month: 0, year: 0 }
  cvc: number = 0
  products: IProduct[] = []
  totalPrice: number = 0

  constructor(
    private toastr: ToastrService,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ){
  }

  ngOnInit(): void {
    const items = this.cartService.getItems()
    this.totalPrice = items.reduce((prev, val) => prev + val.price, 0)
    this.products = items.map(val => <IProduct>{
      id: val.id,
    });
  }

  onCardInputNumber(e: Event) {
    const input = e.target as HTMLInputElement
    this.cardNumber = Number(input.value)
  }

  onExpireInputDate(e: Event) {
    const input = e.target as HTMLInputElement

    switch (input.id) {
      case 'month':
        this.expireDate['month'] = Number(input.value)
        break;
      case 'year':
        this.expireDate['year'] = Number(input.value)
        break;
    }
  }

  onCvcInputNumber(e: Event) {
    const input = e.target as HTMLInputElement
    this.cvc = Number(input.value)
  }

  pay() {
    const jwt = localStorage.getItem('jwt') || ''
    const decoded = this.getDecodedAccessToken(jwt)
    if (this.cardNumber && this.expireDate.year && this.expireDate.month && this.cvc && this.products.length > 0 && decoded) {
      const data = {
        cardNumber: this.cardNumber,
        cvc: this.cvc,
        expireDate: new Date(this.expireDate.year, this.expireDate.month),
        productsIds: this.products,
        totalPrice: this.totalPrice,
        userId: decoded.id
      }
      console.log('save data: ', data)

      this.orderService.create(data).subscribe((response) => {
          if (response) {
            this.router.navigate(['/user/profile'])
          }
        })
    }
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}
