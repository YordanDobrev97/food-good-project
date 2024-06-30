import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AdminProductService } from '../adminProduct.service'

@Component({
    selector: 'app-admin-products-create',
    templateUrl: './createProducts.component.html',
    styleUrls: ['./createProducts.component.css']
})

export class CreateProductComponent implements OnInit {
    isNewCategory = false
    selectedCategory = ''
    newCategory = ''

    constructor(
        private toastr: ToastrService,
        private productService: AdminProductService,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
    }

    onCategoryChange(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        this.selectedCategory = selectElement.value;
        this.isNewCategory = selectElement.value === 'new';
    }

    async create(name: HTMLInputElement, description: HTMLInputElement, imageUrl: HTMLInputElement, newCategory: string) {
        const category = this.isNewCategory ? newCategory : this.selectedCategory;

        this.productService.create(name.value, description.value, imageUrl.value, category)
            .subscribe((response) => {
                console.log('response', response)
                if (response) {
                    this.toastr.success(`${name.value} was succesfully added!`)

                    setTimeout(() => {
                        this.router.navigate(['/admin'])
                    }, 3000)
                }
            })
    }
}
