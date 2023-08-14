import { Component, OnInit } from '@angular/core'
import { ShoppingList } from '../interfaces/shoppingList.interface'
import { CartService } from '../cartService.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cartService!: CartService
  products: ShoppingList[] = []

  constructor(cartService: CartService) {
    this.cartService = cartService
  }
  ngOnInit(): void {
    this.products = this.cartService.getItems()
  }

  removeFromCart(id: string){
    this.cartService.remove(id)
  }

  get totalPrice() {
    let total = 0
    this.products.forEach((product) => {
      total += product.price
    })
    return total
  }
}
