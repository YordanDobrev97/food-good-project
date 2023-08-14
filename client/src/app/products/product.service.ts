import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ProductList } from './interfaces/productList.interface'
import { ProductDetail } from './interfaces/productDetail.interface'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private api = `http://localhost:4000/api/products`
  
  constructor(private http: HttpClient) {
  }

  all() {
    return this.http.get<ProductList[]>(`${this.api}/all`)
  }

  getById(id: string) {
    return this.http.get<ProductDetail>(`${this.api}/${id}`)
  }
}
