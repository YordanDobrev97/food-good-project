import { Schema } from 'mongoose'

export interface IMenu {
    _id?: string,
    name: string,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    price: number,
    imageUrl: string,
    description: string
}