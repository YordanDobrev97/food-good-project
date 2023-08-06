import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ProductList } from './interfaces/productList.interface'


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
}
