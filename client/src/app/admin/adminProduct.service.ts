import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { ProductData } from './inputModels/ProductData'

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {
  private api = `http://localhost:4000/api/products`

  constructor(private http: HttpClient) {
  }

  create(name: string, description: string, imageUrl: string, category: string) {
    const categoryObj = {
        name: category
    }
    const data: ProductData = {
        name,
        description,
        imageUrl,
        category: categoryObj,
    }

    console.log('data ---> ', data)

    return this.http.post<ProductData>(`${this.api}/create`, data)
  }

  getAll() {
    console.log('request to', `${this.api}/all`)

    return this.http.get<ProductData[]>(`${this.api}/all`)
  }
}
