import { Request, Response, NextFunction } from "express"
import User from './user.model'

const prefix = 'api'

class UserController {
  constructor() {}

  async createUser(req: Request, res: Response, next: NextFunction) {
    console.log(`post: ${prefix}/createUser`)

    const user = new User({
        username: 'Dancho',
        password: '123456',
        profileImage: 'no'
    })
    user.save()
    console.log('user was created!')
    res.json('OK')
  }

  async getUsers(req: Request, res: Response, next: NextFunction) {
    console.log(`get: ${prefix}/getUsers`)

    return res.status(200).json({
      success: true,
      data: [
        {
          name: "John",
        },
        {
          name: "Steve",
        },
      ],
    })
  }
}

export default new UserController()