import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IOrder } from './interfaces/order.interface'
import { UserOrder } from './interfaces/userOrder.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private api = `http://localhost:4000/api/orders`

  constructor(private http: HttpClient) {}

  create(order: IOrder) {
    return this.http.post<IOrder>(`${this.api}/create`, order);
  }

  getAll(userId: string) {
    return this.http.get<UserOrder[]>(`${this.api}/${userId}`)
  }

  remove(id: string) {
    // const productIndex = this.products.findIndex((p) => p.id == id)
    // this.products.splice(productIndex, 1)
    // this.productsInCartUpdated.emit(this.getItems().length);
  }
}
