import bcrypt from 'bcrypt'

import { UserModel } from './user.model'

export const UserService = {
    createUser: async (username: string, password: string) => {
        const user = new UserModel()
        const hashedPassword = await bcrypt.hash(password, 10)
        return user.create({ username: username, password: hashedPassword, profileImage: '' })
    },
    getById: (id: string) => {
        const user = new UserModel()
        return user.findById(id)
    }
}