import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductDetail } from '../interfaces/productDetail.interface';
import { CartService } from 'src/app/cart/cartService.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  quantity: number = 0
  productDetail: ProductDetail = { _id: '', name: '', description: '', imageUrl: '', price: 0 }
  isAdded: boolean = false

  constructor(
    private productService: ProductService,
    private activedRoute: ActivatedRoute,
    private cartService: CartService) {
  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params: Params) => {
      const id = params['id']
      this.productService.getById(`${id}`).subscribe((product) => {
        this.productDetail = product
      })
    })
  }

  decreaseValue() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  increaseValue() {
    this.quantity++;
  }

  addToCart() {
    if (this.quantity > 0) {
      this.cartService.add(
        {
          id: this.productDetail._id,
          name: this.productDetail.name,
          imageUrl: this.productDetail.imageUrl,
          price: this.productDetail.price,
          quantity: this.quantity
        })
    
        this.checkIsAdded()
    }
  }

  removeFromCart() {
    this.cartService.remove(this.productDetail._id) 
    this.checkIsAdded()
  }

  private checkIsAdded() {
    this.isAdded = this.cartService.getItems().length > 0
  }
}
