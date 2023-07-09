import { Schema, model } from 'mongoose'
import { IUser } from './user.interface'

const userSchema = new Schema<IUser>({
    username: String,
    password: String,
    profileImage: String,
})

const userModel = model<IUser>('User', userSchema)
export default userModel