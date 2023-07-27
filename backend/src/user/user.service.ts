import bcrypt from 'bcrypt'

import { UserModel } from './user.model'
import { IUser } from './user.interface'

export const UserService = {
    createUser: async (username: string, password: string) => {
        const user = new UserModel()
        const hashedPassword = await bcrypt.hash(password, 10)
        return user.create({ username: username, password: hashedPassword, profileImage: '' })
    },
    login: async (username: string, password: string): Promise<IUser | null> => {
        const user = new UserModel()
        const currentUser = await user.find(username)
        const passwordMatch = await bcrypt.compare(password, currentUser.password)

        if (!passwordMatch) {
            return null
        }
        return currentUser
    },
    getById: (id: string) => {
        const user = new UserModel()
        return user.findById(id)
    }
}