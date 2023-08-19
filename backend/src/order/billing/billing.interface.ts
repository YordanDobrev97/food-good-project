import { ObjectId, Document } from 'mongoose'

export interface IBilling {
   creditCard: string,
   expireDate: Date,
   cvcNumber: number,
}