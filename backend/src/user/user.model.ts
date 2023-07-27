import { Schema, model, Model } from 'mongoose'
import { IUser } from './user.interface'

const userSchema = new Schema<IUser>({
    username: String,
    password: String,
    profileImage: String,
})

export class UserModel {
    private model: Model<IUser>

    constructor() {
        this.model = model<IUser>('User', userSchema)
    }
  
    async create(user: IUser): Promise<IUser> {
      return (await this.model.create(user)).save()
    }
  
    async findById(id: string): Promise<IUser | null> {
      return await this.model.findById(id).exec()
    }

    async find(username: string): Promise<IUser> {
      return await this.model.findOne({ username: username }).exec()
    }
}
