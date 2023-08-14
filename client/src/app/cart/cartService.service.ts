import { EventEmitter, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ShoppingList } from './interfaces/shoppingList.interface'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: ShoppingList[] = [
    // {
    //     id: 'dsakdjsaldsad',
    //     imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    //     name: 'Food 1',
    //     price: 33.80,
    //     quantity: 1
    // },
    // {
    //     id: 'kdsadsdl',
    //     imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    //     name: 'Food 2',
    //     price: 3.80,
    //     quantity: 1
    // },
    // {
    //     id: 'dskdsds',
    //     imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    //     name: 'Food 3',
    //     price: 5.40,
    //     quantity: 1
    // }
  ]
  productsInCartUpdated = new EventEmitter<number>();

  constructor(private http: HttpClient) {
  }

  getItems() {
    this.productsInCartUpdated.emit(this.products.length);
    return this.products
  }

  add(product: ShoppingList) {
    const isExist = this.products.find((p) => p.id == product.id)
    if (!isExist) {
        this.products.push(product)
        this.productsInCartUpdated.emit(this.getItems().length);
    }
  }

  remove(id: string) {
    const productIndex = this.products.findIndex((p) => p.id == id)
    this.products.splice(productIndex, 1)
    this.productsInCartUpdated.emit(this.getItems().length);
  }
}
