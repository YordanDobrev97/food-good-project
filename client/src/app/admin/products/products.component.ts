import { Component, OnInit } from '@angular/core'
import { AdminProductService } from '../adminProduct.service'

import { ProductData } from '../inputModels/ProductData'

@Component({
    selector: 'app-admin-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})

export class AdminProductsComponent implements OnInit {
    private products: ProductData[] = []

    constructor(
        private productService: AdminProductService) {
    }

    getProducts() {
        return this.products
    }

    ngOnInit(): void {
        this.productService.getAll().subscribe((response) => {
            this.products = response
        })
    }
}
