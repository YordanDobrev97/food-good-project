import { Request, Response, NextFunction } from 'express'

import { UserService } from './user.service'
import { userPrefix } from '../constants/apiPrefix'
import jwtUtils from '../utils/jwt'

export class UserController {
  async createUser(req: Request, res: Response, next: NextFunction) {
    console.log(`post: ${userPrefix}/createUser`)
    const { username, password } = req.body
    const user = await UserService.createUser(username, password)
    const jwt = jwtUtils.generateJwt({ id: user._id, username, password, profileImage: '' })
    res.json(jwt)
  }

  async login(req: Request, res: Response, next: NextFunction) {
    console.log(`post: ${userPrefix}/login`)
    const { username, password } = req.body

    const user = await UserService.login(username, password)
    console.log(user, 'user >>')
    if (user) {
      const token = jwtUtils.generateJwt(
        {
          id: user._id,
          username: user.username,
          password: user.password,
          profileImage: user.profileImage
        });
      return res.json(token)
    }
    res.json({ error: 'Invalid credentials' }).status(400)
  }

  async getUsers(req: Request, res: Response, next: NextFunction) {
    console.log(`get: ${userPrefix}/getUsers`)
    const user = await UserService.getById(req.params.id)
    res.json(user)
  }
}