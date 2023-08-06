import { Component, OnInit } from '@angular/core'
import { ProductService } from '../product.service'
import { ProductList } from '../interfaces/productList.interface'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public productList: ProductList[] = []

  constructor(private productService: ProductService) {
   //  this.productList = []
  }

  ngOnInit(): void {
    this.productService.all().subscribe((products) => {
      this.productList = products
    })
  }
}
