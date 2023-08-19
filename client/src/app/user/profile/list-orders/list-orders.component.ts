import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/cart/orderService.service'
import { getDecodedAccessToken } from '../../../utils'
import { UserOrder } from 'src/app/cart/interfaces/userOrder.interface'

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
  orders: UserOrder[] = []

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    const jwt = localStorage.getItem('jwt') || ''
    const userObject = getDecodedAccessToken(jwt)
    
    this.orderService.getAll(userObject.id).subscribe((ordersRes) => {
      this.orders = ordersRes
    })
  }
}
