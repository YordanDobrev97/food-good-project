import { Request, Response, NextFunction } from 'express'

import { UserService } from './user.service'
import { userPrefix } from '../constants/apiPrefix'
import jwtUtils from '../utils/jwt'

export class UserController {
  async createUser(req: Request, res: Response, next: NextFunction) {
    console.log(`post: ${userPrefix}/createUser`)
    console.log(req.body)
    const { username, password } = req.body
    await UserService.createUser(username, password)
    const jwt = jwtUtils.generateJwt({ username, password, profileImage: '' })
    res.json(jwt)
  }

  async getUsers(req: Request, res: Response, next: NextFunction) {
    console.log(`get: ${userPrefix}/getUsers`)
    const user = await UserService.getById(req.params.id)
    res.json(user)
  }
}