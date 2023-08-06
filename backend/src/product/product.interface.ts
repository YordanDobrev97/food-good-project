import { Schema } from 'mongoose'
import { ICategory } from '../category/category.interface'

export interface IProduct {
    _id?: string,
    name: string,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    price: number,
    imageUrl: string,
    description: string
}